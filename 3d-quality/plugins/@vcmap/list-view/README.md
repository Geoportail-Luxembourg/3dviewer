# @vcmap/list-view

> Part of the [VC Map Project](https://github.com/virtualcitySYSTEMS/map-ui)

The **ListView** plugin allows you to view all the features of a [VectorLayer](https://lib.virtualcitymap.de/core/6.0/docs/classes/VectorLayer.html) in a list.

## Key features

- View features of a layer, zoom in on the selected feature
- Feature filtering and highlighting of search terms
- PDF export of features

## Configuration

| Property            | Type        | Default     | Description                                                                         |
| ------------------- | ----------- | ----------- | ----------------------------------------------------------------------------------- |
| `maxHeight`         | `number`    | `600`       | The maximum height of the list window, in pixels.                                   |
| `viewpointDistance` | `number`    | `400`       | The distance between the camera position and the target, when zooming to a feature. |
| `highlightResults`  | `boolean`   | `true`      | Whether to highlight in real-time the search term matches.                          |
| `templates`         | _See below_ | `undefined` | The templates.                                                                      |

### Templates configuration

The `templates` property is used to assing a template to one or more layers.

It consists of an array of objects, each object requiring at least a `template` property (a string containing the template). Optional properties are: `layerNames` (an array of layer names) and `exclude` (a boolean flag, which, when true, indicates that the specified `layerNames` should be excluded, and all the other supported layers will be considered).

### Example configuration

An example configuration is shown below:

```json
"maxHeight" : 600,
"viewpointDistance":400,
"highlightResults" : true,
"templates" : [
    {
        "layerNames":["layerName1", "layerName2"],
        "template":"# Name\n{{name}}\n## A feature property\n{{properties.propertyName}}",
    },
    {
        "exclude":true,
        "layerNames":["layerToExclude"],
        "template":"# A nested property\n{{properties.object.property}}"
    }
]
```

In this example, the layers `layerName1` and `layerName2` will get the template from the first object, because templates configuration without the `exclude` flag are prioritized. The layer `layerToExclude` will not have the ListView action. Any other supported layer will get the second template.
