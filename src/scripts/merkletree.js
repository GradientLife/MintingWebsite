const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');



export const GetProof = (address) => {
    const whitelistAddresses = ['0x3998e8De5fC37131b5D27eB887DdEb532945EC73', '0x4BdB3562156Ea36e0F0789c00DD6372C1C4AFD47', '0xD18Fc64eb92d817da29840096D0E4F2c0F623bEd', '0xb50260f2076D744A6a87d4Ba0102fA8770c08e34', '0x69d62B87D953009308ad4A1f538102E27aB78Df5', '0xC8Da24baA1636b97BbF209c91C20d48951E28dBC', '0x44fBae5935520647Eb98115e1c2F09a0D642e2B7', '0xfDD2e9e6ADD04693d60a6Da6557aA22324115137', '0x059B0d30a7E1E38731D1e9595962AF185dA96e80', '0x377645996F77F900e6b8B306b565d22596736C45', '0x8FF90F1E3E6a49a2eae9dF037daDa50667c0A284', '0x17E1E11F73B65B75C716aDc1433E94564Ef789B0', '0x394D5F1c6442ae884A684483C7E04Fde2b5D67F7', '0xF0ec04453Fc92b64b61f435EFE4a9C95A0288A79', '0xF852544Fea875C0BB766C029387395DfbD4a90cC', '0xe1b8fa08A480c63434570350F3b8deC345Ec340E', '0x4378c3c1886a89b114e68aA29964E73f5F50Ae12', '0xb4E7A9b3b53435568AAA1dc7b8217c332C901bb2', '0xcAfBA9bd4A2e61a8B197ED77267f81a6ABCA8714', '0xA18Eb8Cb4C520b350B8B3B31a6f4cab813eCd37a', '0x896bbc205073FeAc84E2ea4ca6510dC861b05C53', '0xb704D04BE52EB1A759999eC0E60d97edAE9613f3', '0xaC0D7dC49E637eE617233425C940b8baf9a3E49E', '0x6E71EE88384795d88FFA8d03dC02f46AF33D3598', '0xCBE0A1B7848457928ED9b39dfbA26883F2D25eb4', '0x6475A86dD3f81afFd323c3Fcf815b159Bdffb370', '0x07685803ed934182aE47811E800752BA7B708769', '0x5a4597D8439bB729Acd163c1234a6f2fA75Ec547', '0x07cd24C35403E88B647778ccA17B91D2ee02aFF3', '0x88B05C27E66E8DF10AC259008e820f705Ec0Ae34', '0x0813E1B0a5B1D0D67cEAc68696591f5aECc613c7', '0xe28CC8f24edA328eB311C4bf03BBa2D4bF15500F', '0x9eA913f4C2B3b256E0d0175bfe834318cb2d5e1C', '0xB0fe1e71a88b115f3b7C4053Bb1B74C5f2B3d19f', '0xdB912FAb7AB5FD40F17fD470573b3B999c62232c', '0xD399B373A1fc27C4eb7a85C0a3BB078997249E4A', '0x7bf86718f180DeA8DC418B18155E81d50aC72234', '0x239cfc72703358Fb049eC9CeCfaB37F45d1EcAB8', '0x4b38Ef4DBD564019a2fc51b6b280B736C62e0Ae8', '0x960896f13427a9462ABbf4c157Cf502bbA962867', '0x0dbE43CcA927eAfeFbe26EC510F67c7c7ECfb789', '0xD1D36ef67cefa9DF8407c40B88C9eC6B966253bC', '0x6E9C846A92E8101f3d28eBC78bc432103C6f34e6', '0xab0d2Ad721399c2E8eC6f340D1E09CBBed7c5F2B', '0xC7565DC959df44777Ef23FcF9f4b15fb5F96a12B', '0x2d3dbCB2929AFe8e9aA700EF41D14fff85bb91f5', '0x1ad0F8a8d2aBf001cc6300Ae76A9806fB055A3F5', '0x9fa03f422B5AAF9C74f0464E5AE7A3C9223d646D', '0xE401d18F6F835C12CA54E54a2f16A802b651eaa7', '0x97358Fc05be229DB4c4b086110812C817fBf532A', '0xAcd7e2577a22b57B91e101885919501B9f9869aD', '0x1e21bd70E17D43E50b9Cc13c9d6F51A4611CAC1A', '0x3D6F6268b62c401A0e417A853098d097Cac78F2e', '0x455D8cc938049f8642e575a06a9c863BcE9a6163', '0x96B258360501863aD18567fCeb41eC3e504f0690', '0x1057F6C056f4062d7b59DE01D9661Ee11E7317Ff', '0x0E88CBaEeAe8D34CF6b1f160E27EC01bcBC3c8cd', '0x5485Ff7438DF85120BfABa44e59a55367Dd09106', '0x5f9DdD54d19d4A7D6dA010f8A934f9ecfD0149ea', '0xb3714347F6217881935da9A6E555F65880bd5BA2', '0x713c9aa2bDc82feBc3b7F0e07F8a19A99bF6e047', '0xD5F4Ab8061c1c80450a93d4ed145A689e02ecE91', '0x5e496Cb3C6d036BAA0E0D493694D95367165EC72', '0x540bbF6A9e195398802F42552b3089dEe5d7Af60', '0x753056221E07dA70Fd3d35AbA203CA2C685B2C19', '0xc2D1554bd108434c7DA77f007C9187b7C81687E8', '0x6C637c40160992F2DD923F91A109949b8a1A07eE', '0xB42D766307a76A0bb2BF1d7aD9652988980Cf9AE', '0xa535d1a71203eb3d4aad3a0194e1d577e1accd4e', '0x4C3F25f1d8e15841eA4DA5779E388f3Db667d07C', '0x624229304739139c33Aed09936B2985e219c54fA', '0xe3574334DC5a6629855B3276b05e76B8245fAe50', '0xeD3Ed262a849cb18f21D00EA3B87080e81490c2C', '0x4ffba43931CC1A5330915909192c989Ce5147369', '0x3167C6f4D55e6611D677F028c2d29652786cfbC5', '0x063792A60F22B1e0d37d73a9550dBC4B6e813789', '0x60b77EdF171F03E104D8b8a756C158E0eB2629eF', '0x66bc4e534c7575Ab77A0Aa894Cc0BA9E50E90a83', '0x4FAA2764E751eE404Adb29BEAA6BeD43ACf9316f', '0x0E087838f8eCB6Eba5aEbFd06F91196ee7cc6EEf', '0x4fB5Ae963c4fDa03D98Fc3ff8ff287FDF49dE548', '0x225A3F3250ed15E8F3cA911414f967976CdacAe6', '0xF84605a0c018313a6B3B817E5a396f4eE8B07136', '0x15A1e0C8b0b4C7e8E4eb94258A2B0aa7FcFdD824', '0xC526460B16dd67CBBD13F7fbfCAF4F002D0Cf383', '0xFfE973085371376e187F937aBE7E2175876483E2', '0xc9859FC94A2b777c97938A93E6eE092E904caA78', '0x0F0D9b57d06FEad89154B25a946B2D8DAD6f22b7', '0xC1eAE831c306667Ea3a65B05f993A6A7048475A2', '0x73EA036e89c0D8a8daA9b8FF97b210FeCcF54f4a', '0xAdE46477d64FF9ED0D11041F642526bCCaB13d8d', '0x1D584dF8e6792f58B82f2cA81516d0558c1f6017', '0xcdec431a7170d10347629C858C6D7CF144E743dD', '0x473Ca92D44F1537A78aeeDC33e6129Cfaf10994C', '0x983036282b70B24e132Af55d437b5f4Bb193063c', '0xb53b1272245cf80e50716647047327BE131AF27d', '0xeB2Ecd30BA8d67F3D64dBF93A82Ac94FA73C02b9', '0x8Cb1c782614c7F5C8E3B0BD31Ac3B16F0355Cc5F', '0x30d7e1D8112AEe967FB7E52CdE53e8C76C8330DE', '0x74F7065e169CC98d8D877F397cf949132174d1Ca', '0xb775fE8acE8A483E3A21Ac0E5d5C0B8c05b7237b', '0xd4803451bF306Ce75107d580d563D87Cf5e00606', '0x4030AB8Ec06A9b235976789539f7968C9621676c', '0x1278161ea3FAaA6F2Dc4677DD6D0BA3c84Bd30B7', '0xb7B40908CD42Bf3aDceE2166Ee5A5ecEE3095174', '0xE371Caec14Ad7870524E7468BB0afb7f24558906', '0xbe3EB11803d5f7dAd2Ff89c26111f29DB6B3cE3D', '0x5f9eA11036BE1cA540061e0811cf0042B508DE69', '0x297DDc2929538F1B7A925d63e921A3e5a02F9189', '0x945cB7Fb8ddC62Af6E8C7F22B0CD2e2C2C36b614', '0x9896ce8Fd3183E936f29323712442C53FB760258', '0x00F2d200bFF47c6f919EF6ceD77c171922D5dd84', '0x91c113B59C946f16Bdc01Bf09419Dc50aF6e96AF', '0xD09c1cc129AaA923EF6EA57d659A08DF87f502b4', '0x5b03b6D4818cF0A2383b09D0a0721e223C6670b4', '0x525523357A88ff44aF04B997c1C8235b871E54eB', '0x7BBe08460CBa43D648e237526396a64EF161c6B5', '0x8609752E7099381C1A7a9369930Ac6f24c7a727', '0xE25BEe6c950d9B95a631B798D4a106C3067a9Cd0', '0xF4964E630b1E05247108D106Ff4F65b2a2016104', '0xd16991dAFc16f6185310Aee06dFAC7478db04798', '0x5F6C11e5Da0784afEB9aEaC363066f8849caC892', '0x3C225fe11876127f4F8d728C732cF644270ca830', '0x89c10016a82fE8c70DBD3aDcFb447376f4b9c934', '0xD51a60A98e03f79A4Fba9b8F1BfEbBEcB85D0a42', '0x04ff89F7b26F007E6DE13FBa70C007dE378FB8fc', '0xA221F8c497faB925073C182eDb4d305145b20F5F', '0x68FCCddD35D6080019C1580F6Ee7987832B734aA', '0x2C51EF787BdF46B5b5BB5B103FA38a85F031C22F', '0xC45b80A63360593452a15CfDdE9711726F105E51', '0x7BB3dab158F831e19e20bC97b959b985F204e76D', '0xa44D9a4e562Abc2eA8e6dAB04A4849EF3BE96eA1', '0x7531913Faf725Ca035A833ac7A7dA896dD85D603', '0xafAf48E4Ee8BDcF726d4945E13052b0a638411F5', '0xD40F6e96E3CC0aa50F5D3E27809b465B9C931326', '0x2c93E366a1C730D10026465b59802aa6260251ee', '0x3472c1ad10AF916eAD481b950FEf16dC835dd79B', '0x2F40bbB492B94098E06445CF2f5a19aF559bC59A', '0x5bAd4dA29256DeC1551b197332d8C24E2750E3B8', '0xb622991B7f314bF1ef118953ade81aC08d860238', '0x7b207d27FF26069E48EA631518a2E784a1460cB0', '0x5896D4D9C12967c6A9C19d470B0e6C246892d732', '0x40Ef3Ef4225E7c69188B8825F26c84983A468E7c', '0x5bf0c1a19Ea20169cF4332bf0f10cEb056D6442e', '0x692fB91E7AD4E956537Ec5fd9838Ad2308159555', '0x20Ab2c35876037437266fa5b654bd973155D44aa', '0x79D56A7297C6C572D3ACE9cAbC0dD172aD66E00C', '0xbE48c6D23277dA3Abb118A0ed717D4bE2192A448', '0x847c1B4F34E93D2ae81B9D099c3E52F53d9aBEa2', '0xe1F662eC2b60c6c6F3f1b7548A76cf576Fe4c603', '0xC2Ed8bE178D6f5b8DE694943696777A410723af5', '0x1CF0eCD152722BA5D1c8E9CC1b5eEb1bd45aA1aD', '0xF7e51538bc38Bd2D5d48FE38523F87Bd6FAddB63', '0x16299Deb8E0BA6F4054106c9Ad797b8FA57d2A62', '0xdF26a79CdDfB01B7a123F8c131CB6b2dd0dC3B93', '0xE781139c90289928CE446DeAf8C0B5D823D1a778', '0x7a2D91DDF268f0788Cc7D45D5138f8045B6275c9', '0xc61F778a4B36D1cd9aee1A3Ca8c22D407cd7AE68', '0xaF36a83F38153B6b60E09d0Be8822073A0173DDc', '0xF87c6aF470E3B67586316B54ef06830270D43Bd4', '0xf98e8D1009E3f4E2b8899A275bbCD3bbF59ad6A6', '0xf44d180319BE4BCf9D6Cf9DDA5C6e49297A75352', '0x49b92B51dfE155e3286C815a072DA9934B002728', '0xd43336D8120254f54Df1e1f95cDaDe680AD7944F', '0x36accEf5C4813Fb4C3125C31f8D92a524cdf7B8e', '0x222e0Df29A532455373FdB14A9a5e0936E827DC2', '0x4A8c103b0f03D096665AEa916be0AB0eA62dcdf1', '0xdedB2Aea9B0093aFFd1AB1bd3e4FDC847E16e0d0', '0x5e36dc8d111e415D38F70Be80ea1d2A37e46d1f8', '0x4Bb20b2947B2a368AB59bF2b35f7236fDD8b782c', '0x443e59e123D29883Da224f314FBBfFCB58388C3A', '0x017D4d09368BA7008aD8f8686Eb29ebC5B3f7dc6', '0x751B856eD221c4086AdB87E58585c1B3883C9F5A', '0x992eAEF7A1fcbD27d8f95Ad25dEC787C80DDd83C', '0x591133e10C2f096AB447f10Bf10dCFc3c0363FE9', '0x8F6b39c50319f713BF87de5b7885cfa16a3bcAA8', '0x9f8322bBc6D512F431a0a2Aca2d732956c62de80', '0xB2F6555f4081601B0af1Ad828771920da1A464C3', '0xf2D4173947ba032eA69d19929c93721791f43786', '0x85cE868Ca244b02Fa4de5A12f786F106cEe6c709', '0x546a36728015A22856E4e9EeB5C5B9d4D08354eB', '0x96489aA430F2D7A7F6B8d67f4830fAA9319A42bE', '0xC0409E34A7b4f40A604d86224EEb997D079Dee8D', '0xcfCfE53960579f3C5Ef0Bff832F785012aDDce60', '0x4821280215DFfEef650Eaa03762c3D9adeb2AFA3', '0xfFfbAb12eA75ae4024E314f21eB48fe6b4a3F968', '0x68945ac0A08e7E77C8cC2573b6c48593b21225C0', '0x014Da45866C26f833591691460e80A7fB3063D89', '0x688E2B2b83E60D97F259f2ef39d7b4Fb81a6d64f', '0xDFA2689E0f472cD0Ef77f6C0728260A2F1d3DA3A', '0x30219DCe15DA1b31C9Ecc7E1F06aEe777D2f4735', '0x2da412D72b6270fc9ae76Eb1fFdb4E102c1645e7', '0x82294F0C4292965907049377564F43E8C040B449', '0x45fB8Fd100a06e3701D41d79Cd5907C65E3A8f91', '0xff444De9DAB3e057f6AD774e0b8f7A3053b49803', '0xa231518Fb871f9EEa434D7E587bC492Ac9621dCF', '0xd7E4cE6355dB3704DC788FB52427fEe3069c4012', '0x79344464889d74e7032E8Ad8F2e44bD433b00948', '0x7e1cB6FF202f263CEb76A82C3eb0c2D2f5106953', '0xd6BCf768E60f16677983a5DBE710C91b1E88B4e6', '0xa9323148B1791532b085B7BCE8527CC253024E11', '0x790c4d96b2b1131A253B11fD5e06C61eaD637E9D', '0x6f1C59D708650341D1C094241490A7B4c3122294', '0xC93918899826480147104E12e04e5F80604d8dB4', '0x3EA211CCA02f22D4FbdfE1737d41a11d5550acB1', '0xB30FD32293d732B32581dEC56C9BfEC644283c4A', '0x4289D50af6C6f3B949D345d9117506c2370e5BAc', '0x94dE2BE4F3d1736979F9D1852d2314cD2199B2F2', '0xe8b2fd8Eb9326A53bf8BD465Eb4FE8e608a5A994', '0xba3C2536B9578640F6d5630c640eCad9fd8FDD1e', '0xC47f4E477610197B6760B14d550C72A621d6A8a2', '0x03cF886057d03de727A1978224B2aE3765980027', '0x15245EfbBd428DA5D6AFBAb5261e40fe3ea22002', '0x162ba6b2f80B461F2BD0a7feAbB3f65A95119F98', '0xcDB1F3e47A0F58920D22e82FAd9d3eB4784A466E', '0x88a66fD0C5D8CBac251f95381a032748341E7FC3', '0x1b4535700c272737D7848c0262526f0c781f2e0D', '0xA4f6638Cde88f245B75670B510FD8e46fAFD1678', '0x40feAeFEAd1Dae18e658dAe1c770ddd3B9F05B3a', '0x8Ed7fDAb4400ba3E486A7986c1d055D6d0f3c532', '0xceE38e97B3dB5981Ba8AAc280519E9cCA835e9df', '0x3b492b1f9E042e52826e007CeD8322eD9DdF9Bdd', '0x98afA6ADa432F457d78b5cC09BAa93E76b9FeF8D', '0x69B4aa9bc6Cc22FB3b7a1D66Ad30119fE66724A5', '0xC6062Bd17327aF1dC5847Eb4ED3326eEF41f99c6', '0x8b818deD91401F5B6eeAE920FD309d9085554013', '0x090c70A3e4D8E26004daABEFb462ae4d01F897c6', '0x04662259b43825d4526c6898A4cCd83fF6EcD2b1', '0xBa27de393151f66963a155f85E5e61A52D2a5212', '0x8ddf3A1665d913617669a5c51db8d47A722bA4e7', '0xAA4197C2efCf7cC9919d582c9246237eBc4209D2', '0x34E73F03b1E05B39927DF3de1749Cb05A35dbF33', '0x379E8cdbB3c06DE0F4C02Cc8d7512fDF0e4FE9de', '0x62A4394CcFd347503889f3Bd4A9A64e26F5BC413', '0x78dBa334751791E4CA277941612dEF021e467B45', '0xBD751CaC1FB27D930a6a0394D97C77908d94AD5D', '0x34caA92C06bD49BEE3059B781E9a62Ef2EeAF85f', '0x05f0B0d42c2E5fdFb7B8400d2478CA65a1Bf88dC', '0xeBE086db0f46e96d165AC9b7f86D79B4AD1E3E4E', '0x27eE632c1e3Dd044c8Cf2C2aC4bE15357EA9e564', '0x8a31dF2c3C3f36671b4d9a500CfF2c802349E3f7', '0x00689CdE746891DDE9B9543315BE9571068aA480', '0xC9fcB06bF27293B10303b00fFA05adB63bf9B73b', '0x1787B6563Bd2B57e7FcA87b94682C3C6399f6105', '0xAdF4C874D05281ec55A3f395DFd2B33824A172b9', '0x33A0E472B4F408ae4aC79b4a1A43F3cCDc93fAA2', '0x192c9D07D1608De3bd3E9F0a1bA60D2885047967', '0x71cDC583eD5DbE24a136877E95108736CE63E76A', '0x889eB855D6A5D992D061B4D956ED6586a82992F8', '0x64B5A1576eC756321675c2790558F62EDe93f4bb', '0x8068BD398396B060d820745FDE9C545a38bb776d', '0x747DB8B9C48D26878caec7d292E8e5e83648Da70', '0x65C73e1A86eDD797a5b5Dab3D748fF8D53940219', '0x8a0473179492147c785bE2dd0B65F320aA4650Ec', '0x9Efb8daD0aC25C0a11e5f926CdD9bf5862b5811b', '0xA7125847667A86c2bc3349D6D9c2279569021120', '0x6d292cEEDb53AD7c87809CEf8Ea8b12F1415C766', '0x4a5627E01F80aC7753dE8a9F0ec3CB620fc5fCd4', '0xd9e5C495EB09063f94BcFe8B513c3651D589EeF9', '0x083f7EfD7a1521840972720f2841835211b52F3D', '0x3BF55D8Aad7ca0C5cFe1f697d7783437b9E034fB', '0xb9d3260cb5ba51ac4c2340294af8b606f76e55f7', '0x334eB3Ef3F8Ff784d60dDcD13CB2Ed8c0DB8B853', '0x0f5016064DFa09cA7a356a8385E5fD12a39B6B73', '0x96971768649A048Aed93ac0f53e83D1b1F6b23ef', '0xbD655196Ec5657EF4641eF793aC464573309AB36', '0xcE3601f510caea7c95C700bd61e246067a6a2ffb', '0x2317f70EB18e27ab2b9456553ad9604655f00E5B', '0x1297Ac683b7A2981a47dDb8FD49E6C5De9Ce6b31', '0x98de8c1af1d0Ad991016533305D8cDc45b9FFc93', '0xf41aab66e7771BdfcCf43953b7843873d9bB74f4', '0x3818589659c2D0dd1D181Ae94d38C60DDB6dC60a', '0x561cEC0D07258d6167523518b7dB0aEfe8673d23', '0x4e1A5B1bD4B40D880289A4c7352b16Ec73DD6E44', '0xfFdef5e9eEAcEaC0800A2F784105105DbaF1D884', '0x155DC0c98Fd0B30C0Fb0845e9b3E251b6Ef572d8', '0x9D900FFf1d5b6f1B88C61EFA39ACcC2710b9581A', '0x5A986bF7feB87ae1aaf2cDc33f8D42B29BBf4eaf', '0xcD517a59c698E4a8aDb26b46E916ACd9B154bAEE', '0x08ACe023567d1c686c3172Fc4E7567A791756773', '0x9842621d0BcF1B05dce353ce149BdeEA98BaC6Ee', '0x0308CBccd5E1a570C2B5797456fb56bA510713FB', '0x22AE23253624f1480Eaf9ad4b4F808693A66aC10', '0x70c8fBfd2ceDadC101eCD6A2243258658bB8C7C5', '0xB5b3f8CF3e8448F265e55d606D5208b6B2135748', '0x95Dc5ca87B899F73710D72f1185d89b770a1a650', '0x7f49392D3158E51935141F9f4C2998b4f2f23991', '0x616aA10BBafA7E34b99E3003267bFcF0A1961320', '0x5b9F8AFEA9D231407D723e743538954C757c2363', '0xE4858Bd30fFDF5529e9684bA7d976e9b3c20400F', '0x1b40b738cef60936dBaAb25e092B59B92545f188', '0xe08452F332aa2eeC0906b239e1DEfD12349D29Af', '0x888496B1fB2802ba64e50AF513D97a2B18AA00Fb', '0x8eF22B8F1ca52302ac80B57a4B949C9a8A7fDA80', '0x86704bdB9E1d57D64C959813959c5e5C3C631b19', '0xa6aA47733Eb529b228955059feFFdE3eF3EC6597', '0xA045bAacc60b3808F85FE1f7bde7b0867B28bDBb', '0xE57691Fbc317D67d0d143b00462A11BA7F8b15a7', '0x995840cc784a3E21Ad5fcAe12B5Aff0a925D45fF', '0xce5Ad1bEAa01e8ba07FA47CC3e8ae1eFD7a39bB3', '0xE5D9d80AA1C4E7D8925F3163deb00180D057605D', '0x648b0b2Ed1b58B714433fB303634d59986ac25fA', '0x1A698c47e2fA3e255F9EDAce52C22eA5FC1162db', '0xe62dd46747124854Ad4c180386F22EA8B24e3673', '0x51175c854CbB8EF620B31cD571a12283b2E7899c', '0x69fE53C7c7187e6c18c67fca6F824270d79C565F', '0x26E0e588eAF783F487D5F09505ccB686B00b9C9B', '0x7b2a98604b3963e57BCcECbD316237D7be399CE8', '0x55Cf34223929A9D893C1EA402735a3a6FC6e5F74', '0x67012Cfb88F780b3dE45c6eB5988497d2cA601e5', '0x786edE22fc9d807b167f50b1e7FcCBaE6A1ef67c', '0x9E32560cBc32E1Ea4c737d65F043A0d8f8310422', '0x6f2EBfdBc9F84828700dE514F6F1A44AC3cE000e', '0xeE18bfca587940761e258C89C88aE53184045fe3', '0xCb61b1158EEC73a64CC72BB87F490C803207657a', '0x60658069c58375955e60E9DCaFC003DC417a6B74', '0x657D736e04ccD506541f5A12044480eC93D2a308', '0x97DCB6A62E6D8D02E9b956F7D76EdDc02AAF779F', '0xEf402Fc9ac8007728bE3a1EBeF618f2E35b504f1', '0x6DB4B03b2A296b57c24e85C8Ff65785a1e64d91b', '0x93bbf3F8290c1f6bAf29879A3D25050dE016E61F', '0x43e0845c5FCb1688663E027D3D212a6E1B81fAB3', '0xc1FC8c404F73432078614256A9CF5829792cc017', '0x17e6D9B81A8432290aDE1b239ac29aB9fE48D63e', '0x7bc4D4D2b559ACfC2F47a6018B82aA6fA5cFd0Cf', '0x5E080A0326Aa25Da4f0D9014180A8e1604db60b4', '0x9eAE3c5fb32e87273142848527a2a397118C3dA7', '0x49c3D0540a03aEBebc7a8B17170BA31698911998', '0xd15E7F004F1954Bc1939ecc5049FE8c190d9524a', '0xec379F3CCD7555C5B4FF9E2d4a07Bf8f938EC4B7', '0xfE537CFE0bcc3D8A6D379616023A5870a1571dE4', '0x2DfF3122eE9CFD45EC6954aA21A39C5B0a743da4', '0x41C9E6ad3C94a3Dd0afFc348aD3529C04DfAf1F8', '0x241C4EEcC51429B3843EB230a646A7e837D3Eed7', '0x5B07604E9b58602d588d4Ab5684a4FAbaEdBf2d6', '0x16b182a63Bf43Cc48d18615BA0F1a533a0e562Ba', '0x2a842e026a36f9af2b253855B3DF5e47E2365A83', '0xB8CB2cB2B0fb975422182116cE4576022e367656', '0xC707adC26208C1e1d92bd3D6ec9A8Da0Cb8c984F', '0xFB5D88bf68C0DFb3fFc28a8dAc2d7668c8742960', '0xeC426C963D665F71b7489303dbb64670888E4cBA', '0x10983F72E3122427b6d2907dDe0aa2826FcB1a03', '0xD64E01352D0A2F26B235408df6E7784320f991e1', '0x6b234c8bb9C8957f824b1f5cD36Ae0F336869d29', '0x025E03A90607F6F9DE7d9F80a48B7ceA77f37C6f', '0x3919ece6ED3A92e0C6c99e6257657A75Ef84C1e1', '0x390De23910Df8461B30dfbA9b9e739ae2020F62f', '0xaF3b2f3AaED3135EECA426701363013F9f4988bb', '0xa9372a2EEB14C827d3Ff217489C35a4Ac46AeD73', '0x1fd843496ca8e4e1925c8Bdc95678b38127bd6A4', '0x7961AF707C9d2ad939CDc02980091E33DA32C70F', '0x415F19D701bBe5C7D17EC7807c2EE3faC7b4bF83', '0xbf6fE82217C878EC9c62bf6d3434cc632cd28924', '0xACe03b9580C20cdCCC6c94dC9E75B2D7396d043D', '0x801E47AEC5496eB1058c0AD515d6Ab7dD428636c', '0x10900548c32474eaF5368c01ead468D78AC40D0b', '0x9116862ae16CD37D6010f1731C5ef601b142000D', '0xe5784Ba8f401a4B586C156D5390e70e70374AdAd', '0x2C2C327de3a3Dd26a02a86d940f7DDf4bB6215Ba', '0x23326B12563d73d14F256733446e22C3e33a08f7', '0x36C52efD52e0B195Ef0BA26C28Cb62AC13C1eC73', '0x68C0Ba212F64BFffe099c9993E2c12e968888888', '0xeF23D71B762E191B9c40BA825065960ab39cA171', '0xF0c4Bb44340cf91e134417A837754F04031dE39a', '0x95131b9190f129bbe2c268804Bf39c43e3711Ac2', '0xd6d30f9d7757563ae5A3956C882D80f9886503C5', '0x69528C13dCb9d6D5bCb68FD77F8d5498F841fFe4', '0xA4838292Fd53Efa2a4E3DD5d8a3140806D4c73cc', '0x59A4506055950962DfEe613FBF7876cdCBB42F20', '0xce93FDC8FDcfBFf755f228d15Fec4279ac050Eb7', '0x74F15b609e1423b85612dCfB022F1d1141f47Ce1', '0xD47FbdBB4419D2b74ef68E63f5EA2DADEA2D614b', '0x8719A15457C5107417966873d2A4b16b8478B873', '0x3DF46b763AFa287496eD80BCBbD24Baa8aC645b4', '0xAf8D9296b54CB89df97D5B6d18D179BE5Dd2052E', '0x74ff0ce3CBe5a0Ea3B3bf630872952068AaA1107', '0xb1660f5F721C2E0114811d978ed70525593b59Be', '0xa1112524C8AadD762CD4D2A7b3119af3720813e3', '0x6deC4a17475E5aD006aFffad28Ff2532aBEe2cFE', '0x296C15Abc074deB89c1d82f0E243290891D21773', '0xf2ac0146D7612b60305563E2A1fD8A41eeA97b6f', '0x1650cd4957f352D2e6F6935424b5D77E77713B4D', '0x7e6e4DB7aD1E402627c690F84cdCa3FC72f93b1d', '0x77AB7F8f759FE3a03cC5f5E9f2609840A9231e66', '0xC6E1AC5C01C7E9B5551CdE4D4fdC70Ae5A18CdBe', '0x82958cbd35693f681c156c27886caf574d0add09', '0x4a0054073fa7fdFcAAD775DDFabA950cA5357d5F', '0xdE7B894dAaEc1609652dC6F50ba0C53B26e2244C', '0x96af7851493337d40d52d4354818cCAeA2Da722f', '0x326D5A5c1d477DCED3000D13d53f84Eb188a3742', '0xb7049376D3bF679F4076ff9f4D04572E4fe50F3e', '0x4b0eA10eB7536b6fb2EE3EB30b405440d5802fD2', '0x77CD94e341B0dd0E8180267A819278B6692563f8', '0xa23E86c269D0fB854Eee998871D863395AcCB88C', '0x4bB6B134E829F36b7f1ef4b2701089F664712db9', '0xD28906edEFc9d0890C4c3a2d9e804A860965bC6d', '0x6661280D2363f69A615AE69f57aDF936a89644ca', '0xf64E341501dDEf7a4c0981751815a8F015c0D7ED', '0x2781c274c184a90bF89f1f379232D8e3Ce3b1EcC', '0xA826361eD9bC90f026523f2fF16824a42b1523c1', '0xf87D7fb5540966b495DA294cA5F6D88D0035eeB9', '0xAdDcF646309cfCB5961A4De841E7a1A77ada1eBF', '0xE4F2B074a5d9119405091c276B1153b980F80d0c', '0x1C2A6F72e00DFf5D7F1bFa05c3b5765a1b4b2Fd8', '0xc4A6153dFBd30c82d7C6c70750f40ae476946fCe', '0xc62cDAc5Ea2ed377cce2f4Ea16Ecb2394f5eE469', '0x2fB7Bef00C58A4F7d7bf3D4eE0009d84b4a886A1', '0x4b31dCc3439F58aEB614C20Bd11dE14E9D07b523', '0xd962d1a56DDfF72F29A51AF9f64f0240E59b5FcF', '0xEb2Cb332c82b874C3A755E7Cf31ac400512Be6D6', '0x2275B8be039e99F88835CE49B16285aD0e61d485', '0xE5b1918D99f9B5b63817F6C9A7afdA744eF1F647', '0xB2E0a81f67142a67BaF8DC9877E56FD695E5d058', '0x28B3D9cee7a964C01B90dAC21171fB8dA5c6E2A9', '0xef88c7B993171028347dd4542E25F1078A98D301', '0x580DEBEF682ACf260B85B4d0E4AE6e50a8553D12', '0x1f4e571674C4aA61B37655F8f81435C6C05e93c3', '0x4D8fb0ea9705827282596bE70416B9F8AaBF3A5D', '0x2cf6bEc5d7075Ca0e65dF857E0cDD9DbEF202D3d', '0x0a2a8f4B5501614b40d7938f371Dbb379e42dEaD', '0xcE2C24E9DDc34f765b2dB075040Dc76Fd1c56789', '0x7Af2dBB733daed7b340b4215D23811563375F0F7', '0x0682285b7a990292dd5e6922ba5ecfeb0e0827fb', '0xf5e9440c9E59033D2B794A94673F540226F107e2', '0x8a259aC7276B58B49b9f2DCC8adDd19CC3165943', '0x1c76879485fc22b4a81850cca1da22b2b442652d', '0x2fa03dcc825f2a09705904bc8f6E51662e9c9448', '0x4FD537887cC014f022c2A1790521e145cc2dcEDB', '0x9c0c882e0093F0d267fdc6e60e493A1Ba8CF2c37', '0xb7253ADcAf57FDF8AA0d59638F61040a12cb50A9', '0xB9C1cd3fC666285D3aFFfff4ae4a721E69445DdD', '0x355e731e4946A791d24eCe7776ecba8e159d1b5A', '0x7f823f1C08b157AFCfD8b7Cab364B3f95F1dA3dc', '0xF3E0Fd10F8B95fb2360AE7082990383f229fBd55', '0x26e200ae7579a749364D2457C10E56039e9A221A', '0xa0816DB68e83aFDD8Ab715Bb8ab0D3dAc8B623af', '0x5f6Da6ebfBB9B28c694134A826fE0D61cdb11821', '0x3d8577C55E9E7146557a0fef58F1F5eEA2d84885', '0x72156542e94434E3F11ccB11F89460bBEE4a6816', '0x17AbC10495feB50AD81f60b33CaE9aAA754E9557', '0xaaef8908c5428604061826CD50980BB81E688137', '0x2DCDA1deFDf3C64285A6b35Dfe5CD4198Fc6259E', '0x911fa1f691cF3d6b20D05999240a0139F8CF2BB5', '0x0e21C336260b8B78956068140Ea848B9E95fBDf6', '0xBc931d2a58803689Cb830FBd53dF0aC740c18FBc', '0xe4af312722242acc96502c9FFCc6E7ff8e29cC9e', '0xec27e34B4edFe4FC00f384ad8E59BE4251Af4B65', '0xf850896DdB41f892d1a00f7e83d9C821155519E2', '0x89516920b9F701f833E40005aB6aB86b28f39E31', '0xfbE413AcC93Fe5a5888c8E70bfD442ac8d0496Fd', '0x1D5BFF2dA604dD2A3d91daD67970FF950a3Ff43a', '0x63c0f721508A6EE1bF976868644c8cDFCd01ea53', '0x5b29091DFCc3F4F0630684818bA22b75c74bA375', '0x1fa16db874733e3b78cf1023792ab519fd5ae5c0', '0x4B6562aeA460FC59FEB8C8Bb212408Fc1dBd84C1', '0xAA05853E72b0C8600d7727C9DF2a880BdB9A75d9', '0x4b7401395299F94c203cBcf2E302a4Da80481B1E', '0xf5c10b9266aefa7d44D950a1dFcBAE1Ac4846207', '0x8081A75141dBC89f70d31eece08FF12cfe105e43', '0x6D2484B9c9E5961E90774ff0A6D51278Bd6031a8', '0x0A204B788214bDb3E74B6f77C0313b76945f9544', '0x7569DB20D514B0Dc76FC99CE2268caB240bDbd56', '0x214C951bE663bf2F13f9E2D27B5c516B08648E29', '0x4b6d0902863CB0a7f8e11905F78c11708BD9f4fB', '0xdd67F71E07B6B555Dc854b3f89dbF4E4A4c4c159', '0x264cfA764082145FF75f49AFc901CD21281F0747', '0xdDca950Af22b9e65FD5Fc072f46255D772FF9eA4', '0x3A951adADb435c59D6D75E2ac7a850d895aEc0bf', '0x3CcaE907D08D49BaaE8dFd7AFE4aFAE3d21de037', '0x66DFeEC6B1Eb273773189f14d036c8edB0bBe062', '0x635Cd7F0F0CeF2c398E0435C71216198E2a98d92', '0x9B8775e501442A1709faABd4a5cE28ea1E463c83', '0x18171255F7d009bc21f80D0266F5d175f170C75D', '0x249cf9633aBf855C84CC78a193115F69B354E2A0', '0xdF592Ccb1FE148344C26e8227596aA17eC914b5D', '0xA1c599bC340C32040060EEe6d361A7764424eA85', '0x92ED92F31e0568A05F68274De8E16Eee48408f7a', '0xC1263a10b5BF7670ad4410BCA84A865CF7b05054', '0x8CD4fc20cC3933126A2B8882Cd950af21e416235', '0xd424a41aB76f15464764Dc7729e1E49a6751a606', '0xfB7DCD1E1c83B1919d97585a048fFffdF942e6bD', '0x7111F392f6E20485acd909AFf36f9B60814F563b', '0x1101Aa904533119beA74D4e9b10E1C9F30a000d1', '0x9d7DC59D1DB46899f5CF069B7261ECF64363d4DE', '0x34C231F48D676E685Cd292c5E28A1D29D281Ea71', '0x25eea6948E499226e850B55B4F7dDE5969893940', '0x735b49d346a715F2CC67980D16DCa1336df0aFd3', '0xcd066Dd52C1776e7Cad9FF67645800F48E15a2a4', '0x0e2d96C9d49114B27847521AeE3bC79Ce64e1a8E', '0x178f570C7466Ec0Ee082843133Bc6A0C69A236A0', '0xae87bA94FB83bf2F07529Aac03f228DCd01bB05d', '0x7Bf621858054EE3229091745c3597004FCE2b82E', '0x223A1b8d6F2ef8d83E0dF91542b99601BC558e2c', '0xF50E156107Da8E002FAF84Bd4CCf4A59d91F9D76', '0x2E223382327655Bb857045E94aFDF9B5114c573f', '0x3014649f133CA27F3Baa1e2a860D2307b7dEd51f', '0x0B3D84b4cbAF363A6ebA9A85c2467428277ABc26', '0x62Bb5C4a9A7D4C0cadf9eaeaf391D1c446e237d4', '0xE9AfCD05F7F44e213cc49adbB908070CaB38E933', '0x5Ba274455edAe0Df83235756Da49bEb6Fb9f785c', '0x1FE7d7f14cceEDd926141187220bf44a679F1023', '0x45aBE699428335b1d5B7A2030d868f1499387D5d', '0x095B85Bc7946a7A1A203599A57056C0700b6430F', '0xaD972ccea8DA18016BC583fd8D1c3Fe3F5cAcE88', '0xa7962230403F6748F7D0CFf76078757293cDC8bD', '0xf158Fe740c46bF25D71c152A6a9c5133b907fE98', '0xafa9057DEA4ab5E3e01F5526C6684a0BA409E818', '0xb54b9f559d57b140beFBFA47ba43c472EbfCac56', '0x53B22A4c7eF7C9352aC06e793F606B0E84B64530', '0xeb63157EfBE5fb917426394dB79ff66F589e0783', '0xC1981C8352B60699b9b48D71038F8D07D1372904', '0xb94e06edDC2fE22DC5e68180F883f411aba02127', '0x8aA2989A8479d0dd74d17b058982233a5823cCd6', '0x31Dc22E6682Ae64efeA711BeFD088dB7e492330C', '0x606C23C58F9819739778c113338F2f481229efe3', '0x20db55f5345386726AF47802F5B8ce5b4DDf34c7', '0x83d8fe37105f254AE782285545dED843d417272D', '0x302bb37570861d1E519c4d383d988Cb6BDFD6a1A', '0x7EB1467F7328B53660280d7294a1221Ae0534B59', '0x074c04e3c5584F30D0e13562540Af4c07f6B171a', '0x6853285716a92aF6DD07F2F6aeBCA23E5b13f8f6', '0x0Cbd3243718dA9bf892F38e239d94583c0522B07', '0x1cB5417D4D58906904A64935e988021484132f2d', '0xD9a4B8DAdf536aF21B2c9303fcC4258046A0266F', '0x6dd9900560fc0F2c32A5b25F311129aBc65235CE', '0x21c1f21214C3FFd234083B06B9f641Cb32aD25e9', '0xe9A7fb16900244C2afB423919D5B569719F19bD1', '0x3499A44c822e5EB747E161bDDCcF6360D54193E3', '0xA21C5f3e8ff0F6D80D52C5867FdCD9d5eDEC4328', '0x7E7f12FEdB96403133aECb2e6aF88A54FDFCb358', '0x4aa3B8A1570aC2e48d3fe09a499D30EE3b531e43', '0xf97624De7611Cb6Ffa52c95157611455d3F4250C', '0x525B35166DC5C0575beB4224576cE08b371D582B', '0x52728afe58Ed2e3d47c40d16b3AF9719aba833F3', '0xd0C8f70D0F7572824917F28bB959b56b560D8945', '0x2601c79B6092c673e5020a51194C907578328ad7', '0xb95A0B2d7772260af5e57De4dE1D78B0acFb4167', '0x461070946B754a3055A75F380327C40513E5cf67', '0xc10aDFEE7ca7349a755E9e9A1D279b0eA06f35Ee', '0x1a37a10f6325e4002ddcb287ba1af4472746f76e', '0x7bfaf0a17f7776aad8f2ffb43ef72a88ea991628', '0xd01e623d8dcaeb930dbd35f5c09744e2ef4f646c', '0x0e4E376F19D6E0708B51979f6cbf8AB36e072083', '0xb99357a3FAF38A41bD819E2d61946a97d4d4979a', '0xB82e1d74F07909778332a8FFa3b4D3AC7869b4ad', '0x63d5c1fb21dcbda9a05154137a692c83ac1ff931', '0x6777309990fe5238b411b3959a376ab449690315', '0x8cfd118c74bfaece63c8229a169402a5d54f9a3d', '0xd422e83efaac0211b3837b95e256a986ac035808', '0x57038b557872d9baeb7ad9800fcc4802791c604b', '0x474a92407b5e19f3e82167c1bf3e773abc9634d1', '0x9Ee4fBcC275CcB931C2ba480139D06396e554bCc', '0xd54c751db16f9383e964bc0fc816e443d17ee687', '0x79611eed03b52b7a1b89b28a6ff7c40af3e58b0c', '0x1996FabEC51878e3Ff99cd07c6CaC9Ac668A22fD', '0x6ea7f39b8638134b07b6a4e1b4df4785a3b4af41', '0x524966ce4d652a7198bec435a258faffe269b43a', '0xd3ba8649c393083981614b1efd6d8e45c9394efc', '0x1ad42fb475192c8c0a2fc7d0df6fac4f71142c58', '0x78db21844f480dd4d91bb619e4bbf72584b149a2', '0x7b61A2C92DD964931C0c49C39cE616A81165A3dC', '0x4C3619e327A03C5cEaDD6D72824AAf04880bc834', '0x087029affaAB7B73747B17045A9B3e92DDc5d5C0', '0x3E529860B40BfF5Da6Ec81D32F99988B05702114', '0xDc58734c214282589b628dd59B70b3Ec9905DDe5', '0x2309D0c07F453ECaE6403f62129aAd058551143a', '0x886e5eD79f51ae99aFE3f19701e35D7d943c20C1', '0xfA810cb14686B3288aBB13cbd31C7335E26df644', '0x0de4fFBB8a36EC756f9c7c1bCe234C8f989Ed37a', '0xaA7c11e5998fc876eE90D1680e0Be3dE8f6Ff506', '0x2F36A001676fE4386Ba347741a0A9FA60f412A5B', '0xe27CbC622F4e585147b9fb939adB2E13F9d4c290', '0x9159d540ca74A2E894445Dea97862E455c262FAa', '0xf2209Ae4F27E5278b17DcfeB8ee26152d7068450', '0x3E71Cf3Bcf4f8FFD484EEb5FABFb6285970b54a4', '0xC7c2576E4564621d2371806e0B090AB85C4DC7b9', '0xf3B6A3d2Fc68491A2822d5835aC3469296Ae465E', '0x8d4c9257699892752E94F233053e833981651716', '0x99F9d379B3117AC4e491A2871A1b923107E3e55C', '0x7eE1d1d9D959Bb516Cb6D22BF38847Bb1FEfC33E', '0x8cc6FDA52D07D67951914F274c353d1FbF3d92DD', '0x21197628882D449dceCbeff0E15824AD4652AA95', '0x3fff06ecE665aD68969130AeCbCBF65690Ce1D85', '0x567cC5F1A7c2B3240cb76E2aA1BF0F1bE7035897', '0x8440cc32891ae045de2016a7f1c38012f41909e5', '0xE8F47E178C7e8a07300E8dB625e4F5CF6c022Fb2', '0x6b8abc8079B3cF964ddede6A6eCF69Ee43Febd61', '0x6E57b732Ebef9200803bAb3747fDF5c9EfEA3172', '0x19E664F8d2764b83E1e948f574bc780E9A062f7B', '0xEDBeCE82AA2273418069A7f00d4589FB62A370E9', '0xe5a6e7A8f718fBe7484ccD629eBE64ed5f532580', '0x872C8fA47Be6519590A849C1dC43A97c6b7238a9', '0x82AE0Af450431B5BcF595b1b2Bf76614E82419DE', '0xcFDA7F395B1D9CF660322027c4dFc7f47d739B71', '0x77Ae974b4fAb9d423f67C460af2b8129754De671', '0xEe3b10eD043Ca94442Bb908a16498654F9a4e3C1', '0x8F3F1611920ccC0EA02A56E9A3B94486b2926612', '0xCB5347cA8bb0C606faE0d6959215603bB3871694', '0x05dE243d1711cF64282b85C680789d51e7d9C123', '0xea2304C5C26a09c53341F1ccA7c69aCB453fA44E', '0xfc92d948FC21601d67dD9Eae940f27D5c5a3fA0c', '0x1099B796F99Ab2C196A8B499E52f30A44cdbd92c', '0x37F539eF13AbB05D1011FFeb50f174A496e04144', '0xD2aBD7a3333395a1ed7E54C67eDF43ef934033A1', '0xD4203e6fFC798765Dea121D795b2a56684c1c738', '0x4939C26C681706F0e780204C7414ae998758a12f', '0x603F9f25ea89F465E36E2E9a9eB13289F0e7DaE8', '0x85fB7a773AE571c907283fA68277A86a8c53187B', '0x934505c4De06D201bA1309641c4C295E6ACAe19C', '0xEE4968a9eD0b6dB4316C1A3216d2b2847C459ED1', '0x0e4BCfF784AcA391e7F76fD54eA34871310A3eF3', '0x151461bbb95A673d368bf4D3F1c69b2f20045678', '0x566B425E238D3d16D9c4c9123B83f5eC5Ee38255', '0x6C03af9F7Ba14097Dc806c9220aef22B65686720', '0xA9fa3834F0fE7C6D26B9F435c30efe78884210D9', '0x7084b8a0d78ED90998869B9ac95011ac7936e004', '0x64e6ED7EE9fF840b1f33158518Cd50Cb165AE6E1', '0xBFF2e57d70bDB983071d99100E201186544C4CBa', '0x9629C62FAb664Ea17920b5c886a9a733ee2e3044', '0xad61D304FFf432cB3a5aDE1B1679878a892E4a04', '0x074e7ae13aa1eE0848538E25C701c5a3A882cD45', '0x6F27E9cA49aCf0F30c9E5E978c9246447e37674c', '0x62724047bb0aC8A87c905d86597a774996d7A0D8', '0x89ffCee2a9013BC111f6A1d4b9A14c21FDa27e1a', '0x0b28ECA926d734D5bf6c760aC926488FD5219bF7', '0xf76bA56D42B5Cb5BE8C52a4569F94617e0bA1750', '0xf5604f032Bf024262B45F30c849eF0a7cA648658', '0xC6646B54453e39496E84ED478137C6631d208fc8', '0xB32E25b0C4cD006BA2360360c3b17255dFbB9ED6', '0x22f051a8d3a4e048877D965f683Fdac7db09D92f', '0x5A3aaDC425196c9e6C6D8Efe4574159C2a15C1b6', '0xebA6120492c505b6211cafF86c7757D1df58E8a7', '0x8c0b2FF66Ffc5D76D063C02e77282d7FAcbD3A54', '0x344F6DeF638883CD4DF8E1aD2C7774664f67514b', '0x4b6f658c047D4B6Bc51C39c3d4747C0e7e3bc3B1', '0x1FA2484217ecb30b2c55C14CFB21A34f4cc086ab', '0x74816c29ABd655AD3F853907A35Ee16c723046fB', '0x99348D690DE2E481cd1Ef33F2dB5c2Cce9dd6c25', '0x6661280D2363f69A615AE69f57aDF936a89644ca', '0x5E2448CE7bfAebE840e6E6dd2600c0aa9D88f4F7', '0xAE175b64cE7C4Df5cf3e07bb28Bcbaea847F3683', '0x3679a16c418da3416F0D69C9F2458B2bFF795661', '0x5E2448CE7bfAebE840e6E6dd2600c0aa9D88f4F7']
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

    const claimAddr = keccak256(address)
    const hexProof = merkleTree.getHexProof(claimAddr)

    return hexProof
}

export const GetWhitelist = (address) => {
    const whitelistAddresses = [1, 2, 3]

    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

    const claimAddr = keccak256(address)
    const hexProof = merkleTree.getHexProof(claimAddr)

    const hexRoot = merkleTree.getHexRoot(leafNodes)

    const verify = merkleTree.verify(hexProof, claimAddr, hexRoot)

    return verify
}
