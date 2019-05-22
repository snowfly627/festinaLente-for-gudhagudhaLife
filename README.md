# festinaLente-for-gudhagudhaLife
勉強（≒実践）環境。  
実際に開発や調査を経験していくことで技術者としての知識を吸収していく。

## 勉強ルール
本勉強会における基本ルールを以下に記す。
- 他人のことを**バカにしない**
- 疑問に思ったことは**出来る限り**質問する
- 質問する前に**自分で**調べる
- **自分が**やりたいことをやる

## 運用ルール
本レポジトリにおける運用ルールを以下に記す。

### Git運用ルール
- GitFlowを利用し、master, develop, featureを意識する。  
  必ずfeatureブランチを切り、developに直接commitはしないこと！
- featureはissueに紐づけて切ること。  
  コミット時にissueに紐づけること。

### 資料運用ルール
- 他人が見ることを考えて、分かりやすいフォルダ構成を心がけること。  
  ファイル名、関数名、要素名も分かる名前を使うこと（命名力は仕事に直結する可能性大）。
- 各プロジェクト（フォルダ）には、必ずREADME.mdファイルを用意すること。

## 環境準備
以下に環境の作成方法を記載する。  
容量およびユーザ名は適宜読み替えること。
- 仮想環境の作成
  VirtualBoxを利用し、以下の仮想環境で開発を行う。
  ```
  メモリーサイズ：3 GB
  ハードディスクサイズ：30 GB
  プロセッサー：1 CPU
  言語：日本語
  ユーザ名：ubuntu
  パスワード：ubuntu
  ```
  - インストール
    - https://www.virtualbox.org/wiki/Downloads より VirtualBox(ver_5.2.20 r125813 )をインストール
    - http://releases.ubuntu.com/ よりイメージ(ubuntu-16.04.6-desktop-amd64.iso)をダウンロード
  - 新規環境を作成
    - 「仮想マシン」→「新規作成」→タイプ：Linux→メモリーサイズ：3072MB→仮想ハードディスクを作成する→VDI→可変サイズ→30GB
    - 「設定」→「ストレージ」→「コントローラ：IDE」の空を選択し、仮想光学ディスクファイルでインストールしたイメージファイルを選択
    - 起動
    - 「日本語」→「Ubuntuをインストール」→「Ubuntuのインストール中に...」→「ディスクを削除してUbuntuをインストール」
    - 「Tokyou」→「日本語、日本語」→「ubuntu:ubuntu」
    - 再起動をする前に先ほど設定した仮想光学ディスクファイルを除去
    - 再起動ではなく仮想環境を電源オフ
    - 起動

  - 初期アップデート
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get update
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get upgrade
    ```

- クリップボードの共有
  - メニューバー「デバイス」→「GUest Additions CD イメージの挿入」
  - メニューバー「デバイス」→「クリップボードの共有」→「双方向」

- vi設定
  - viの設定
    ```
    ubuntu@ubuntu-VirtualBox:~$ vi ~/.vimrc
    set nocompatible
    set backspace=indent,eol,start
    ```

- sshインストール
  - sshをインストール
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get install ssh
    ```

- gitインストール
  - パッケージ管理を更新して最新のgitをインストール
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get install software-properties-common
    ubuntu@ubuntu-VirtualBox:~$ sudo add-apt-repository ppa:git-core/ppa
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get update
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get install git
    ```

- git flowインストール
  - パッケージ管理を更新して最新のgit flowをインストール
    ```
    ubuntu@ubuntu-VirtualBox:~$ sudo add-apt-repository ppa:pdoes/gitflow-avh
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get update
    ubuntu@ubuntu-VirtualBox:~$ sudo apt-get install git-flow
    ```

- Chromeのインストール
  - <https://www.google.co.jp/chrome/?brand=CHBD&gclid=EAIaIQobChMIloD9zMjG3gIVBqyWCh192w5XEAAYASAAEgK6tPD_BwE&gclsrc=aw.ds>よりchromeをインストール
