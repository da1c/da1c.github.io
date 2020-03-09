window.addEventListener("DOMContentLoaded", init);

var width = 900;
var height = 900;

function init() {
  // 画面サイズ
  //var THREE = require("three");

  // レンダラー作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#Canvas3D")
  });

  // 画面のリサイズ処理もここで行うようにする

  // デバイスピクセル比の設定
  renderer.setPixelRatio(window.devicePixelRatio);
  // レンダラーのサイズ指定
  renderer.setSize(width, height);

  // ここで初期化処理を行う
  sceneManager = new SceneManager();
  sceneManager.Init();
  // TaskManger作成
  taskManager = new TaskManager();
  taskManager.Init();
  // Objectマネージャー作成
  objManager = new ObjectManager();
  objManager.Init();
  // Stageマネージャー作成
  stageManager = new StageManager();
  stageManager.Init("Canvas2D");

  // カメラ作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  // カメラの座標更新
  camera.position.set(0, 0, +500);

  // 平行光源
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 2; // 光の強さを倍に
  light.position.set(1, 1, 1);

  // ライト追加
  sceneManager.AddObj(light);

  for (let x_idx = 0; x_idx < 5; x_idx++) {
    for (let y_idx = 0; y_idx < 5; y_idx++) {
      obj = new Obj3D();
      obj.SetMesh(CreateMesh(10, 10, 10));
      obj.SetPos( x_idx * 15, y_idx * 15, 0 );
      // オブジェクトをシーンに追加
      sceneManager.AddObj(obj.mesh);
    }
  }
  

  // ここでフロー開始
  // ほぼイベントドリブンにする
  // フローの進行
  Flow.Init();
  init2D();
  // 初回実行
  tick();

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
