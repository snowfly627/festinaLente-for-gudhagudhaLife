# tutorial
フロントエンドWebApp開発に向けたチュートリアル。  
トップ画面を表示し、各要素毎に適した画面を表示するWebAppを作成する。

## 目的
フレームワークを使わずに、基本的なクライアント-サーバ間で挙動するWebAppの作り方を勉強する。

## 事前準備
- Nodejs(10.15.3) インストール
nodejsのバージョン管理は面倒＋今後のバージョンアップデートを行うことも踏まえ、nパッケージを使って管理する

  - nodejsとnpmパッケージをインストール（古いnodejsがインストールされる）
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get install nodejs npm
    ubuntu@ubuntu-VirtualBox:~$ sudo npm cache clean
    ```
  - nパッケージをインストール
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo npm install n -g
    ```
  - v10.15.3のnodejsに切り替え
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo n 10.15.3
    ubuntu@ubuntu-VirtualBox:~$ sudo npm update npm -g
    ```
  - 更新されていることを確認（更新されているが更新後のパスがうまく読み込めない場合があるので一度再起動したほうがよい）
    ```
    ubuntu@ubuntu-VirtualBox:~$ node -v
    v10.15.3
    ubuntu@ubuntu-VirtualBox:~$ npm -v
    6.9.0
    ```
  - 最初にインストールした古いnodejsを削除
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get autoremove nodejs
    ```

## アプリケーション操作説明
本資材を環境に配置しておくこと。
- アプリケーション起動
  ```
  ubuntu@ubuntu-VirtualBox:~/work/festinaLente-for-gudhagudhaLife/tutorial$ node app.js
  ```
- アプリケーション終了
  ```
  Ctrl + c
  ```
- トップ画面(`http://localhost:3000/err.html`)にアクセス
