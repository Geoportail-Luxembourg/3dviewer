# @vcmap/geofence

> Part of the [VC Map Project](https://github.com/virtualcitySYSTEMS/map-ui)

The **Geofence** plugin restricts the visible area in both 2D and 3D views by constraining camera movement within defined boundaries.

### Configuration

An example configuration to restrict the view to Berlin city center can be find below:

```json
  "extentOptions": {
    "coordinates": [13.35, 52.49, 13.43, 52.53],
    "projection": {
      "type": "Projection",
      "epsg": "EPSG:4326"
    },
    "type": "Extent"
  }
```
