import { LoremIpsum } from 'lorem-ipsum';

import { Book, Chapter } from '../models/book';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function generateRandomChapter(): Chapter {
  const randomText = lorem.generateParagraphs(3);

  const chapter: Chapter = {
    name: lorem.generateWords(1),
    text: randomText,
    symbolsCount: randomText.length,
    rating: (Math.round(Math.random() * 10) % 5) + 1,
  };

  return chapter;
}

function generateChapters(): Chapter[] {
  const chapterCount = (Math.round(Math.random() * 10) % 5) + 3;
  const chapters: Chapter[] = [];
  for (let i = 0; i < chapterCount; i++) {
    chapters.push(generateRandomChapter());
  }
  return chapters;
}

export const mockBooks: Book[] = [
  {
    name: 'Do Androids Dream of Electric Sheep?',
    description:
      'a dystopian science fiction novel by American writer Philip K. Dick',
    id: '1',
    accessLevel: 1,
    chapters: [
      {
        name: 'id',
        text: 'Consequat aliqua qui eu ipsum eiusmod nisi non. Ut reprehenderit cupidatat velit laboris exercitation veniam sit proident eiusmod ut cillum elit. Nisi fugiat sunt labore id et Lorem incididunt elit nulla id eu enim veniam. Deserunt enim pariatur cillum ex quis sint in. Proident dolor deserunt voluptate reprehenderit nisi consequat et enim id amet velit consectetur. Deserunt cillum laboris qui ut excepteur id velit non sit laboris laborum fugiat magna occaecat. Aliquip est cupidatat eu est ullamco sit consectetur laborum amet magna.\nOccaecat commodo ex cillum dolor pariatur reprehenderit sint exercitation qui nostrud officia sunt amet mollit reprehenderit. Laboris et ullamco nostrud sunt ex irure non qui ut sint do dolore tempor Lorem eu. Ea voluptate sunt aliquip amet ut commodo dolore non. Cupidatat officia minim tempor irure aliqua laborum voluptate et magna enim ex anim.\nAd velit dolor consectetur amet. Elit tempor nulla enim eu Lorem ea. Consequat adipisicing duis cillum proident minim id do et eiusmod in aliquip do est qui ex. Labore minim dolore est cupidatat est aute nisi adipisicing nisi quis magna dolor mollit. Eu quis ad ullamco tempor sint commodo non irure commodo labore. Aliquip dolore amet consequat aute minim sit culpa enim ad laborum sint officia laborum pariatur duis. Consectetur esse dolor magna elit in aute do pariatur culpa veniam. Proident reprehenderit sunt dolore ipsum culpa dolore aute ad laborum id nisi voluptate ad aute.',
        symbolsCount: 1470,
        rating: 1,
      },
      {
        name: 'excepteur',
        text: 'Proident sit eiusmod eu aliqua do ea velit irure do. Id labore amet ipsum. Irure eu tempor sit consequat dolore sit quis irure. Consectetur tempor nisi qui Lorem.\nDeserunt magna consectetur nisi dolore cupidatat sint duis Lorem consectetur nulla aute voluptate. Voluptate ipsum officia incididunt eu culpa non ex cillum cillum labore consequat ut reprehenderit dolor. Officia ullamco incididunt duis aliqua occaecat quis aliqua nisi Lorem ad. Laborum dolore labore ex dolor aute velit pariatur ipsum in est. Ut duis ad nostrud qui mollit laboris nisi incididunt. Culpa aute occaecat ut.\nCulpa eiusmod reprehenderit pariatur pariatur ex minim non velit qui magna cupidatat do magna est ex. Ipsum culpa anim cupidatat eiusmod fugiat. Amet aute veniam aliquip magna ea cupidatat quis et tempor consequat sint. Incididunt magna officia elit id anim cillum proident duis minim occaecat est eiusmod tempor. Nisi tempor ea anim ipsum ut. Incididunt elit ipsum consequat nostrud ipsum velit veniam deserunt consectetur sint eiusmod. Non irure proident et deserunt est ea nostrud nulla voluptate elit irure mollit ut. Exercitation commodo consectetur non excepteur ullamco Lorem.',
        symbolsCount: 1170,
        rating: 1,
      },
      {
        name: 'ex',
        text: 'Culpa deserunt fugiat qui laboris tempor irure qui id dolore sit sint esse ea. Quis culpa adipisicing consectetur aute do do adipisicing esse. Magna sit ex aute voluptate dolore non cillum. Velit duis exercitation eiusmod labore proident ipsum eu. Ex incididunt cupidatat reprehenderit irure veniam aliquip proident laborum duis eu dolore sunt. Dolore excepteur adipisicing duis. Ex enim deserunt consequat ea ut sint cupidatat reprehenderit et ad aliqua quis ea irure.\nVeniam eiusmod aliquip velit adipisicing eiusmod in laborum. Duis veniam consectetur aliqua exercitation irure labore sunt incididunt duis ad ut labore. Ut id commodo officia aute adipisicing do exercitation irure cupidatat quis eiusmod enim. Aliquip enim laboris minim velit excepteur minim ex ut enim sunt laboris labore reprehenderit. Deserunt laborum veniam do. Do ut cupidatat magna pariatur occaecat reprehenderit aliquip veniam nulla dolor mollit veniam est labore.\nSint magna aute ullamco nulla Lorem cillum. Enim excepteur id excepteur velit do fugiat. Ut adipisicing nostrud incididunt ipsum sint laboris esse nostrud labore ullamco cillum reprehenderit. Duis non id velit et ut. Anim sunt consequat elit consequat mollit adipisicing cillum sint ut consectetur ea duis. In sunt aliquip quis mollit non. Eu deserunt in cupidatat pariatur.',
        symbolsCount: 1317,
        rating: 3,
      },
      {
        name: 'deserunt',
        text: 'Ex ullamco laboris labore est do. Consectetur deserunt minim nisi duis ex Lorem pariatur irure consectetur in ea aliqua aliquip velit. Aute nostrud eiusmod veniam cillum culpa nostrud nisi commodo magna magna cillum enim labore quis qui. Qui qui consectetur mollit Lorem cupidatat exercitation ex pariatur aute.\nDolore fugiat consectetur id et do sit nisi et ex pariatur dolor ad. Cillum laborum magna consectetur enim minim non dolore velit nisi. Est nisi Lorem culpa veniam. Irure eu eu magna duis dolor consequat velit occaecat do adipisicing culpa. Voluptate sunt tempor duis. Tempor ut mollit et ullamco commodo proident enim voluptate.\nMagna aliqua exercitation excepteur minim ex id nisi Lorem quis id veniam officia irure veniam. Consectetur elit in ad labore est. Aute et irure ex veniam elit pariatur aliquip reprehenderit quis irure enim. Est nulla sunt id occaecat eiusmod consequat deserunt deserunt proident. Pariatur aliqua non nostrud non commodo aute esse anim exercitation id irure ipsum ea fugiat. Cupidatat ipsum fugiat deserunt magna in ut do.',
        symbolsCount: 1064,
        rating: 2,
      },
      {
        name: 'laborum',
        text: 'Cupidatat nulla do esse ad sint qui qui Lorem. Laboris non commodo nisi do ipsum veniam ullamco eiusmod. Irure nisi nisi est sit deserunt cillum. Nulla minim laboris magna in esse qui elit ea non irure id sit laborum quis anim. Fugiat eiusmod elit culpa elit nostrud quis minim duis officia exercitation tempor exercitation. Excepteur occaecat laborum proident Lorem consequat ad qui excepteur eiusmod. Quis quis do amet aute consectetur minim nisi ex duis labore magna laboris sit. Excepteur eiusmod officia Lorem reprehenderit dolor ipsum.\nEa aliquip tempor voluptate est mollit sint quis proident consequat adipisicing tempor eu consequat id. Minim enim est qui magna anim tempor deserunt mollit et aliqua. Eiusmod dolore est proident velit excepteur sit amet irure veniam consequat occaecat reprehenderit et. Id irure cillum elit non elit ea consequat ullamco nisi labore qui nulla.\nEu cupidatat et qui mollit occaecat culpa excepteur sunt sunt. Eu amet aliquip occaecat. Officia id mollit proident. Eiusmod et sit irure. Sit voluptate sunt sunt voluptate velit ut ullamco voluptate sunt. Ex incididunt id culpa et. Velit minim est sint officia non esse veniam eiusmod reprehenderit do.',
        symbolsCount: 1190,
        rating: 4,
      },
    ],
  },
  {
    name: 'Slaughterhouse-Five',
    description: 'a science fiction infused anti-war novel by Kurt Vonnegut',
    id: '2',
    accessLevel: 2,
    chapters: [
      {
        name: 'est',
        text: 'Consectetur culpa ea veniam do. Pariatur labore esse et et sint occaecat nostrud. Ut ullamco ullamco cupidatat. Veniam mollit anim aute tempor id dolore sit sunt dolore excepteur ex.\nMollit ut voluptate non fugiat elit est officia eiusmod laboris veniam ut et ullamco non. Incididunt nostrud esse quis laboris tempor quis. Esse fugiat non fugiat irure adipisicing est ut exercitation nostrud. Aliquip veniam et dolor dolor. Consectetur esse irure id labore sit et incididunt sunt laborum consectetur magna culpa ullamco. Culpa consectetur nulla veniam cupidatat ea reprehenderit fugiat.\nEnim aute labore est aliquip nostrud proident ad dolor sit ad minim exercitation. Ad culpa mollit laboris voluptate sit aliqua proident id. Adipisicing esse dolor labore reprehenderit excepteur tempor. Quis do consectetur elit incididunt minim irure aliqua consectetur exercitation.',
        symbolsCount: 869,
        rating: 2,
      },
      {
        name: 'aute',
        text: 'Cupidatat voluptate ut irure fugiat nisi officia excepteur. Fugiat elit ullamco velit veniam amet dolore anim irure dolore nostrud reprehenderit consectetur. Dolore culpa nisi ex ullamco sint aliqua exercitation cupidatat ea tempor sint. Consectetur commodo qui aliqua labore in incididunt duis id tempor ad sunt culpa minim fugiat esse. Esse nostrud anim dolore in magna magna aliquip nulla minim anim ullamco. Minim fugiat amet aliqua ullamco do incididunt quis consequat nisi occaecat enim veniam excepteur eiusmod. Dolor cillum amet reprehenderit Lorem veniam aliquip. Aliquip amet labore duis dolore ullamco amet eiusmod excepteur ullamco non sit.\nOccaecat mollit quis magna laborum. Incididunt minim non Lorem qui tempor Lorem est sint laboris consequat culpa occaecat nulla ex. Qui ex nulla esse excepteur. Magna qui sit voluptate sit ipsum sunt ea et ipsum eu sint. Labore magna culpa dolore. Officia est ea cillum quis laboris ullamco elit dolore laboris adipisicing ut. Duis laborum ut et aliqua cillum consequat duis.\nQuis nulla proident occaecat tempor quis in pariatur ea qui. Proident esse sint incididunt minim nostrud laborum quis ea nulla ullamco aliqua. Cillum dolor fugiat pariatur in incididunt culpa proident nisi quis reprehenderit tempor proident proident do. Excepteur anim esse labore ut cillum eiusmod. Anim voluptate in anim sunt proident eiusmod et.',
        symbolsCount: 1377,
        rating: 4,
      },
      {
        name: 'reprehenderit',
        text: 'Ex nulla id mollit ut sit cillum consequat. Deserunt ullamco fugiat ea dolor laboris excepteur ullamco eu sunt labore consectetur aute dolor. Dolore dolore elit excepteur occaecat quis. Pariatur aliquip ad culpa elit aliqua nisi sit adipisicing mollit consequat do. Laborum ut nostrud dolore cupidatat.\nSit labore anim sit est Lorem magna quis tempor. Nostrud ea magna magna eu velit enim sit. Ex amet veniam aliqua sunt voluptate Lorem velit voluptate. Nostrud minim sunt ex. Tempor dolore consectetur tempor consequat ea do ipsum incididunt magna sunt quis. Qui fugiat culpa reprehenderit culpa eu eu commodo nulla deserunt duis nostrud culpa dolor est.\nAmet cillum ut veniam ad irure sunt aliquip dolore mollit occaecat. Mollit elit dolor elit ad elit non ea proident sunt. Minim ex proident eu amet exercitation ex id ut ullamco labore esse. Ea consectetur laborum anim nisi esse ut fugiat exercitation incididunt aliquip Lorem deserunt dolore id cillum.',
        symbolsCount: 958,
        rating: 2,
      },
      {
        name: 'est',
        text: 'Qui dolore elit sint consectetur enim in ex enim fugiat id laborum. Aliqua officia irure culpa sint nulla dolore est voluptate anim occaecat laboris sit sit sit commodo. Duis qui in quis culpa enim fugiat. Qui exercitation ut tempor proident cillum cupidatat dolore quis veniam mollit ea nulla tempor. Magna excepteur elit sint id incididunt do veniam. Veniam labore adipisicing enim elit ea minim cillum. Esse ex et nulla eiusmod aliqua est cillum incididunt amet dolore eiusmod exercitation dolor reprehenderit officia. Duis consequat do eiusmod id nisi velit.\nUt eiusmod pariatur laborum dolore minim aliquip culpa labore. Cupidatat veniam cupidatat voluptate nisi voluptate qui fugiat do. Culpa sint sunt duis magna est magna sunt esse minim veniam officia ut et cillum voluptate. Lorem in sit quis. Incididunt quis tempor culpa sit consectetur consequat labore labore nisi deserunt sunt do quis nulla. Irure veniam aliqua eu dolore mollit nulla eu voluptate nostrud dolore. Voluptate dolor mollit adipisicing incididunt. Velit eiusmod fugiat laborum commodo et nostrud cupidatat consectetur occaecat id consequat duis.\nNulla irure nisi consequat eu ipsum ipsum amet minim ullamco velit adipisicing sunt ex veniam. Elit labore cillum labore incididunt quis. Nulla laborum anim deserunt. Laborum adipisicing commodo dolore irure et reprehenderit ea in irure veniam aliqua do anim excepteur. Pariatur tempor consequat ipsum irure sunt consequat incididunt commodo eu. Laboris sit ullamco amet.',
        symbolsCount: 1495,
        rating: 1,
      },
      {
        name: 'exercitation',
        text: 'Tempor in quis officia eiusmod consequat deserunt exercitation deserunt. Nisi voluptate ea cillum aliqua officia adipisicing ullamco quis consequat enim occaecat. Et incididunt labore aute ex tempor laboris occaecat culpa magna velit exercitation. Irure excepteur sint sint in proident minim laboris quis fugiat ea dolor ex sit. Exercitation adipisicing eu nulla eiusmod nostrud do anim ut veniam. Eu sit eiusmod aute duis ullamco in consectetur qui deserunt laboris. Nostrud velit Lorem nisi.\nEt officia aliqua aliqua commodo sint sunt est reprehenderit ut commodo. Magna tempor magna id deserunt sint. Nisi nisi fugiat consequat do occaecat esse velit Lorem labore aliquip. Veniam Lorem et enim voluptate culpa enim. Nostrud commodo cillum tempor sit cillum Lorem velit reprehenderit eu. Ut irure qui ut amet. Incididunt minim consequat pariatur fugiat enim enim consequat reprehenderit aute ut consectetur.\nMagna occaecat consectetur aute amet dolore excepteur qui ad minim et exercitation commodo. Anim labore adipisicing deserunt amet ipsum eu anim duis amet ad. Duis deserunt irure tempor ea labore eiusmod voluptate. Consectetur culpa Lorem do do fugiat reprehenderit veniam in in elit consequat labore. Dolore deserunt do minim nulla deserunt irure proident culpa anim non proident eu non in pariatur. Consectetur reprehenderit exercitation velit sint id in enim in.',
        symbolsCount: 1374,
        rating: 5,
      },
      {
        name: 'labore',
        text: 'Lorem proident nulla do. Laboris sunt ad dolore quis reprehenderit eu non minim sunt non adipisicing proident. Ullamco pariatur nisi fugiat enim laborum aliqua esse consequat magna cillum ipsum amet exercitation exercitation. Voluptate nostrud sunt eiusmod do commodo ea fugiat. Do Lorem officia veniam et culpa nisi esse et excepteur.\nExercitation Lorem mollit nisi mollit minim est. Ad consequat et incididunt excepteur occaecat eiusmod magna sint nulla. Quis dolore quis dolore do sunt quis dolore laboris laborum amet reprehenderit quis nostrud. Aliqua sit ad excepteur laboris tempor aliquip aliquip. Et pariatur culpa cupidatat est. Esse duis tempor dolor dolore enim mollit mollit fugiat consectetur deserunt aliqua esse ut voluptate exercitation.\nEu sunt nulla commodo excepteur dolore minim aliquip laboris. Ullamco exercitation exercitation culpa nisi consectetur. Amet sunt ad laboris laborum eu qui cupidatat exercitation nostrud voluptate culpa. Tempor Lorem velit aute sit laborum anim reprehenderit incididunt sit est.',
        symbolsCount: 1033,
        rating: 4,
      },
    ],
  },
  {
    name: 'A Farewell to Arms',
    description:
      'a novel by American writer Ernest Hemingway, set during the Italian campaign of World War I',
    id: '3',
    accessLevel: 2,
    chapters: [
      {
        name: 'occaecat',
        text: 'Veniam laboris sunt quis elit consequat ea elit quis quis enim excepteur sunt. Amet nisi eiusmod laboris eiusmod laboris velit nulla eiusmod adipisicing magna nisi. Deserunt minim esse laborum pariatur deserunt consequat culpa labore nulla proident officia laborum. Non ipsum occaecat sit commodo tempor ullamco esse sint exercitation amet veniam. Irure exercitation do velit adipisicing aute anim cupidatat minim nisi mollit id adipisicing sunt dolore. Ex ipsum voluptate non non ad esse nostrud nulla cillum. Id non enim duis voluptate ipsum quis est incididunt ipsum. Et ut quis sit.\nMagna cillum cillum dolor ad adipisicing aliqua nulla ea voluptate aute consectetur veniam amet eiusmod. Labore ipsum anim ullamco labore laborum deserunt. Veniam elit laborum adipisicing duis tempor occaecat incididunt irure consequat excepteur ut qui esse occaecat. Deserunt consequat laboris magna aliquip eiusmod anim est irure.\nDolor et quis pariatur minim nulla quis veniam eu ut voluptate duis exercitation. Laboris eiusmod elit consectetur commodo amet in mollit culpa occaecat. Nulla sunt do do. Consectetur fugiat reprehenderit incididunt veniam Lorem enim reprehenderit do aliqua. Qui incididunt cillum nostrud nulla deserunt ut irure enim consectetur qui est ex velit. Minim dolore aliqua Lorem ex qui do quis officia adipisicing fugiat labore. Eu eiusmod non cupidatat irure commodo do ut aliqua. Consectetur in ipsum reprehenderit cupidatat voluptate duis aliquip aute exercitation veniam exercitation sit aliquip velit dolor.',
        symbolsCount: 1527,
        rating: 2,
      },
      {
        name: 'aute',
        text: 'Esse nostrud excepteur aliqua id elit dolor commodo ea cillum excepteur. Voluptate nisi velit voluptate excepteur culpa nulla excepteur veniam labore. Do aliquip nostrud Lorem eu nulla eiusmod adipisicing id ullamco enim mollit ad. Quis adipisicing esse amet eu non sunt dolor fugiat commodo nulla deserunt nulla deserunt labore. Amet sunt est officia Lorem mollit occaecat ea voluptate ad nostrud. Commodo eu nostrud in dolor ut irure commodo in sunt magna ad qui excepteur nisi culpa. Laboris minim deserunt reprehenderit sit consequat anim dolor non ut laboris do duis cupidatat pariatur do.\nDeserunt mollit excepteur et sunt do amet. Proident irure minim reprehenderit enim mollit reprehenderit esse velit qui cupidatat. Tempor ut voluptate nostrud amet amet deserunt exercitation non amet. Duis commodo ad eiusmod Lorem tempor laborum deserunt ut est et. Veniam eiusmod pariatur aliqua elit minim reprehenderit eiusmod duis mollit do id qui in ullamco. Deserunt adipisicing nisi labore. Magna pariatur aute qui aliqua nulla labore aliquip duis.\nIn sunt excepteur officia deserunt eiusmod sunt ea exercitation culpa sit veniam. Consectetur reprehenderit Lorem eu. Velit quis sunt elit non eiusmod amet. Cupidatat ad reprehenderit consectetur proident qui adipisicing consectetur non. Eiusmod consectetur aliquip commodo pariatur ipsum occaecat culpa elit id ullamco excepteur nostrud. Officia occaecat do incididunt tempor consequat aliquip aliquip.',
        symbolsCount: 1453,
        rating: 4,
      },
      {
        name: 'ad',
        text: 'Duis quis elit sint consectetur in nostrud. Do esse sint sint magna velit eiusmod in minim et commodo ad mollit reprehenderit adipisicing. Ut eu voluptate dolore laboris enim occaecat adipisicing eiusmod proident excepteur Lorem voluptate dolore. Eu magna velit quis veniam consectetur et esse et irure est proident. In minim aliqua officia exercitation labore aliquip aliquip.\nNisi culpa do laborum sunt ad sit. Sit nostrud amet tempor esse officia officia enim non aliqua id veniam tempor aliqua sit tempor. Duis proident occaecat duis eiusmod non anim anim laborum cupidatat id est et. Non consectetur minim enim cupidatat mollit ad ea fugiat nostrud ea sunt Lorem. Velit eiusmod nostrud occaecat aliquip sunt nostrud cillum dolore ea Lorem sit.\nCulpa consequat officia velit sit non sit occaecat cillum qui id mollit. Irure aliqua ipsum adipisicing minim ex cillum occaecat exercitation sint sint minim ea ex. Sunt laborum culpa do amet cupidatat proident velit proident cillum aliquip sint consectetur dolor ea. Ipsum nulla dolor occaecat voluptate cillum reprehenderit sit. Laborum id consequat ea minim enim exercitation voluptate. Ullamco consequat esse nostrud ipsum ipsum ad est aliquip. Ut voluptate fugiat duis et consequat do qui fugiat adipisicing tempor irure excepteur adipisicing exercitation eiusmod.',
        symbolsCount: 1318,
        rating: 4,
      },
      {
        name: 'minim',
        text: 'Aliquip ad nisi incididunt culpa minim fugiat incididunt magna ullamco veniam sint. Ad ad proident do incididunt elit aliquip magna duis sit fugiat laborum. Aute id culpa aliquip nostrud ipsum ipsum incididunt elit. Consequat eu non est do consectetur do irure ea voluptate consectetur. Elit nulla ea est est ullamco fugiat duis. Excepteur quis ipsum nisi et velit Lorem duis laborum.\nCillum ea in aliquip sunt ea elit aliquip sit voluptate veniam velit deserunt culpa fugiat ea. Laborum dolor est ad voluptate ullamco irure ex velit labore cillum laboris qui sint. Reprehenderit excepteur excepteur Lorem eiusmod excepteur et exercitation. Duis labore nostrud occaecat consectetur fugiat ex officia enim ullamco fugiat dolor cupidatat. Id anim occaecat irure cupidatat deserunt consectetur consequat cupidatat Lorem magna. Nostrud exercitation commodo tempor enim fugiat reprehenderit. Culpa laborum dolor deserunt aliqua nulla tempor sit sit non magna et ullamco sit. Officia adipisicing nostrud aliqua dolor excepteur est eu anim aliquip qui.\nAmet sit magna fugiat cupidatat deserunt culpa ea consectetur sint reprehenderit cupidatat laboris irure. Aliqua qui fugiat ullamco aliquip dolore incididunt ullamco ea aute anim sint incididunt ea duis. Nisi adipisicing ipsum id. Excepteur tempor eu commodo tempor enim amet dolor reprehenderit aute. Officia exercitation in exercitation nostrud excepteur mollit velit sunt eiusmod. Aliqua aliquip amet incididunt. Proident labore ex reprehenderit. Exercitation minim veniam irure quis consectetur ipsum duis velit anim reprehenderit eu proident commodo.',
        symbolsCount: 1601,
        rating: 1,
      },
      {
        name: 'aliquip',
        text: 'Irure tempor anim sunt. Qui excepteur sint mollit sint laboris in incididunt fugiat adipisicing laborum ullamco aute dolor. Tempor sit ut aliquip exercitation sunt. Esse velit sint ipsum adipisicing cupidatat nisi sint fugiat. Laborum tempor magna quis ut enim quis.\nPariatur deserunt adipisicing velit amet commodo sint qui dolor laboris reprehenderit esse sunt et duis enim. Nisi cupidatat pariatur anim ex ut aliqua excepteur voluptate nulla laborum proident qui. Adipisicing Lorem eiusmod irure ad incididunt reprehenderit. Sint minim aute cupidatat. Enim exercitation sint cupidatat tempor enim ex ex enim. Sint labore cupidatat irure dolor proident fugiat incididunt ipsum elit. Proident Lorem nulla esse exercitation. Nisi est cupidatat reprehenderit aliquip esse laborum officia.\nLorem duis incididunt officia nisi elit pariatur esse. In consequat veniam labore pariatur reprehenderit eiusmod esse enim nisi velit esse aute. Dolor voluptate ut ut ad sit adipisicing velit anim duis deserunt ad non. Ipsum voluptate labore mollit.',
        symbolsCount: 1037,
        rating: 3,
      },
      {
        name: 'mollit',
        text: 'Magna labore non labore cupidatat. Consequat velit aute in anim ullamco nostrud. Ex voluptate ex minim sunt culpa minim mollit voluptate nisi laboris eu anim incididunt qui. Sunt ut sit cillum ipsum non sit occaecat sit amet ipsum amet laboris amet ipsum est. In eiusmod excepteur nulla incididunt amet incididunt nisi est ullamco id culpa sit. Excepteur consequat fugiat irure. Ad dolor nostrud irure dolore ex ipsum esse nulla consequat. Ullamco officia proident consequat proident pariatur tempor adipisicing culpa enim qui.\nSint non pariatur do voluptate consequat eiusmod. Elit cupidatat consequat excepteur ullamco voluptate aliquip laboris deserunt magna. Anim et veniam ea officia amet occaecat incididunt Lorem in consequat ad proident pariatur cillum et. Nostrud in culpa nulla culpa commodo occaecat occaecat. Laborum eiusmod minim elit eiusmod officia nostrud. Magna eu tempor duis quis sint adipisicing duis proident velit aute anim ullamco do ea voluptate. Aliquip commodo nisi Lorem enim nulla sit ullamco consequat elit exercitation officia in irure. Nulla deserunt anim consectetur quis ipsum officia Lorem excepteur labore.\nSint in Lorem dolore elit tempor commodo ex eu pariatur pariatur. Magna aliquip ex esse Lorem adipisicing veniam ipsum est nisi eiusmod qui eiusmod. Commodo consequat culpa consectetur esse quis officia enim velit Lorem deserunt excepteur. Duis velit ea officia velit proident do fugiat nostrud eu. Labore deserunt in sunt. Deserunt et aute nisi qui tempor eu. Nulla exercitation deserunt labore minim quis adipisicing. In irure mollit reprehenderit in nulla culpa nostrud esse culpa veniam.',
        symbolsCount: 1633,
        rating: 5,
      },
      {
        name: 'veniam',
        text: 'Est voluptate ea cupidatat elit ullamco. Nostrud ex nisi consequat qui ipsum nulla magna velit tempor duis ex adipisicing. Cillum est pariatur magna id dolore esse nostrud commodo duis sunt quis irure dolor commodo elit. Id nisi laborum consectetur cupidatat nisi tempor dolor cupidatat non aliqua quis excepteur velit fugiat. Culpa sunt anim aliqua amet exercitation. Cillum veniam magna tempor voluptate.\nEsse ex sint in officia eu nisi laborum et reprehenderit ullamco adipisicing nisi. Veniam minim sit cillum deserunt deserunt labore sunt id. Ut fugiat mollit incididunt cillum labore aliqua pariatur ut Lorem occaecat et. Est sit id irure minim enim sunt. Sunt non culpa enim tempor.\nEnim non cupidatat proident cillum ea excepteur ex labore ipsum eiusmod laboris amet irure. Non commodo eu amet in laborum esse culpa irure aute nostrud. Nostrud ut cupidatat cupidatat elit ut in ad aliquip culpa mollit ullamco. Ut mollit sint minim consectetur ea sit aliqua fugiat duis voluptate eiusmod quis culpa. Sit aliqua nisi non do dolor pariatur consectetur dolore minim magna esse. Eiusmod anim incididunt ad aliqua id non enim magna. Commodo commodo ullamco commodo duis eiusmod cupidatat minim ea ipsum labore minim cupidatat amet dolore aliquip.',
        symbolsCount: 1249,
        rating: 3,
      },
    ],
  },
  {
    name: 'The Picture of Dorian Gray',
    id: '4',
    accessLevel: 3,
    chapters: [
      {
        name: 'amet',
        text: 'Occaecat fugiat commodo amet Lorem. Anim aliqua consequat veniam magna amet sit dolor id. Adipisicing mollit proident deserunt dolore ipsum ea ex eu exercitation eiusmod nulla do amet Lorem pariatur. Sint incididunt exercitation aliquip duis consequat occaecat labore. Dolore esse eiusmod nulla in deserunt ut est ut reprehenderit cupidatat non. Deserunt anim Lorem adipisicing fugiat consequat dolor adipisicing anim laboris eu. Elit anim dolore Lorem. Est do et aliquip ut aliqua ex do cupidatat fugiat.\nProident do incididunt ipsum non tempor. Eiusmod amet amet esse Lorem consequat voluptate amet et adipisicing amet id minim cupidatat incididunt. Ut do amet tempor ut pariatur proident occaecat consectetur deserunt dolor. Consectetur Lorem reprehenderit consectetur adipisicing laboris mollit commodo sunt in elit id ut proident laboris. Ex est commodo anim sit cillum irure laborum nostrud sit cillum officia officia et do. Ullamco do sit aliqua cillum exercitation.\nEa dolor nulla aliquip Lorem magna incididunt ut elit aliqua. Duis non exercitation dolore aliqua. Voluptate nisi et duis ut nulla labore reprehenderit deserunt et id do. Nulla do amet veniam deserunt commodo veniam sint. Culpa aute sit nostrud pariatur consectetur. Officia duis ad Lorem. Exercitation pariatur consectetur Lorem. Tempor commodo aliqua dolor enim fugiat ut sit eu do aliqua nulla nulla sit.',
        symbolsCount: 1381,
        rating: 2,
      },
      {
        name: 'elit',
        text: 'Sunt Lorem irure do nulla non esse Lorem nulla consectetur sint ad. Elit nulla mollit consectetur officia ad consectetur. Sint deserunt enim mollit nostrud ipsum enim dolore excepteur ut anim incididunt. Labore do amet ipsum anim enim consequat Lorem. Voluptate tempor consectetur et aliqua consequat officia aute exercitation incididunt eiusmod magna culpa proident exercitation. Nulla magna id exercitation nostrud pariatur fugiat magna cillum incididunt exercitation aute exercitation. Veniam occaecat tempor eu fugiat reprehenderit sint ipsum laborum minim qui nostrud id labore eu nulla.\nQui ut irure aute nisi et aliqua. Aliquip pariatur labore non adipisicing commodo incididunt id ipsum mollit eiusmod aliqua minim. Quis consequat sunt sit ullamco nisi excepteur consequat commodo aute voluptate quis adipisicing nulla non sit. Reprehenderit officia ipsum amet voluptate culpa anim et reprehenderit incididunt aute. Sit magna veniam ea nulla aliqua amet minim consectetur. Dolore et voluptate reprehenderit do dolor. Do cupidatat minim ullamco fugiat Lorem aliquip qui excepteur magna reprehenderit. Anim aliquip pariatur laboris irure do consectetur.\nIpsum nostrud esse ad non laborum cupidatat aliquip commodo magna id. Cupidatat proident culpa irure veniam sunt ullamco ut reprehenderit incididunt adipisicing qui mollit. Ex anim veniam tempor nisi proident mollit dolore minim irure. Nulla incididunt aliqua velit fugiat exercitation quis.',
        symbolsCount: 1451,
        rating: 2,
      },
      {
        name: 'tempor',
        text: 'Pariatur ea Lorem est elit ut sint proident veniam voluptate non officia elit occaecat voluptate anim. Ea enim non dolor commodo consequat id veniam est laboris veniam quis sunt labore fugiat eu. Qui aliquip voluptate esse nulla voluptate ex irure voluptate elit magna voluptate. Mollit dolor id tempor laborum non magna deserunt ex laborum esse exercitation velit eu irure. Do cupidatat fugiat est sint occaecat tempor incididunt reprehenderit adipisicing non proident. Est nisi culpa officia deserunt voluptate ex proident exercitation enim culpa aliqua ad laborum reprehenderit irure. Ullamco irure do Lorem officia consequat.\nOfficia commodo qui ullamco sit eu pariatur cupidatat velit nostrud voluptate minim et officia mollit. Eiusmod velit eiusmod minim Lorem pariatur exercitation. Irure enim ea culpa nulla et duis Lorem eiusmod est consectetur irure velit dolore nisi adipisicing. Do eu laboris tempor dolore fugiat esse esse exercitation ipsum commodo.\nAmet fugiat nisi sit laboris esse anim sint. Exercitation in non enim est cupidatat amet aliqua enim commodo nisi laborum mollit. Mollit ullamco eiusmod proident velit ex. Incididunt elit ullamco cupidatat ut enim ullamco et laborum laboris consectetur ut in cillum non. Laborum esse sunt elit elit occaecat.',
        symbolsCount: 1272,
        rating: 2,
      },
      {
        name: 'et',
        text: 'Lorem amet in eu non pariatur non in. Magna quis officia et sunt id veniam qui id occaecat non in pariatur elit. Quis ullamco excepteur nisi eiusmod ullamco excepteur laboris occaecat non cupidatat non nostrud. Consequat et dolor non elit.\nQui ad minim do dolor esse proident Lorem aliqua. Minim eu magna elit aliqua officia minim. Est id amet mollit adipisicing esse non consequat voluptate culpa sunt ex. Officia aliquip magna ullamco ea et reprehenderit non nostrud laborum in.\nSint elit officia eu elit dolor quis do. Ex consectetur aute velit deserunt Lorem sint in. Nulla labore consequat consequat. Reprehenderit laborum consequat aute commodo et est exercitation ad labore excepteur consequat laborum aliquip aliqua adipisicing. Anim quis ipsum commodo commodo ullamco exercitation do culpa elit laborum Lorem consequat.',
        symbolsCount: 828,
        rating: 3,
      },
      {
        name: 'ex',
        text: 'Esse voluptate id aute officia est qui ea irure ad elit tempor exercitation esse elit. Cupidatat enim in pariatur laborum ea sunt sunt cupidatat consectetur exercitation esse magna pariatur velit eiusmod. Dolore non veniam qui. Excepteur esse officia anim irure nostrud.\nMinim cillum proident cillum sit nostrud esse. Quis culpa officia ut ad in ad adipisicing minim non adipisicing ea cupidatat. Reprehenderit nostrud et proident ullamco sunt proident minim. Occaecat dolor commodo exercitation occaecat deserunt laboris occaecat ad. Eiusmod eu magna veniam laborum Lorem aliquip aliqua ipsum mollit labore sit mollit aliqua ad. Esse fugiat non ea proident ex aute eu cupidatat cupidatat nisi ullamco qui fugiat.\nIn sit veniam labore nostrud sit adipisicing ut deserunt voluptate. Elit culpa fugiat esse. Cupidatat duis qui Lorem sit mollit eu enim ad dolor aute esse anim officia. Anim excepteur nisi velit exercitation sint qui aliquip et officia do aliqua ex. Velit nostrud ut elit sit fugiat anim. Lorem non sint ex laboris irure deserunt ad incididunt velit amet non consectetur mollit nulla. Enim elit mollit ex ullamco.',
        symbolsCount: 1127,
        rating: 5,
      },
      {
        name: 'eiusmod',
        text: 'Labore occaecat magna adipisicing anim sint sint reprehenderit anim duis laborum officia eu commodo consequat. Duis velit dolore esse tempor nulla est ea aliquip ea sunt. Do tempor magna excepteur nulla labore aute aute fugiat adipisicing nostrud. Cupidatat ullamco non id nisi nostrud excepteur esse sunt est ullamco ullamco laboris. Sint elit sint est velit commodo quis nisi enim reprehenderit. Cupidatat deserunt irure cillum. Adipisicing adipisicing minim sit sunt quis aliqua consequat cupidatat fugiat ea eu proident aute. Deserunt elit aliquip do exercitation dolore qui.\nFugiat est mollit anim in eu sint quis exercitation non est sunt in. Aliqua dolore nisi excepteur labore sunt amet occaecat labore consectetur. Ipsum irure laboris duis mollit culpa deserunt velit do voluptate ex incididunt ex consectetur exercitation commodo. Laborum fugiat ad qui esse. Ad culpa dolore in pariatur officia id non est tempor eu consequat cillum et consectetur. Elit elit dolor anim officia.\nAute eu nostrud tempor quis et laboris laborum reprehenderit commodo enim dolor voluptate nostrud. Adipisicing commodo dolor tempor duis Lorem consectetur enim sit id ad enim officia. Voluptate ex do ipsum nisi eu eiusmod. Ad minim veniam do dolor consequat do consequat.',
        symbolsCount: 1260,
        rating: 2,
      },
    ],
  },
];
