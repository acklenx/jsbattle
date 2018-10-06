# Artificial Intelligence Scripts

## Script Structure

Each AI script must import `tank.js` library. It contains core mechanism that will be required to program the tank. Importing of any other libraries is not allowed.

```javascript
importScripts('lib/tank.js');
```

Next, it is a good place to define all global variables and functions that will be used to control the tank. After that, it is time to initialize the tank. This step is optional so if you don't need to perform any actions at the beginning of the battle you can skip it. The callback passed into `tank.init()` is called only once, at the beginning of the battle and it has two arguments: [settings](/docs/manual/tank_settings_object.md) and [info](/docs/manual/tank_info_object.md)

```javascript
tank.init(function(settings, info) {

})
```

Heart of the AI logic is put in a callback that is passed to `tank.loop()`. This function will be called at each step of battle's simulation (usually several times per second). The time between the calls of `tank.loop()` may vary and depends on such factors as speed of simulation or performance of the machine that runs the app.

There are two parameters passed to loop callback: [state](/docs/manual/tank_state_object.md) and [control](/docs/manual/tank_control_object.md).

* state - contains information about the tank (e.g. position, amount of energy, radar data, ...)
* control - contains instructions used to control the behavior of the tank (e.g. throttle, turning, shooting, ...)

```javascript
tank.loop(function(state, control) {

});
```

## Example Script

Here is a very simple example of an AI script. It will keep turning clockwise and shoot bullets around. To make it more interesting, the tank will use a different power of bullets in each battle.

```javascript
importScripts('lib/tank.js');
var bulletPower;

tank.init(function(settings, info) {
  // use different power of bullets for each battle
  bulletPower = Math.randomRange(0.1, 1);
})

tank.loop(function(state, control) {
  control.TURN = 1;
  control.SHOOT = bulletPower;
});
```

## Debugging

To make debugging of your AI scripts easier, it is possible to pass some data from the script and display it in the battle window. This can be achieved by setting a `DEBUG` field of [control object](/docs/manual/tank_control_object.md). The value of `control.DEBUG` can be anything: from objects, arrays, numbers to strings.

![alt text](/docs/img/battle_screen_001.png)

## Read more

- [Tank State Object](/docs/manual/tank_state_object.md)
- [Tank Control Object](/docs/manual/tank_control_object.md)
- [Tank Settings Object](/docs/manual/tank_settings_object.md)
- [Tank Info Object](/docs/manual/tank_info_object.md)
- [Extended Math Object](/docs/manual/extended_math.md)
