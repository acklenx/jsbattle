import Navi from "./common/navi/Navi.js";
import AiRepository from "../lib/AiRepository.js";
import FullRow from "./common/bootstrap/FullRow.js";
import Controller from "../controller/Controller.js";
import InfoBox from "./common/InfoBox.js";
import EditorScreen from "./screen/editor/EditorScreen.js";
import CodeRepositoryScreen from "./screen/editor/CodeRepositoryScreen.js";
import BattleScreen from "./screen/battle/BattleScreen.js";
import WinnerScreen from "./screen/winner/WinnerScreen.js";
import StartScreen from "./screen/start/StartScreen.js";
import Loading from "./common/Loading.js";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.aiRepository = new AiRepository(props.stateless);

    this.state = {
      navi: {
        section: "LOADING",
        page: "LOADING",
        pageData: {}
      }
    };

    this.controller = new Controller(this, this.aiRepository);
    this.controller.loadSettings(props.stateless);
  }

  showError(msg) {
    this.setState({errorMessage: msg});
  }

  onBattleExit() {
    if(this.state.battle.quickBattleTank) {
      this.controller.openCodeEditor(this.state.battle.quickBattleTank, 'TANK_LIST');
    } else {
      this.controller.openTankList();
    }
  }

  renderContent() {
    switch(this.state.navi.page) {
      case 'TANK_LIST':
        return <StartScreen
          {...this.state.battle}
          onStart={(aiDefList, teamMode, rngSeed) => this.controller.openBattle(aiDefList, teamMode, rngSeed)}
          onError={(msg) => this.showError(msg)}
          onScriptEdit={(name) => this.controller.openCodeEditor(name, 'TANK_LIST')}
          onTeamModeToggle={(isEnabled) => this.controller.toggleTeamMode(isEnabled)}
          onTankAssign={(tankName, amount) => this.controller.assignTanksToBattle(tankName, amount)}
          onTankCreate={() => this.controller.createTank()}
          onTankDelete={(name) => this.controller.removeTank(name)}
          aiRepository={this.aiRepository}
          stateless={this.props.stateless}
        />;
      case 'BATTLE':
        return <BattleScreen
          {...this.state.battle}
          renderer={this.props.renderer}
          speed={this.state.simSpeed}
          quality={this.state.qualitySettings}
          onError={(msg) => this.showError(msg)}
          onFinish={(result) => this.controller.openBattleResults(result)}
          onExit={() => this.onBattleExit()}
          stateless={this.props.stateless}
          aiRepository={this.aiRepository}
        />;
      case 'BATTLE_RESULT':
      return <WinnerScreen
        {...this.state.battle}
        onRestart={() => this.controller.openTankList()}
        onEdit={this.state.battle.quickBattleTank ? (() => this.controller.openCodeEditor(this.state.battle.quickBattleTank, 'TANK_LIST')) : null}
      />;
      case 'CODE_EDITOR':
        return <EditorScreen
          {...this.state.editor}
          aiRepository={this.aiRepository}
          name={this.state.editor.tankName}
          onClose={() => this.controller.closeCodeEditor()}
          onTest={() => this.controller.openQuickBattle(this.state.editor.tankName)}
          onRename={(newName) => this.controller.renameCurrentAiScript(newName)}
          onCodeChanged={(code) => this.controller.editCurrentAiScript(code)}
          onCodeSave={() => this.controller.saveCurrentAiScript()}
        />;
      case 'CODE_REPOSITORY':
        return <CodeRepositoryScreen
          {...this.state.codeRepository}
          aiRepository={this.aiRepository}
          onScriptEdit={(name) => this.controller.openCodeEditor(name, this.state.navi.page)}
          onTankCreate={() => this.controller.createTank()}
          onTankDelete={(name) => this.controller.removeTank(name)}
        />;
      case 'LOADING':
        return <FullRow><Loading /></FullRow>;
      default:
        return <FullRow>Oops! Page not found :/</FullRow>;
    }
  }

  render() {
    return <div>
      <Navi
        {...this.state.navi}
        speed={this.state.simSpeed}
        quality={this.state.qualitySettings}
        onSpeedChange={(v) => this.controller.setSimulationSpeed(v)}
        onQualityChange={(v) => this.controller.setSimulationQuality(v)}
        controller={this.controller}
      />
      <FullRow>
        <InfoBox message={this.state.errorMessage} level="danger"/>
      </FullRow>
      {this.renderContent()}
      <FullRow>
        <small style={{color: '#999', textAlign: 'center', borderTop: '1px solid #999', width: "100%", display: 'inline-block', padding: '5px'}}>
          Hosted on <a href="https://github.com/jamro/jsbattle" target="_blank"><i className="fa fa-github-alt" aria-hidden="true"></i> GitHub</a>.
          This project is licensed under the terms of the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>.
          Version: %%GULP_INJECT_VERSION%%.
        </small>
      </FullRow>
    </div>;
  }
}
