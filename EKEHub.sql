create table user
(
    id       int auto_increment
        primary key,
    username varchar(256) null,
    password varchar(256) null,
    coin     int          null
);
create table faculty
(
    id   int auto_increment
        primary key,
    name varchar(256) null
);
create table science
(
    id        int auto_increment
        primary key,
    facultyId int          null,
    name      varchar(256) null,
    constraint science_ibfk_1
        foreign key (facultyId) references faculty (id)
);
create table subject
(
    id        int auto_increment
        primary key,
    scienceId int          null,
    name      varchar(256) null,
    constraint subject_ibfk_1
        foreign key (scienceId) references science (id)
);
create table topic
(
    id        int auto_increment
        primary key,
    userId    int          not null,
    subjectId int          null,
    name      varchar(128) null,
    text      longtext     null,
    dateTime  datetime     null,
    themeType varchar(128) not null,
    open      tinyint(1)   null,
    constraint note_user_id_fk
        foreign key (userId) references user (id),
    constraint topic_ibfk_1
        foreign key (subjectId) references subject (id)
);
create table comment
(
    id       int auto_increment
        primary key,
    topicId  int      null,
    userId   int      null,
    text     text     null,
    dateTime datetime null,
    constraint comment_ibfk_1
        foreign key (topicId) references topic (id),
    constraint comment_ibfk_2
        foreign key (userId) references user (id)
);
create table upDownVote
(
    id     int auto_increment,
    userId int         null,
    conId  int         null,
    type   varchar(20) null,
    value  int         null,
    constraint upDownVote_pk
        unique (id),
    constraint upDownVote_user_id_fk
        foreign key (userId) references user (id)
);
create table reaction
(
    id     int auto_increment
        primary key,
    userId int          null,
    conId  int          null,
    type   varchar(256) null,
    value  int          null,
    constraint reaction_ibfk_1
        foreign key (userId) references user (id)
);
create table perm
(
    id     int auto_increment
        primary key,
    userId int null,
    value  int null,
    constraint perm_ibfk_1
        foreign key (userId) references user (id)
);
create table chat
(
    id      int auto_increment
        primary key,
    userId  int      null,
    message longtext null,
    created datetime null,
    constraint chat_ibfk_1
        foreign key (userId) references user (id)
);

INSERT INTO EKEHub.user (id, username, password, coin) VALUES (1, 'VLNGFW', '25d55ad283aa400af464c76d713c07ad', 0);
INSERT INTO EKEHub.user (id, username, password, coin) VALUES (2, 'Sanyi', '25d55ad283aa400af464c76d713c07ad', 0);
INSERT INTO EKEHub.user (id, username, password, coin) VALUES (3, 'momsz', '9fdca85df7c5bf723b8eb5b8dd3cd0d5', 0);
INSERT INTO EKEHub.user (id, username, password, coin) VALUES (4, 'ABCD123', '0510723e06e091f5581867bfeac88e45', 0);

