# @vcmap/event-control

> Part of the [VC Map Project](https://github.com/virtualcitySYSTEMS/map-ui)

The **Event Control** plugin is intended to perform actions in reaction to events. In particular, it allows callbacks to be executed in reaction to various events.

The trigger events that can be used are as follows:

- Layer state change
- Map state change
- Module added/removed
- Planning project state change
- Window state change

### Configuration

Plugin configuration is simple: the `actions` property is an array of actions, defined as follows:

| Property       | Type                   | Description                                                         | Possible values                                |
| -------------- | ---------------------- | ------------------------------------------------------------------- | ---------------------------------------------- |
| `type`         | String                 | The type of event to react to.                                      | `layer`, `map`, `module`, `planning`, `window` |
| `targetName`   | String                 | The name of the target (layer, planning id, ...) to react to.       | _any_                                          |
| `onActivate`   | Array<CallbackOptions> | Optional. Callback options to be executed on target's activation.   |                                                |
| `onDeactivate` | Array<CallbackOptions> | Optional. Callback options to be executed on target's deactivation. |                                                |

For more information about callbacks, see the [Callback documentation](https://github.com/virtualcitySYSTEMS/map-ui/blob/main/documentation/CALLBACKS.md).

#### Configuration examples

- I want to toggle the state of `layer2` at the same time as that of `layer1`:

```json
"actions": [
    {
      "type": "layer",
      "targetName": "layer1",
      "onActivate": [
        {
          "type": "ActivateLayersCallback",
          "layerNames": ["layer2"]
        }
      ],
      "onDeactivate": [
        {
          "type": "DeactivateLayersCallback",
          "layerNames": ["layer2"]
        }
      ]
    }
]
```

- I want the layer `planningLayer` to be activated when enabling the Planning project with id `planningId`:

```json
"actions": [
    {
      "type": "planning",
      "targetName": "planningId",
      "onActivate": [
        {
          "type": "ActivateLayersCallback",
          "layerNames": ["planningLayer"]
        },
      ]
    }
]
```

- I want the Legend window to open when enabling the layer `layerWithLegend`:

```json
"actions": [
    {
      "type": "layer",
      "targetName": "layerWithLegend",
      "onActivate": [
        {
          "type": "ToggleNavbarButtonCallback",
          "buttonId": "legendId",
          "activeState":true
        }
      ]
    }
]
```

- I want a module to be enabled only in 3D:

```json
"actions": [
    {
      "type": "map",
      "targetName": "cesiumMap",
      "onActivate": [
        {
          "type": "AddModuleCallback",
          "module": "config/3Dconfig.json"
        }
      ],
      "onDeactivate": [
        {
          "type": "RemoveModuleCallback",
          "moduleId": "config/3Dconfig.json"
        }
      ]
    }
]
```

- I want the map to start rotating when opening MyOwnPlugin:

```json
"actions": [
    {
      "type": "window",
      "targetName": "myOwnPluginWindowId",
      "onActivate": [
        {
          "type":"StartRotationCallback"
        }
      ]
    }
]
```
