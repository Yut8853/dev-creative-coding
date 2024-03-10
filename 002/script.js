        // オブジェクト指向で描画処理を実装するためのクラス
        class SimpleDrawing {
            // コンストラクタ：初期化処理を行う
            constructor(canvas) {
                this.canvas = document.querySelector(canvas); // キャンバス要素を取得
                this.context = this.canvas.getContext('2d'); // 描画コンテキストを取得
                this.initializeCanvas(); // キャンバスの初期化メソッドを呼び出す
                this.attachEventListeners(); // イベントリスナーを設定するメソッドを呼び出す
            }

            // キャンバスの初期設定を行うメソッド
            initializeCanvas() {
                this.canvas.width = 640; // キャンバスの幅を設定
                this.canvas.height = 480; // キャンバスの高さを設定
                this.fillStyle = 'rgb(255, 255, 0)'; // 塗りつぶし色を黄色に設定
            }

            // イベントリスナーを設定するメソッド
            attachEventListeners() {
                // マウスが動いたときのイベントリスナーを追加
                this.canvas.addEventListener('mousemove', this.draw.bind(this));
            }

            // 矩形を描画するメソッド
            draw(event) {
                // キャンバスをクリア
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                // 塗りつぶし色を設定
                this.context.fillStyle = this.fillStyle;
                // キャンバスの左上からマウスの位置までの範囲に矩形を描画
                let width = event.offsetX;
                let height = event.offsetY;
                this.context.fillRect(0, 0, width, height);
            }
        }

        // SimpleDrawingクラスのインスタンスを作成し、キャンバスのIDを渡す
        new SimpleDrawing('.canvas');