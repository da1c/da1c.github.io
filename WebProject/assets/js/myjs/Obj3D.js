
/**
 * 3Dオブジェクトのクラス
 *
 * @class Obj3D
 * @extends {Obj}
 */
class Obj3D extends Obj {
  /**
   *  座標 vector3D
   * @memberof Obj3D
   */
  pos;
  /**
   *  回転量 vector3D
   * @memberof Obj3D
   */
  rot;

  /**
   *  拡大率 vector3D
   * @memberof Obj3D
   */
  scale;

  /**
   * Model 情報
   * @memberof Obj3D
   */
  mesh;

  /**
   *Creates an instance of Obj3D.
   * @memberof Obj3D
   */
  constructor() {
    // 基底クラスのコンストラクタ呼び出し
    super();

    this.pos = new THREE.Vector3(0,0,0);
    this.rot = new THREE.Vector3(0,0,0);
    this.scale = new THREE.Vector3(1,1,1);
  }

  /**
   *  更新処理
   * @memberof Obj3D
   */
  Update() {
  }

  /**
   *  モデルに座標反映処理
   * @memberof Obj3D
   */
  Draw() {
    this.mesh.position.set( this.pos.x, this.pos.y, this.pos.z);
    //console.log(this.mesh.position);
    this.mesh.rotation.y += 0.02;
    this.mesh.rotation.x += 0.03;
    this.mesh.rotation.z += 0.01;
  }

  /**
   *Mesh設定
   * @memberof Obj3D
   */
  SetMesh(mesh) {
    this.mesh = mesh;
  }


  /**
   *座標設定
   *
   * @param {*} x
   * @param {*} y
   * @param {*} z
   * @memberof Obj3D
   */
  SetPos( x,y,z ){
    this.pos.x = x;
    this.pos.y = y;
    this.pos.z = z;

  }

}
