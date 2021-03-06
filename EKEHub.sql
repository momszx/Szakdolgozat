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

INSERT INTO EKEHub.faculty (id, name) VALUES (2, 'B??lcs??szettudom??nyi ??s M??v??szeti Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (3, 'Gazdas??g- ??s T??rsadalomtudom??nyi Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (4, 'Informatikai Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (5, 'Term??szettudom??nyi Kar');
INSERT INTO EKEHub.faculty (id, name) VALUES (6, 'Pedag??giai Kar');

INSERT INTO EKEHub.science (id, facultyId, name) VALUES (1, 4, 'Programtervez?? informatikus');
INSERT INTO EKEHub.science (id, facultyId, name) VALUES (81, 4, 'Informatikus k??nyvt??ros');
INSERT INTO EKEHub.science (id, facultyId, name) VALUES (82, 4, 'Gazdas??ginformatikus');

INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (1, 1, 'Magasszint?? programoz??si nyelvek I.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (2, 1, 'Magasszint?? programoz??si nyelvek I.
gy.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (3, 1, ' Sz??m??t??g??p architekt??r??k ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (4, 1, ' A programoz??s m??dszertani alapjai');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (5, 1, ' Adatb??zisrendszerek I. ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (6, 1, ' Adatb??zisrendszerek I. gy. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (7, 1, ' H??l??zati architekt??r??k ??s protokollok');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (8, 1, ' Magasszint?? programoz??si nyelvek II.
gy.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (9, 1, ' Webprogramoz??s I. gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (10, 1, ' Magasszint?? programoz??si nyelvek II.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (11, 1, ' H??l??zati architekt??r??k ??s protokollok');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (12, 1, ' A rendszerfejleszt??s technol??gi??ja ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (13, 1, 'Szolg??ltat??s orient??lt programoz??s ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (14, 1, 'Szolg??ltat??s orient??lt programoz??s g');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (15, 1, ' Oper??ci??s rendszerek I. ea. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (16, 1, ' Oper??ci??s rendszerek I. g');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (17, 1, ' Alkalmaz??sok fejleszt??se projekt labor');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (18, 1, ' Programoz??si k??rnyezetek gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (19, 1, 'Alkalmaz??sok fejleszt??se projekt labor 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (20, 1, ' Szakdolgozati t??mav??laszt??');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (21, 1, 'Sz??m??t??g??pes sz??veg ??s kiadv??nyszerkeszt??s gy.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (22, 1, ' Szakdolgozati szemin??rium I. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (23, 1, ' Szoftverjog ??s biztons??gtechnika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (24, 1, ' Szakdolgozati szemin??rium II. ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (25, 1, ' Az informatika logikai alapjai ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (26, 1, ' Az informatika logikai alapjai gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (27, 1, 'Kalkulus I. ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (28, 1, 'Kalkulus I. gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (29, 1, 'Bevezet??s az informatik??ba ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (30, 1, 'Bevezet??s az informatik??ba gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (31, 1, ' Form??lis nyelvek ??s automat??k ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (32, 1, ' Diszkr??t matematika ??s line??ris
algebra ea.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (33, 1, ' Diszkr??t matematika ??s line??ris
algebra gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (34, 1, 'kalkulusz 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (35, 1, 'Algo 1 e');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (36, 1, 'lgo 1 gy ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (37, 1, 'Algo 2 e');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (38, 1, 'Algo 2 gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (39, 1, 'Diszkr??t matematika ??s line??lis algebra 2 gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (40, 1, 'Val??sz??n??s??g sz??m??t??s');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (41, 1, 'Numerikus matematika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (42, 1, 'Numerikus matematika gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (43, 1, 'Oper??ci?? kutat??s');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (44, 1, 'Mesters??ges int ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (45, 1, 'Mesters??ges int gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (46, 1, 'Sz??m??t??seelm??let');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (47, 1, 'Ford??t?? prog ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (48, 1, 'Ford??t?? prog gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (49, 1, 'Bevezet??s a matematikai statistik??bna');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (50, 1, 'Adatb??zisrendszerek 2 ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (51, 1, 'Adatb??zisrendszerek 2 gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (52, 1, 'Webprog 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (53, 1, 'Prog tech ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (54, 1, 'Prog tech gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (55, 1, 'Bevezet??s a sz??m??t??g??pes grafik??ba');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (56, 1, 'Bevezet??s a sz??m??t??g??pes grafik??ba');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (57, 1, 'Keretrendszer alap?? prog');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (58, 1, 'Kriptogr??fia ea.');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (59, 1, 'Webprog 3');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (60, 1, 'H??l??zati architekt??r??k ??s protokolok 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (61, 1, 'Funkcion??lis programoz??s');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (62, 1, 'C++');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (63, 1, 'Robotika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (64, 1, 'Robotika gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (65, 1, 'Alkalmaz??s fejleszt??s project labor 3');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (66, 1, 'LabView programoz??s');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (67, 1, 'Mobilprog 1');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (68, 1, 'Rendszerek tervez??se ??s tesztel??se ea ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (69, 1, 'Rendszerek tervez??se ??s tesztel??se gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (70, 1, 'Webprog 4');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (71, 1, 'Assembly nyelvek');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (72, 1, 'Assembly nyelvek');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (73, 1, 'Digit??lis k??pfeldolgoz??s ');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (74, 1, 'Komputergrafika ea');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (75, 1, 'Komputergrafika gy');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (76, 1, 'Szerver adminisztr??ci??');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (77, 1, 'Alkalmaz??s fejleszt??s project labor 4');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (78, 1, 'LabView programoz??s 2');
INSERT INTO EKEHub.subject (id, scienceId, name) VALUES (79, 1, 'Mobilprog 2');

INSERT INTO EKEHub.topic (id, userId, subjectId, name, text, dateTime, themeType, open) VALUES (1, 1, 1, 'Fantasztikus jegyzet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat est tellus, eget malesuada turpis tincidunt sit amet. Aliquam in dolor dui. Maecenas id enim ex. Proin malesuada iaculis mauris id pharetra. Pellentesque cursus dignissim dictum. Praesent porttitor nisl nec tellus volutpat tempor. Nullam et orci id turpis blandit tempus. Suspendisse potenti. Integer placerat libero ac velit consectetur vulputate. Aenean interdum dui in sapien sollicitudin, ac bibendum ipsum varius. Mauris sed molestie urna. Quisque consequat justo eget pulvinar ullamcorper. Integer fringilla ac massa ut lobortis. Duis ut mauris non neque venenatis cursus a finibus odio. Maecenas commodo urna quis nunc scelerisque, et convallis augue vehicula. In hac habitasse platea dictumst.

Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.

Quisque at leo posuere turpis suscipit rutrum at sed neque. Sed faucibus purus ante, nec tempor tortor imperdiet eu. Curabitur cursus dolor eu sapien egestas dignissim. Suspendisse ut nulla id libero sodales finibus. Sed varius velit urna, pretium lobortis ligula tincidunt in. Nunc mattis faucibus elementum. Nunc nec efficitur arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed augue nunc, interdum et vulputate id, congue vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sodales pellentesque quam vel sodales.

Donec ultricies tempus cursus. Mauris at ante urna. Cras convallis fermentum consectetur. Aliquam erat volutpat. Suspendisse potenti. Mauris quis arcu faucibus, varius nunc placerat, faucibus nisi. Nunc a mi venenatis, viverra erat a, cursus mauris. Morbi rutrum odio vel tortor interdum, ac dapibus mi iaculis. Sed vel tortor ante. Morbi metus quam, lobortis eget metus eget, egestas pulvinar est. Fusce dui magna, sodales at augue ac, imperdiet condimentum sapien. Morbi ut gravida orci. Cras dolor erat, volutpat eget convallis rhoncus, imperdiet vitae augue.

Praesent faucibus, lectus ut vestibulum fermentum, leo nisi vulputate nulla, id ultrices est sem id augue. Ut ullamcorper justo a nulla tristique efficitur quis vitae urna. Mauris mattis sollicitudin urna, nec accumsan magna faucibus in. Praesent sodales magna ut vestibulum dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec mi ut lacus suscipit malesuada ut vitae nulla. Nam hendrerit convallis ullamcorper. Ut eget nisi condimentum, cursus mauris nec, tristique felis. Duis facilisis sapien sapien, at tempus libero pulvinar ac. Integer vestibulum neque quis risus placerat ullamcorper.', '2022-03-14 12:06:30', 'Note', 0);
INSERT INTO EKEHub.topic (id, userId, subjectId, name, text, dateTime, themeType, open) VALUES (3, 1, 1, 'Ezt negyon nem ??rtem, ti ??rtitek ?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat est tellus, eget malesuada turpis tincidunt sit amet. Aliquam in dolor dui. Maecenas id enim ex. Proin malesuada iaculis mauris id pharetra. Pellentesque cursus dignissim dictum. Praesent porttitor nisl nec tellus volutpat tempor. Nullam et orci id turpis blandit tempus. Suspendisse potenti. Integer placerat libero ac velit consectetur vulputate. Aenean interdum dui in sapien sollicitudin, ac bibendum ipsum varius. Mauris sed molestie urna. Quisque consequat justo eget pulvinar ullamcorper. Integer fringilla ac massa ut lobortis. Duis ut mauris non neque venenatis cursus a finibus odio. Maecenas commodo urna quis nunc scelerisque, et convallis augue vehicula. In hac habitasse platea dictumst.

Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.

Quisque at leo posuere turpis suscipit rutrum at sed neque. Sed faucibus purus ante, nec tempor tortor imperdiet eu. Curabitur cursus dolor eu sapien egestas dignissim. Suspendisse ut nulla id libero sodales finibus. Sed varius velit urna, pretium lobortis ligula tincidunt in. Nunc mattis faucibus elementum. Nunc nec efficitur arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed augue nunc, interdum et vulputate id, congue vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sodales pellentesque quam vel sodales.

Donec ultricies tempus cursus. Mauris at ante urna. Cras convallis fermentum consectetur. Aliquam erat volutpat. Suspendisse potenti. Mauris quis arcu faucibus, varius nunc placerat, faucibus nisi. Nunc a mi venenatis, viverra erat a, cursus mauris. Morbi rutrum odio vel tortor interdum, ac dapibus mi iaculis. Sed vel tortor ante. Morbi metus quam, lobortis eget metus eget, egestas pulvinar est. Fusce dui magna, sodales at augue ac, imperdiet condimentum sapien. Morbi ut gravida orci. Cras dolor erat, volutpat eget convallis rhoncus, imperdiet vitae augue.

Praesent faucibus, lectus ut vestibulum fermentum, leo nisi vulputate nulla, id ultrices est sem id augue. Ut ullamcorper justo a nulla tristique efficitur quis vitae urna. Mauris mattis sollicitudin urna, nec accumsan magna faucibus in. Praesent sodales magna ut vestibulum dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec mi ut lacus suscipit malesuada ut vitae nulla. Nam hendrerit convallis ullamcorper. Ut eget nisi condimentum, cursus mauris nec, tristique felis. Duis facilisis sapien sapien, at tempus libero pulvinar ac. Integer vestibulum neque quis risus placerat ullamcorper.', '2022-03-14 12:06:36', 'Question', 0);
INSERT INTO EKEHub.topic (id, userId, subjectId, name, text, dateTime, themeType, open) VALUES (4, 1, 1, 'Sanyi jegyzete', '<p>&nbsp;&nbsp;A sz??m??t??stechnika t??rt??net??nek egyik fontos fejezete a programoz??si nyelvekkialakul??sa, t??rt??nete, fejl??d??se. A fejl??d??s sor??na programoz??si nyelvekszintaktik??ja v??ltozott meg, el??seg??tve a programoz??si hib??k min??l kor??bban(lehet??leg ford??t??si id??ben) t??rt??n?? felfedez??s??t.Egy igaz??n j?? programoz??si nyelvennagyon sok hibafajta eleve el sem k??vethet??, m??sokk??nnyen elker??lhet??ek.Egyj??programoz??si nyelv sokf??le jellemz??vel rendelkezik. Emelj??nk ki n??h??nyatezek k??z??l:</p>
<ul>
  <li>k??nnyen elsaj??t??that?? alapelvekkel rendelkezik,</li>
  <li>k??nnyen ??ttekinthet?? forr??sk??d,</li>
  <li>k??nnyen m??dos??that??, b??v??thet?? a forr??sk??d,</li>
  <li>neh??z hib??t elk??vetni k??dol??s k??zben,</li>
  <li>k??nnyen dokument??lhat?? a k??d.</li>
</ul>
<p><u>A programoz??si nyelveket gener??ci??kba lehet sorolnia fejl??d??s bizonyos szakaszaitfigyelembe v??ve:</u></p>
<p><strong>Els?? gener??ci??s programoz??si nyelvek: G??PI K??D</strong></p>
<p>A sz??m??t??g??pek a NEUMANN elveknek megfelel??en a v??grehajtand?? program-utas??t??sokat a mem??ri??ban t??rolj??k. A mem??ria ma m??r alapvet??en byte szervez??s??,egyetlen nagy m??ret?? byte-sorozatnak tekinthet??. Minden byte egy eg??sz sz??motjel??lhet, 0..255 ??rt??ktartom??nyb??l. Ebb??l az k??vetkezik, hogy a mikroprocesszoralapvet??en az utas??t??sokat is sz??moknak tekinti.A g??pi k??d?? programoz??si nyelvben az utas??t??sokat sz??mk??dok jel??lik. Amennyibenaz utas??t??snak vannak param??terei, ??gy azokat is sz??mk??nt kell megadni. A g??pik??dban l??tez?? fogalom aregiszter, amely a mikroprocesszoron bel??li t??rl??rekesztjel??l. Egy ilyen rekesz tartalma egy eg??sz sz??m lehet. A regisztereknek k??t??tt nev??kvan, pl. AX, BX, CX, DX. A 32 bites processzorokona regiszterek nevei felvett??k az???E??? el??tagot (Extended AX regiszter ??? EAX). Ar??nylag kev??s regiszter ??llrendelkez??sre (kevesebb mint 20 darab), ??s t??bbnekspeci??lis feladat volt, ez??rt nemlehetett ak??rmilyen c??lra felhaszn??lni. K??t sz??m ??sszead??s??t az al??bbi m??don kellv??grehajtani:1. Olvassuk be az els?? sz??mot az EAX regiszterbe amem??ri??b??l.2. Az EAX regiszterhez adjuk hozz?? a m??sodik sz??mot.3. Az eredm??nyt (az EAX regiszter ??j ??rt??k??t) t??roljuk a mem??ria egy m??sik pontj??n &nbsp;A g??pi k??d?? programoz??si nyelvben az utas??t??sokat sz??mk??dok jel??lik. Amennyibenaz utas??t??snak vannak param??terei, ??gy azokat is sz??mk??nt kell megadni. A g??pik??dban l??tez?? fogalom aregiszter, amely a mikroprocesszoron bel??li t??rl??rekesztjel??l. Egy ilyen rekesz tartalma egy eg??sz sz??m lehet. A regisztereknek k??t??tt nev??kvan, pl. AX, BX, CX, DX. A 32 bites processzorokona regiszterek nevei felvett??k az???E??? el??tagot (Extended AX regiszter ??? EAX). Ar??nylag kev??s regiszter ??llrendelkez??sre (kevesebb mint 20 darab), ??s t??bbnekspeci??lis feladat volt, ez??rt nemlehetett ak??rmilyen c??lra felhaszn??lni. K??t sz??m ??sszead??s??t az al??bbi m??don kellv??grehajtani:1. Olvassuk be az els?? sz??mot az EAX regiszterbe amem??ri??b??l.2. Az EAX regiszterhez adjuk hozz?? a m??sodik sz??mot.3. Az eredm??nyt (az EAX regiszter ??j ??rt??k??t) t??roljuk a mem??ria egy m??sik pontj??n.<strong>&nbsp;</strong></p>
<p><strong>M??sodik gener??ci??s programoz??si nyelvek: ASSEMBLY</strong>A g??pi k??d?? programoz??si nyelv h??tr??nyai miatt ??j nyelvet kellett kifejleszteni.Az ASSEMBLY nyelv els?? k??zel??t??sben a ???meg??rthet?? g??pi k??d??? nyelve. Azutas??t??sok sz??mk??djait n??h??ny bet??s (2-3-4 bet??s) ??n. mnemonikokkalhelyettes??tett??k. Egy ilyen mnemonik (eml??keztet?? sz??cska) a g??pi k??d?? utas??t??sjelent??startalm??ra utalt. P??ld??ul a ???mem??ria-tartalom beolvas??sa egy regiszterbe???(bemozgat??s) az angol MOVE=mozgatni sz?? alapj??n a MOV mnemonikot kapta. A???k??t sz??m ??sszead??sa??? az angol ADD=??sszeadni mnemonikot kapta. Az 1. ??br??n aharmadik oszlopban szerepelnek a g??pi k??d?? utas??t??sok assembly nyelv?? megfelel??i.A MOV utas??t??s ??nnmag??ban nem leford??that?? g??pi k??dra, hiszen azt is meg kelladni, hogy melyik mem??ria-c??m tartalm??t kell bet??lteni melyik regiszterbe. Az utas??t??segyik lehets??ges form??ja ???MOV EAX,&lt;memc??m&gt;???. Ennekm??r egy??rtelm??en megfelelegy g??pi k??d?? utas??t??sk??d (mov eax = 8B), a mem??riac??met pedig a tov??bbisz??mk??dok ??rj??k le.Ennek megfelel??en az assembly nyelv egy adott mikroprocesszor adott g??pik??dj??hoz k??sz??lt el. Ez??rt az assembly nyelv is processzor-f??gg??, de ezen a szinten??jabb fogalmak jelentek meg:&nbsp;</p>', '2022-03-17 16:23:59', 'Note', 1);

INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (1, 1, 1, 'Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.', '2022-03-14 13:29:37');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (3, 1, 1, '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat est tellus, eget malesuada turpis tincidunt sit amet. Aliquam in dolor dui. Maecenas id enim ex. Proin malesuada iaculis mauris id pharetra. Pellentesque cursus dignissim dictum. Praesent porttitor nisl nec tellus volutpat tempor. Nullam et orci id turpis blandit tempus. Suspendisse potenti. Integer placerat libero ac velit consectetur vulputate. Aenean interdum dui in sapien sollicitudin, ac bibendum ipsum varius. Mauris sed molestie urna. Quisque consequat justo eget pulvinar ullamcorper. Integer fringilla ac massa ut lobortis. Duis ut mauris non neque venenatis cursus a finibus odio. Maecenas commodo urna quis nunc scelerisque, et convallis augue vehicula. In hac habitasse platea dictumst.</p>', '2022-03-15 16:08:19');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (4, 1, 1, 'Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.', '2022-03-15 16:20:21');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (8, 1, 1, '<p>Fusce mollis est in eros malesuada cursus. Proin pellentesque tellus id mattis posuere. Vivamus eros lorem, molestie sed tempor vel, dapibus vitae ex. Vestibulum lacinia bibendum sapien sit amet porta. Nulla in elementum eros, in tincidunt elit. Proin sagittis purus eu odio ornare, nec sodales erat varius. Donec nec pharetra nisi, sit amet laoreet orci. In ultricies sollicitudin varius. Morbi purus ex, ultrices et cursus ut, aliquam vitae tellus. Duis sagittis eu turpis sed dapibus. Sed non dignissim odio.</p>', '2022-03-17 12:46:17');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (9, 1, 1, '<p>uisque at leo posuere turpis suscipit rutrum at sed neque. Sed faucibus purus ante, nec tempor tortor imperdiet eu. Curabitur cursus dolor eu sapien egestas dignissim. Suspendisse ut nulla id libero sodales finibus. Sed varius velit urna, pretium lobortis ligula tincidunt in. Nunc mattis faucibus elementum. Nunc nec efficitur arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed augue nunc, interdum et vulputate id, congue vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sodales pellentesque quam vel sodales.</p>', '2022-03-20 14:46:06');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (10, 1, 1, '<p>Donec ultricies tempus cursus. Mauris at ante urna. Cras convallis fermentum consectetur. Aliquam erat volutpat. Suspendisse potenti. Mauris quis arcu faucibus, varius nunc placerat, faucibus nisi. Nunc a mi venenatis, viverra erat a, cursus mauris. Morbi rutrum odio vel tortor interdum, ac dapibus mi iaculis. Sed vel tortor ante. Morbi metus quam, lobortis eget metus eget, egestas pulvinar est. Fusce dui magna, sodales at augue ac, imperdiet condimentum sapien. Morbi ut gravida orci. Cras dolor erat, volutpat eget convallis rhoncus, imperdiet vitae augue.</p>', '2022-03-20 14:57:22');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (12, 4, 1, '<p>Szerintem ez nem is olyan rosz alap</p>', '2022-03-23 12:43:40');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (13, 4, 1, '<p>Ebb??l m??g lehet ak??r egy j?? jegyzet is</p>', '2022-03-23 12:43:42');
INSERT INTO EKEHub.comment (id, topicId, userId, text, dateTime) VALUES (14, 4, 1, '<p>Engem nem gy??z??tt meg szerintem m??g r??szletezd</p>', '2022-03-23 12:43:42');

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
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (2, 1, 'Ma lesz ??ra?', '2022-03-27 19:54:30');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (3, 2, 'Milyen ??r??ra gondolsz?', '2022-03-30 12:16:30');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (4, 3, 'Sziasztok ', '2022-04-04 19:17:16');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (5, 3, 'Mizu ?', '2022-04-04 19:17:26');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (6, 3, 'Van valami j?? jegyzet?', '2022-04-04 19:17:40');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (7, 4, 'Sziasztok!', '2022-04-10 20:17:40');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (8, 4, 'Tudtok seg??teni elakadtam.', '2022-04-10 20:18:06');
INSERT INTO EKEHub.chat (id, userId, message, created) VALUES (9, 1, 'Szia tedd fel a k??rd??st a tant??rgy r??szben ??s hamarmeg lesz v??laszolva!', '2022-04-10 20:20:06');
