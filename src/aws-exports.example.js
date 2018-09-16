import Amplify from 'aws-amplify'
Amplify.configure({
  Auth: {
    // フェデレーションアイデンティティのID
    identityPoolId: 'ap-northeast-1:hogee',
    // リージョン
    region: 'ap-northeast-1',
    // ユーザープールのID
    userPoolId: 'ap-northeast-hogeeeet',
    // ユーザープールのウェブクライアントID
    userPoolWebClientId: 'fugaaaa',
    mandatorySignIn: true
  }
})
