/**
 * タスク管理クラス
 * @class TaskManager
 */
class TaskManager{


    /**
     * 本体
     * @static
     * @memberof TaskManager
     */
    static instance;

    /**
     * タスクリスト
     * @static
     * @memberof TaskManager
     */
    taskArray;

    
    /**
     *Creates an instance of TaskManager.
     * @memberof TaskManager
     */
    constructor(){
        TaskManager.instance = this;
    }

    /**
     * 初期化処理
     * 
     * @static
     * @memberof TaskManager
     */
    Init(){
        // タスクリストのメモリ
        this.taskArray = new Array();
    }

    // task登録

    /**
     *
     * @static
     * @param {*} registTask
     * @memberof TaskManager
     */
    Regist( registTask){
        // リストにタスク追加
        this.taskArray.push(registTask);
    }

    // Task更新

    /**
     *
     *
     * @memberof TaskManager
     */
    Update(){

        this.taskArray.forEach(element => {
            // Task毎の更新処理
            element.Update();
        });

    }

    // Task削除

    /**
     * Task削除
     *
     * @memberof TaskManager
     */
    Delete(){

    }


}