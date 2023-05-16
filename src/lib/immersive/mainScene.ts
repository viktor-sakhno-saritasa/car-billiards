import { Color3, Engine, MeshBuilder, Scene, StandardMaterial } from '@babylonjs/core';

import { MainCamera } from './mainCamera';
import { MainLight } from './mainLight';

/** Main scene of the app. */
export class MainScene {

  private readonly engine: Engine;

  private readonly scene: Scene;

  public constructor(
    canvas: HTMLCanvasElement,
  ) {
    this.engine = new Engine(canvas);
    this.scene = new Scene(this.engine);

    this.engine.runRenderLoop(() => this.scene.render());

    MainCamera.create(this.scene);
    MainLight.create(this.scene);
    this.createGround();
  }

  /** Erase 3D related resources. */
  public erase(): void {
    this.scene.dispose();
    this.engine.dispose();
  }

  // Dumb ground. Just to show something at scene
  private createGround(): void {
    const ground = MeshBuilder.CreateGround('ground', { width: 5, height: 5 });
    const material = new StandardMaterial('groundMaterial');
    material.diffuseColor = Color3.Random();
    ground.material = material;
  }
}
