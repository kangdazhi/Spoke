import BaseComponent from "./BaseComponent";
import { types } from "./utils";

export default class ShadowComponent extends BaseComponent {
  static componentName = "shadow";

  static schema = [
    { name: "castShadow", type: types.boolean, default: true },
    { name: "receiveShadow", type: types.boolean, default: true }
  ];

  updateProperty(propertyName, value) {
    super.updateProperty(propertyName, value);
    this._object.traverse(obj => {
      if (obj instanceof THREE.Mesh) {
        obj[propertyName] = value;
        obj.material.needsUpdate = true;
      }
    });
  }

  static inflate(node, _props) {
    const { component, props } = this._getOrCreateComponent(node, _props);
    Object.defineProperty(component, "_object", { enumerable: false, value: node });
    component.updateProperty("castShadow", props.castShadow);
    component.updateProperty("receiveShadow", props.receiveShadow);
    return component;
  }
}