INSERT INTO EKEHub.faculty (id, name) VALUES (2, 'Bölcsészettudományi és Művészeti Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (3, 'Gazdaság- és Társadalomtudományi Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (4, 'Informatikai Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (5, 'Természettudományi Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (6, 'Pedagógiai Kar');

INSERT INTO EKEHub.science (id, facultyId, name) VALUES (1, 4, 'Programtervező informatikus');
INSERT INTO EKEHub.science (id, facultyId, name) VALUES (81, 4, 'Informatikus könyvtáros');
INSERT INTO EKEHub.science (id, facultyId, name) VALUES (82, 4, 'Gazdaságinformatikus');

INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (1, 1, 'Magasszintű programozási nyelvek I.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (2, 1, 'Magasszintű programozási nyelvek I.
gy.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (3, 1, ' Számítógép architektúrák ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (4, 1, ' A programozás módszertani alapjai');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (5, 1, ' Adatbázisrendszerek I. ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (6, 1, ' Adatbázisrendszerek I. gy. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (7, 1, ' Hálózati architektúrák és protokollok');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (8, 1, ' Magasszintű programozási nyelvek II.
gy.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (9, 1, ' Webprogramozás I. gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (10, 1, ' Magasszintű programozási nyelvek II.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (11, 1, ' Hálózati architektúrák és protokollok');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (12, 1, ' A rendszerfejlesztés technológiája ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (13, 1, 'Szolgáltatás orientált programozás ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (14, 1, 'Szolgáltatás orientált programozás g');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (15, 1, ' Operációs rendszerek I. ea. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (16, 1, ' Operációs rendszerek I. g');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (17, 1, ' Alkalmazások fejlesztése projekt labor');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (18, 1, ' Programozási környezetek gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (19, 1, 'Alkalmazások fejlesztése projekt labor 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (20, 1, ' Szakdolgozati témaválasztó');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (21, 1, 'Számítógépes szöveg és kiadványszerkesztés gy.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (22, 1, ' Szakdolgozati szeminárium I. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (23, 1, ' Szoftverjog és biztonságtechnika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (24, 1, ' Szakdolgozati szeminárium II. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (25, 1, ' Az informatika logikai alapjai ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (26, 1, ' Az informatika logikai alapjai gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (27, 1, 'Kalkulus I. ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (28, 1, 'Kalkulus I. gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (29, 1, 'Bevezetés az informatikába ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (30, 1, 'Bevezetés az informatikába gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (31, 1, ' Formális nyelvek és automaták ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (32, 1, ' Diszkrét matematika és lineáris
algebra ea.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (33, 1, ' Diszkrét matematika és lineáris
algebra gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (34, 1, 'kalkulusz 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (35, 1, 'Algo 1 e');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (36, 1, 'lgo 1 gy ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (37, 1, 'Algo 2 e');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (38, 1, 'Algo 2 gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (39, 1, 'Diszkrét matematika és lineális algebra 2 gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (40, 1, 'Valószínűség számítás');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (41, 1, 'Numerikus matematika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (42, 1, 'Numerikus matematika gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (43, 1, 'Operáció kutatás');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (44, 1, 'Mesterséges int ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (45, 1, 'Mesterséges int gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (46, 1, 'Számításeelmélet');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (47, 1, 'Fordító prog ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (48, 1, 'Fordító prog gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (49, 1, 'Bevezetés a matematikai statistikábna');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (50, 1, 'Adatbázisrendszerek 2 ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (51, 1, 'Adatbázisrendszerek 2 gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (52, 1, 'Webprog 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (53, 1, 'Prog tech ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (54, 1, 'Prog tech gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (55, 1, 'Bevezetés a számítógépes grafikába');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (56, 1, 'Bevezetés a számítógépes grafikába');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (57, 1, 'Keretrendszer alapú prog');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (58, 1, 'Kriptográfia ea.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (59, 1, 'Webprog 3');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (60, 1, 'Hálózati architektúrák és protokolok 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (61, 1, 'Funkcionális programozás');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (62, 1, 'C++');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (63, 1, 'Robotika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (64, 1, 'Robotika gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (65, 1, 'Alkalmazás fejlesztés project labor 3');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (66, 1, 'LabView programozás');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (67, 1, 'Mobilprog 1');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (68, 1, 'Rendszerek tervezése és tesztelése ea ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (69, 1, 'Rendszerek tervezése és tesztelése gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (70, 1, 'Webprog 4');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (71, 1, 'Assembly nyelvek');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (72, 1, 'Assembly nyelvek');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (73, 1, 'Digitális képfeldolgozás ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (74, 1, 'Komputergrafika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (75, 1, 'Komputergrafika gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (76, 1, 'Szerver adminisztráció');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (77, 1, 'Alkalmazás fejlesztés project labor 4');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (78, 1, 'LabView programozás 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (79, 1, 'Mobilprog 2');

INSERT INTO EKEHub.topic (id, userId, subjectId, name, text, dateTime, themeType, open) VALUES (1, 1, 1, 'Fantasztikus jegyzet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat est tellus, eget malesuada turpis tincidunt sit amet. Aliquam in dolor dui. Maecenas id enim ex. Proin malesuada iaculis mauris id pharetra. Pellentesque cursus dignissim dictum. Praesent porttitor nisl nec tellus volutpat tempor. Nullam et orci id turpis blandit tempus. Suspendisse potenti. Integer placerat libero ac velit consectetur vulputate. Aenean interdum dui in sapien sollicitudin, ac bibendum ipsum varius. Mauris sed molestie urna. Quisque consequat justo eget pulvinar ullamcorper. Integer fringilla ac massa ut lobortis. Duis ut mauris non neque venenatis cursus a finibus odio. Maecenas commodo urna quis nunc scelerisque, et convallis augue vehicula. In hac habitasse platea dictumst.

Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.

Quisque at leo posuere turpis suscipit rutrum at sed neque. Sed faucibus purus ante, nec tempor tortor imperdiet eu. Curabitur cursus dolor eu sapien egestas dignissim. Suspendisse ut nulla id libero sodales finibus. Sed varius velit urna, pretium lobortis ligula tincidunt in. Nunc mattis faucibus elementum. Nunc nec efficitur arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed augue nunc, interdum et vulputate id, congue vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sodales pellentesque quam vel sodales.

Donec ultricies tempus cursus. Mauris at ante urna. Cras convallis fermentum consectetur. Aliquam erat volutpat. Suspendisse potenti. Mauris quis arcu faucibus, varius nunc placerat, faucibus nisi. Nunc a mi venenatis, viverra erat a, cursus mauris. Morbi rutrum odio vel tortor interdum, ac dapibus mi iaculis. Sed vel tortor ante. Morbi metus quam, lobortis eget metus eget, egestas pulvinar est. Fusce dui magna, sodales at augue ac, imperdiet condimentum sapien. Morbi ut gravida orci. Cras dolor erat, volutpat eget convallis rhoncus, imperdiet vitae augue.

Praesent faucibus, lectus ut vestibulum fermentum, leo nisi vulputate nulla, id ultrices est sem id augue. Ut ullamcorper justo a nulla tristique efficitur quis vitae urna. Mauris mattis sollicitudin urna, nec accumsan magna faucibus in. Praesent sodales magna ut vestibulum dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec mi ut lacus suscipit malesuada ut vitae nulla. Nam hendrerit convallis ullamcorper. Ut eget nisi condimentum, cursus mauris nec, tristique felis. Duis facilisis sapien sapien, at tempus libero pulvinar ac. Integer vestibulum neque quis risus placerat ullamcorper.', '2022-03-14 12:06:30', 'Note', 0);
INSERT INTO EKEHub.topic (id, userId, subjectId, name, text, dateTime, themeType, open) VALUES (3, 1, 1, 'Ezt negyon nem értem, ti értitek ?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat est tellus, eget malesuada turpis tincidunt sit amet. Aliquam in dolor dui. Maecenas id enim ex. Proin malesuada iaculis mauris id pharetra. Pellentesque cursus dignissim dictum. Praesent porttitor nisl nec tellus volutpat tempor. Nullam et orci id turpis blandit tempus. Suspendisse potenti. Integer placerat libero ac velit consectetur vulputate. Aenean interdum dui in sapien sollicitudin, ac bibendum ipsum varius. Mauris sed molestie urna. Quisque consequat justo eget pulvinar ullamcorper. Integer fringilla ac massa ut lobortis. Duis ut mauris non neque venenatis cursus a finibus odio. Maecenas commodo urna quis nunc scelerisque, et convallis augue vehicula. In hac habitasse platea dictumst.

Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.

Quisque at leo posuere turpis suscipit rutrum at sed neque. Sed faucibus purus ante, nec tempor tortor imperdiet eu. Curabitur cursus dolor eu sapien egestas dignissim. Suspendisse ut nulla id libero sodales finibus. Sed varius velit urna, pretium lobortis ligula tincidunt in. Nunc mattis faucibus elementum. Nunc nec efficitur arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed augue nunc, interdum et vulputate id, congue vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sodales pellentesque quam vel sodales.

Donec ultricies tempus cursus. Mauris at ante urna. Cras convallis fermentum consectetur. Aliquam erat volutpat. Suspendisse potenti. Mauris quis arcu faucibus, varius nunc placerat, faucibus nisi. Nunc a mi venenatis, viverra erat a, cursus mauris. Morbi rutrum odio vel tortor interdum, ac dapibus mi iaculis. Sed vel tortor ante. Morbi metus quam, lobortis eget metus eget, egestas pulvinar est. Fusce dui magna, sodales at augue ac, imperdiet condimentum sapien. Morbi ut gravida orci. Cras dolor erat, volutpat eget convallis rhoncus, imperdiet vitae augue.

Praesent faucibus, lectus ut vestibulum fermentum, leo nisi vulputate nulla, id ultrices est sem id augue. Ut ullamcorper justo a nulla tristique efficitur quis vitae urna. Mauris mattis sollicitudin urna, nec accumsan magna faucibus in. Praesent sodales magna ut vestibulum dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec mi ut lacus suscipit malesuada ut vitae nulla. Nam hendrerit convallis ullamcorper. Ut eget nisi condimentum, cursus mauris nec, tristique felis. Duis facilisis sapien sapien, at tempus libero pulvinar ac. Integer vestibulum neque quis risus placerat ullamcorper.', '2022-03-14 12:06:36', 'Question', 0);
INSERT INTO EKEHub.topic (id, userId, subjectId, name, text, dateTime, themeType, open) VALUES (4, 1, 1, 'Sanyi jegyzete', '<p>&nbsp;&nbsp;A számítástechnika történetének egyik fontos fejezete a programozási nyelvekkialakulása, története, fejlıdése. A fejlıdés sorána programozási nyelvekszintaktikája változott meg, elısegítve a programozási hibák minél korábban(lehetıleg fordítási idıben) történı felfedezését.Egy igazán jó programozási nyelvennagyon sok hibafajta eleve el sem követhetı, másokkönnyen elkerülhetıek.Egyjóprogramozási nyelv sokféle jellemzıvel rendelkezik. Emeljünk ki néhányatezek közül:</p>
<ul>
  <li>könnyen elsajátítható alapelvekkel rendelkezik,</li>
  <li>könnyen áttekinthetı forráskód,</li>
  <li>könnyen módosítható, bıvíthetı a forráskód,</li>
  <li>nehéz hibát elkövetni kódolás közben,</li>
  <li>könnyen dokumentálható a kód.</li>
</ul>
<p><u>A programozási nyelveket generációkba lehet sorolnia fejlıdés bizonyos szakaszaitfigyelembe véve:</u></p>
<p><strong>Elsı generációs programozási nyelvek: GÉPI KÓD</strong></p>
<p>A számítógépek a NEUMANN elveknek megfelelıen a végrehajtandó program-utasításokat a memóriában tárolják. A memória ma már alapvetıen byte szervezéső,egyetlen nagy mérető byte-sorozatnak tekinthetı. Minden byte egy egész számotjelölhet, 0..255 értéktartományból. Ebbıl az következik, hogy a mikroprocesszoralapvetıen az utasításokat is számoknak tekinti.A gépi kódú programozási nyelvben az utasításokat számkódok jelölik. Amennyibenaz utasításnak vannak paraméterei, úgy azokat is számként kell megadni. A gépikódban létezı fogalom aregiszter, amely a mikroprocesszoron belüli tárlórekesztjelöl. Egy ilyen rekesz tartalma egy egész szám lehet. A regisztereknek kötött nevükvan, pl. AX, BX, CX, DX. A 32 bites processzorokona regiszterek nevei felvették az’E’ elıtagot (Extended AX regiszter – EAX). Aránylag kevés regiszter állrendelkezésre (kevesebb mint 20 darab), és többnekspeciális feladat volt, ezért nemlehetett akármilyen célra felhasználni. Két szám összeadását az alábbi módon kellvégrehajtani:1. Olvassuk be az elsı számot az EAX regiszterbe amemóriából.2. Az EAX regiszterhez adjuk hozzá a második számot.3. Az eredményt (az EAX regiszter új értékét) tároljuk a memória egy másik pontján &nbsp;A gépi kódú programozási nyelvben az utasításokat számkódok jelölik. Amennyibenaz utasításnak vannak paraméterei, úgy azokat is számként kell megadni. A gépikódban létezı fogalom aregiszter, amely a mikroprocesszoron belüli tárlórekesztjelöl. Egy ilyen rekesz tartalma egy egész szám lehet. A regisztereknek kötött nevükvan, pl. AX, BX, CX, DX. A 32 bites processzorokona regiszterek nevei felvették az’E’ elıtagot (Extended AX regiszter – EAX). Aránylag kevés regiszter állrendelkezésre (kevesebb mint 20 darab), és többnekspeciális feladat volt, ezért nemlehetett akármilyen célra felhasználni. Két szám összeadását az alábbi módon kellvégrehajtani:1. Olvassuk be az elsı számot az EAX regiszterbe amemóriából.2. Az EAX regiszterhez adjuk hozzá a második számot.3. Az eredményt (az EAX regiszter új értékét) tároljuk a memória egy másik pontján.<strong>&nbsp;</strong></p>
<p><strong>Második generációs programozási nyelvek: ASSEMBLY</strong>A gépi kódú programozási nyelv hátrányai miatt új nyelvet kellett kifejleszteni.Az ASSEMBLY nyelv elsı közelítésben a ’megérthetı gépi kód’ nyelve. Azutasítások számkódjait néhány betős (2-3-4 betős) ún. mnemonikokkalhelyettesítették. Egy ilyen mnemonik (emlékeztetı szócska) a gépi kódú utasításjelentéstartalmára utalt. Például a „memória-tartalom beolvasása egy regiszterbe”(bemozgatás) az angol MOVE=mozgatni szó alapján a MOV mnemonikot kapta. A„két szám összeadása” az angol ADD=összeadni mnemonikot kapta. Az 1. ábrán aharmadik oszlopban szerepelnek a gépi kódú utasítások assembly nyelvő megfelelıi.A MOV utasítás önnmagában nem lefordítható gépi kódra, hiszen azt is meg kelladni, hogy melyik memória-cím tartalmát kell betölteni melyik regiszterbe. Az utasításegyik lehetséges formája „MOV EAX,&lt;memcím&gt;”. Ennekmár egyértelmően megfelelegy gépi kódú utasításkód (mov eax = 8B), a memóriacímet pedig a továbbiszámkódok írják le.Ennek megfelelıen az assembly nyelv egy adott mikroprocesszor adott gépikódjához készült el. Ezért az assembly nyelv is processzor-függı, de ezen a szintenújabb fogalmak jelentek meg:&nbsp;</p>', '2022-03-17 16:23:59', 'Note', 1);

INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (1, 1, 1, 'Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.', '2022-03-14 13:29:37');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (3, 1, 1, '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat est tellus, eget malesuada turpis tincidunt sit amet. Aliquam in dolor dui. Maecenas id enim ex. Proin malesuada iaculis mauris id pharetra. Pellentesque cursus dignissim dictum. Praesent porttitor nisl nec tellus volutpat tempor. Nullam et orci id turpis blandit tempus. Suspendisse potenti. Integer placerat libero ac velit consectetur vulputate. Aenean interdum dui in sapien sollicitudin, ac bibendum ipsum varius. Mauris sed molestie urna. Quisque consequat justo eget pulvinar ullamcorper. Integer fringilla ac massa ut lobortis. Duis ut mauris non neque venenatis cursus a finibus odio. Maecenas commodo urna quis nunc scelerisque, et convallis augue vehicula. In hac habitasse platea dictumst.</p>', '2022-03-15 16:08:19');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (4, 1, 1, 'Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.', '2022-03-15 16:20:21');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (8, 1, 1, '<p>Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.</p>', '2022-03-17 12:46:17');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (9, 1, 1, '<p>uisque at leo posuere turpis suscipit rutrum at sed neque. Sed faucibus purus ante, nec tempor tortor imperdiet eu. Curabitur cursus dolor eu sapien egestas dignissim. Suspendisse ut nulla id libero sodales finibus. Sed varius velit urna, pretium lobortis ligula tincidunt in. Nunc mattis faucibus elementum. Nunc nec efficitur arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed augue nunc, interdum et vulputate id, congue vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sodales pellentesque quam vel sodales.</p>', '2022-03-20 14:46:06');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (10, 1, 1, '<p>Donec ultricies tempus cursus. Mauris at ante urna. Cras convallis fermentum consectetur. Aliquam erat volutpat. Suspendisse potenti. Mauris quis arcu faucibus, varius nunc placerat, faucibus nisi. Nunc a mi venenatis, viverra erat a, cursus mauris. Morbi rutrum odio vel tortor interdum, ac dapibus mi iaculis. Sed vel tortor ante. Morbi metus quam, lobortis eget metus eget, egestas pulvinar est. Fusce dui magna, sodales at augue ac, imperdiet condimentum sapien. Morbi ut gravida orci. Cras dolor erat, volutpat eget convallis rhoncus, imperdiet vitae augue.</p>', '2022-03-20 14:57:22');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (12, 4, 1, '<p>Szerintem ez nem is olyan rosz alap</p>', '2022-03-23 12:43:40');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (13, 4, 1, '<p>Ebből még lehet akár egy jó jegyzet is</p>', '2022-03-23 12:43:42');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (14, 4, 1, '<p>Engem nem győzött meg szerintem még részletezd</p>', '2022-03-23 12:43:42');

INSERT INTO EKEHub.upDownVote (id, userId, conId, type, value) VALUES (12, 1, 4, 'Topic', -1);
INSERT INTO EKEHub.upDownVote (id, userId, conId, type, value) VALUES (13, 3, 1, 'Topic', 1);
INSERT INTO EKEHub.upDownVote (id, userId, conId, type, value) VALUES (14, 3, 4, 'Topic', 1);

INSERT INTO EKEHub.reaction (id, userId, conId, type, value) VALUES (1, 1, 1, 'Comment', 1);
INSERT INTO EKEHub.reaction (id, userId, conId, type, value) VALUES (2, 1, 4, 'Topic', 2);
INSERT INTO EKEHub.reaction (id, userId, conId, type, value) VALUES (3, 3, 1, 'Topic', 1);
INSERT INTO EKEHub.reaction (id, userId, conId, type, value) VALUES (4, 3, 4, 'Topic', 1);

INSERT INTO EKEHub.perm (id, userId, value) VALUES (1, 1, 2);
INSERT INTO EKEHub.perm (id, userId, value) VALUES (3, 3, 1);

INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (1, 1, 'Sziasztok', '2022-03-27 19:24:11');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (2, 1, 'Ma lesz óra?', '2022-03-27 19:54:30');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (3, 2, 'Milyen órára gondolsz?', '2022-03-30 12:16:30');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (4, 3, 'Sziasztok ', '2022-04-04 19:17:16');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (5, 3, 'Mizu ?', '2022-04-04 19:17:26');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (6, 3, 'Van valami jó jegyzet?', '2022-04-04 19:17:40');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (7, 4, 'Sziasztok!', '2022-04-10 20:17:40');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (8, 4, 'Tudtok segíteni elakadtam.', '2022-04-10 20:18:06');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (9, 1, 'Szia tedd fel a kérdést a tantárgy részben és hamarmeg lesz válaszolva!', '2022-04-10 20:20:06');
