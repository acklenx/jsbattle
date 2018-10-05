import BattleSet from '../../lib/BattleSet.js';

export default (stateHolder, aiRepository, controller) => {

  function getDifficulty(tankName) {
    let difficultyMap = {};
    difficultyMap.dummy = 1;
    difficultyMap.crazy = 1;
    difficultyMap.crawler = 1;
    difficultyMap.chicken = 2;
    difficultyMap.sniper = 2;
    difficultyMap.dodge = 2;
    difficultyMap.kamikaze = 3;
    difficultyMap.jamro = 3;

    if(difficultyMap[tankName]) return difficultyMap[tankName];
    return 0;
  }

  return (stateless) => {
    $.getJSON("tanks/index.json", (tankList) => {
      let simSpeed;
      let qualitySettings;
      let teamMode;
      let battleSetData;

      if(!stateless) {
        simSpeed = localStorage.getItem("settings.simSpeed");
        qualitySettings = localStorage.getItem("settings.quality");
        teamMode = localStorage.getItem("settings.teamMode");
        battleSetData = localStorage.getItem("settings.battleSet");
      }
      simSpeed = simSpeed ? simSpeed : 1;
      qualitySettings = qualitySettings ? qualitySettings : "auto";
      teamMode = (teamMode == 'true');
      battleSetData = battleSetData ? JSON.parse(battleSetData) : [];

      let userTankNames = aiRepository.getScriptNameList();
      aiRepository.reserveName(tankList);

      let allTanks = tankList.concat(userTankNames);
      battleSetData = battleSetData.filter((settings) => {
        return allTanks.indexOf(settings.name) != -1;
      });

      let newTanks = tankList
      .filter((value, index, self) => self.indexOf(value) === index)
      .filter((tankName) => {
        return battleSetData.find((settings) => {
          return settings.name == tankName;
        }) ? false : true;
      })
      .map((name) => ({
        name: name,
        count: 1,
        userCreated: false
      }));

      let userTanks = userTankNames
      .filter((tankName) => {
        return battleSetData.find((settings) => {
          return settings.name == tankName;
        }) ? false : true;
      })
      .map((name) => ({
        name: name,
        count: 1,
        userCreated: true
      }));

      battleSetData = battleSetData.concat(newTanks).concat(userTanks);
      let battleSet =  new BattleSet();
      battleSet.fromJSON(battleSetData);

      stateHolder.setState({
        simSpeed: simSpeed,
        qualitySettings: qualitySettings,
        battle: {
          battleSet: battleSet,
          teamMode: teamMode,
          quickBattleTank: null,
          rngSeed: Math.random()
        },
        codeRepository: {
          tankList: aiRepository.getScriptNameList()
        },
        editor: {
          originalCode: "",
          unsavedCode: "",
          tankName: ""
        },
        errorMessage: null
      });
      controller.openTankList();
    })
    .fail(() => {
      stateHolder.setState({
        errorMessage: "Cannot load and parse tanks/index.json"
      });
    });
  };
};
