"use strict";
console.log("strict追加");
console.log("1");
window.addEventListener("DOMContentLoaded", init);
console.log("2");
var width = 960;
var height = 540;

function init() {
  // 画面サイズ
  //var THREE = require("three");
  console.log("3");
  // レンダラー作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#Canvas3D")
  });
console.log("4");
  // 画面のリサイズ処理もここで行うようにする

  // デバイスピクセル比の設定
  renderer.setPixelRatio(window.devicePixelRatio);
  console.log("4.5");
  // レンダラーのサイズ指定
  renderer.setSize(width, height);
console.log("5");
  // ここで初期化処理を行う
  var sceneManager = new SceneManager();
  console.log("5.1.1");
  sceneManager.Init();
  console.log("5.1");
  // TaskManger作成
  var taskManager = new TaskManager();
  taskManager.Init();
  console.log("5.2");
  // Objectマネージャー作成
  var objManager = new ObjectManager();
  objManager.Init();
  console.log("5.3");
  // Stageマネージャー作成
  var stageManager = new StageManager();
  stageManager.Init("Canvas2D");
console.log("6");
  // カメラ作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
console.log("7");
  // カメラの座標更新
  camera.position.set(0, 0, +1000);
console.log("8");
  // 平行光源
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 2; // 光の強さを倍に
  light.position.set(1, 1, 1);
console.log("9");
  // ライト追加
  sceneManager.AddObj(light);
console.log("10");
  for (let x_idx = 0; x_idx < 2; x_idx++) {
    for (let y_idx = 0; y_idx < 2; y_idx++) {
      let obj = new Obj3D();
      obj.SetMesh(CreateMesh(40, 40, 40));
      obj.SetPos( x_idx * 15, y_idx * 15, 0 );
      // オブジェクトをシーンに追加
      sceneManager.AddObj(obj.mesh);
    }
  }
  
console.log("11");
  // ここでフロー開始
  // ほぼイベントドリブンにする
  // フローの進行
  Flow.Init();
  init2D();
  console.log("12");
  // 初回実行
  tick();
console.log("13");
  // フレームごとの更新処理
  function tick() {
    // 次のフレームの更新処理を登録
    requestAnimationFrame(tick);
    // 更新処理
    taskManager.Update();
    // Obejctの座標反映
    objManager.Draw();
    // レンダリング
    renderer.render(SceneManager.instance.scene, camera);
  }

  function init2D() {

    // テキストの表示
    // 座標はCanvasのサイズから算出
    var test = new Button2D(200,0,100,50,"YES", 25);
    test.AddEvent("click", clickTest);
    stageManager.AddObj(test.container);

    // Stageの描画を更新します
    stageManager.UpdateStage();
  }

  function clickTest(){
    console.log("Click");
  }

}
