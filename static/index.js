// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
//   Organisation: Broad AI Lab, University of Auckland
//   Author: Ziqi Wang
//   Date: 2021-05-12
//
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

(function() {

    const EXAMPLES = [
        {
            question: "Which magazine was started first Arthur's Magazine or First for Women?",
            context: "Radio City is India's first private FM radio station and was started on 3 July 2001. It broadcasts on 91.1 (earlier 91.0 in most cities) megahertz from Mumbai (where it was started in 2004), Bengaluru (started first in 2001), Lucknow and New Delhi (since 2003). It plays Hindi, English and regional songs. It was launched in Hyderabad in March 2006, in Chennai on 7 July 2006 and in Visakhapatnam October 2007. Radio City recently forayed into New Media in May 2008 with the launch of a music portal - PlanetRadiocity.com that offers music related news, videos, songs, and other music-related features. The Radio station currently plays a mix of Hindi and Regional music. Abraham Thomas is the CEO of the company.\n\n" +
                        "Football in Albania existed before the Albanian Football Federation (FSHF) was created. This was evidenced by the team's registration at the Balkan Cup tournament during 1929-1931, which started in 1929 (although Albania eventually had pressure from the teams because of competition, competition started first and was strong enough in the duels) . Albanian National Team was founded on June 6, 1930, but Albania had to wait 16 years to play its first international match and then defeated Yugoslavia in 1946. In 1932, Albania joined FIFA (during the 12–16 June convention ) And in 1954 she was one of the founding members of UEFA.\n\n" +
                        "Echosmith is an American, Corporate indie pop band formed in February 2009 in Chino, California. Originally formed as a quartet of siblings, the band currently consists of Sydney, Noah and Graham Sierota, following the departure of eldest sibling Jamie in late 2016. Echosmith started first as \"Ready Set Go!\" until they signed to Warner Bros. Records in May 2012. They are best known for their hit song \"Cool Kids\", which reached number 13 on the \"Billboard\" Hot 100 and was certified double platinum by the RIAA with over 1,200,000 sales in the United States and also double platinum by ARIA in Australia. The song was Warner Bros. Records' fifth-biggest-selling-digital song of 2014, with 1.3 million downloads sold. The band's debut album, \"Talking Dreams\", was released on October 8, 2013.\n\n" +
                        "Women's colleges in the Southern United States refers to undergraduate, bachelor's degree–granting institutions, often liberal arts colleges, whose student populations consist exclusively or almost exclusively of women, located in the Southern United States. Many started first as girls' seminaries or academies. Salem College is the oldest female educational institution in the South and Wesleyan College is the first that was established specifically as a college for women. Some schools, such as Mary Baldwin University and Salem College, offer coeducational courses at the graduate level.\n\n" +
                        "The First Arthur County Courthouse and Jail, was perhaps the smallest court house in the United States, and serves now as a museum.\n\n" +
                        "Arthur's Magazine (1844–1846) was an American literary periodical published in Philadelphia in the 19th century. Edited by T.S. Arthur, it featured work by Edgar A. Poe, J.H. Ingraham, Sarah Josepha Hale, Thomas G. Spear, and others. In May 1846 it was merged into \"Godey's Lady's Book\".\n\n" +
                        "The 2014–15 Ukrainian Hockey Championship was the 23rd season of the Ukrainian Hockey Championship. Only four teams participated in the league this season, because of the instability in Ukraine and that most of the clubs had economical issues. Generals Kiev was the only team that participated in the league the previous season, and the season started first after the year-end of 2014. The regular season included just 12 rounds, where all the teams went to the semifinals. In the final, ATEK Kiev defeated the regular season winner HK Kremenchuk.\n\n" +
                        "First for Women is a woman's magazine published by Bauer Media Group in the USA. The magazine was started in 1989. It is based in Englewood Cliffs, New Jersey. In 2011 the circulation of the magazine was 1,310,696 copies.\n\n" +
                        "The Freeway Complex Fire was a 2008 wildfire in the Santa Ana Canyon area of Orange County, California. The fire started as two separate fires on November 15, 2008. The \"Freeway Fire\" started first shortly after 9am with the \"Landfill Fire\" igniting approximately 2 hours later. These two separate fires merged a day later and ultimately destroyed 314 residences in Anaheim Hills and Yorba Linda.\n\n" +
                        "William Rast is an American clothing line founded by Justin Timberlake and Trace Ayala. It is most known for their premium jeans. On October 17, 2006, Justin Timberlake and Trace Ayala put on their first fashion show to launch their new William Rast clothing line. The label also produces other clothing items such as jackets and tops. The company started first as a denim line, later evolving into a men’s and women’s clothing line.",
            answer: "Arthur's Magazine",
            supports: ["The magazine was started in 1989.",
                        "Arthur's Magazine (1844–1846) was an American literary periodical published in Philadelphia in the 19th century."]
        },
        {
            question: 'Who is older, Annie Morton or Terry Richardson?',
            context:"Annie Morton (born October 8, 1970) is an American model born in Pennsylvania.  She has appeared on the covers of \"British Vogue\", \"ID\", \"Marie Claire\", and other magazines.  She has been photographed by Helmut Newton; Peter Lindbergh; Annie Leibovitz; Richard Avedon; Juergen Teller; Paul Jasmin, Mary Ellen Mark and Terry Richardson, and modeled for Donna Karan, Givenchy, Guerlain, Chanel, \"Harper's Bazaar\", \"Sports Illustrated\" and Victoria's Secret.  A long time vegetarian, an advocate for organic lifestyle choices and natural healthcare.  She co-founded Tsi-La Organics, a \"Green Luxury\" company that creates and sells vegan, organic perfume and skin care products.\n\n" +
                    "Madonna is a biography by English author Andrew Morton, chronicling the life of American recording artist Madonna.  The book was released in November 2001 by St. Martin's Press in the United States and in April 2002 by Michael O'Mara Books in the United Kingdom.  Morton decided to write a biography on Madonna in 2000.  The release was announced in April 2001 by St. Martin's Press.  President and publisher Sally Richardson described the biography to contain details about Madonna's ambitions, her relationships and her lifestyle.\n\n" +
                    "Terrence \"Uncle Terry\" Richardson (born August 14, 1965) is an American fashion and portrait photographer who has shot advertising campaigns for Marc Jacobs, Aldo, Supreme, Sisley, Tom Ford, and Yves Saint Laurent among others.  He has also done work for magazines such as \"Rolling Stone\", \"GQ\", \"Vogue\", \"Vanity Fair\", \"Harper's Bazaar\", \"i-D\", and \"Vice\".\n\n" +
                    "Lady Gaga x Terry Richardson is a photo-book by American singer Lady Gaga and American photographer Terry Richardson, released on November 22, 2011 by Grand Central Publishing.  The book features more than 350 pictures of Gaga as taken by Richardson during a ten-month period from Gaga's performance at The Monster Ball Tour till the 2011 Grammy Awards.  In addition to photographs, it includes a foreword written by the singer about her relationship with Richardson.  The duo had collaborated on other projects prior to the shooting of the book.\n\n" +
                    "Gumbo is the fourth and first self-released studio album by American singer-songwriter PJ Morton.  It was released on April 14, 2017, by Morton Records, as the follow-up to his third studio album \"New Orleans\" (2013).  The record incorporates R&B styles with elements of older soul music; its lyrics discuss themes of romance and explores political and personal themes.  The album is entirely produced by Morton himself and features guest appearances by Pell, BJ the Chicago Kid and R&B singer Anthony Hamilton's back-up group, The HamilTones.  The album features a cover of the Bee Gees' \"How Deep Is Your Love\".\n\n" +
                    "Amanda Lepore (born November 21, 1967) is an American transgender model, celebutante, singer, and performance artist.  The former Club Kid has appeared in advertising for numerous companies.  Lepore is also noted as a regular subject in photographer David LaChapelle's work, serving as his muse, as well as many other photographers, such as Terry Richardson and .  She participated in LaChapelle's \"Artists and Prostitutes 1985–2005\" exhibit in New York City, where she \"lived\" in a voyeuristic life-sized set.  Lepore has also released several singles, many written by and/or recorded with Cazwell.  In 2011, she released her debut studio album, \"I.. . Amanda Lepore\", on Peace Bisquit.\n\n" +
                    "Piano Girl (Turkish: \"Deli Deli Olma\" ) is a 2009 Turkish comedy-drama film, directed by Murat Saraçoğlu, starring Tarık Akan and Şerif Sezer as two elderly people forced to question their histories and reveal their big secrets.  The film, which went on nationwide general release across Turkey on \xa017,\xa02009\xa0(2009--) , was the opening film at the Sinema Burada Film Festival in İzmir, Turkey, and has since been screened in competition at a number of other film festivals, including the 46th Antalya Golden Orange Film Festival, where, according to Terry Richardson, writing for Today's Zaman, \"the rapt audience gave it a standing ovation.\"\n\n" +
                    "Index Magazine was a prominent New York City based publication with in-depth interviews with prominent figures in art and culture.  It was created by Peter Halley and Bob Nickas in 1996, running until late 2005.  Covering the burgeoning Indie culture of the 1990s, index regularly employed such rising photographers as Juergen Teller, Terry Richardson, Wolfgang Tillmans, and Ryan McGinley, and featured interviews with figures including Björk, Brian Eno, Marc Jacobs, and Scarlett Johansson, mixing new talents and established names in music, film, architecture, fashion, art, and politics.  In addition to famous personalities, the publication also featured a mix of interviews with not so-famous New York personalities such as Queen Itchie or Ducky Doolittle.\n\n" +
                    "Snoecks is a Belgian magazine.  The huge, 550-plus-page magazine appears once a year in October and focuses on the most interesting new international developments in the arts, photography and literature.  In recent editions the book had features on artists such as Anton Corbijn, Larry Sultan, Matthew Barney, Terry Richardson, Ron Mueck, Alberto Garcia-Alix, Peter Lindbergh, Albert Watson, Desiree Dolron, Bettina Rheims, Diana Scheunemann, Timothy Greenfield-Sanders and Andres Serrano.\n\n" +
                    "Kenton Terry Richardson (born 26 July 1999) is an English professional footballer who plays as a defender for League Two side Hartlepool United.",
            answer: 'Terry Richardson',
            supports: ["Annie Morton (born October 8, 1970) is an American model born in Pennsylvania.",
                       "She has been photographed by Helmut Newton; Peter Lindbergh; Annie Leibovitz; Richard Avedon; Juergen Teller; Paul Jasmin, Mary Ellen Mark and Terry Richardson, and modeled for Donna Karan, Givenchy, Guerlain, Chanel, \"Harper's Bazaar\", \"Sports Illustrated\" and Victoria's Secret.",
                       "Terrence \"Uncle Terry\" Richardson (born August 14, 1965) is an American fashion and portrait photographer who has shot advertising campaigns for Marc Jacobs, Aldo, Supreme, Sisley, Tom Ford, and Yves Saint Laurent among others."]
        },
        {
            question: 'Who was known by his stage name Aladin and helped organizations improve their performance as a consultant?',
            context:"James P. Comer (born James Pierpont Comer, September 25, 1934 in East Chicago, Indiana) is currently the Maurice Falk Professor of Child Psychiatry at the Yale Child Study Center and has been since 1976.  He is also an associate dean at the Yale School of Medicine.  As one of the world's leading child psychiatrists, he is best known for his efforts to improve the scholastic performance of children from lower-income and minority backgrounds which led to the founding of the Comer School Development Program in 1968.  His program has been used in more than 600 schools in eighty-two school districts.  He is the author of ten books, including the autobiographical \"Maggie’s American Dream: The Life and Times of a Black Family\", 1988; \"Leave No Child Behind: Preparing Today's Youth for Tomorrow's World\", 2004; and his most recent book, \"What I Learned in School: Reflections on Race, Child Development, and School Reform\", 2009.  He has also written more than 150 articles for Parents (magazine) and more than 300 articles on children's health and development and race relations.  Dr. Comer has also served as a consultant to the Children's Television Workshop (Sesame Workshop) which produces Sesame Street and The Electric Company (1971 TV series).  He is a co-founder and past president of the Black Psychiatrists of America and has served on the board of several universities, foundations, and corporations.  He has also lectured and consulted widely not only across the United States at different universities, medical schools, and scientific associations, but also around the world in places such as London, Paris, Tokyo, Dakar, Senegal and Sydney, Australia.  For his work and scholarship, Dr. Comer has been awarded 47 honorary degrees and has been recognized by numerous organizations.\n\n" +
                    "Clifford Smith (born April 1, 1971), better known by his stage name Method Man, is an American rapper, record producer, and actor.  He is known as a member of the East Coast hip hop collective Wu-Tang Clan.  He is also one half of the hip hop duo Method Man & Redman.  He took his stage name from the 1979 film \"Method Man\".  In 1996, he won a Grammy Award for Best Rap Performance by a Duo or Group, for \"I'll Be There for You/You're All I Need to Get By\", with American R&B singer-songwriter Mary J. Blige.\n\n" +
                    "Indriati Gerald Bernardina (born 9 June 1942), also known by her stage name Indriati Iskak and after marriage as Indri Makki, is an Indonesian actress turned psychologist and marketer.  Born in Surabaya, she entered the Indonesian film industry and soared to popularity with Usmar Ismail's commercially successful \"Tiga Dara\" (1957).  She appeared in eight further films and established her own girl group before retiring from cinema in 1963.  She graduated from the University of Indonesia with a degree in psychology in 1968, and has taught the subject at the .  For twenty-six years she worked with Unilever, and since 1994 she has been a marketing consultant with Makki Makki.\n\n" +
                    "Eenasul Fateh (Bengali: ঈনাসুল ফাতেহ ; born 3 April 1959), also known by his stage name Aladin, is a Bangladeshi-British cultural practitioner, magician, live artist and former international management consultant.\n\n" +
                    "Mick Batyske (known by his stage name Mick, sometimes styled as MICK, and formerly Mick Boogie) is an American DJ and entrepreneur.  He is an A-list DJ and spun private parties for celebrities including Kanye West, LeBron James, Jay-Z and Will Smith.  In addition to his mix tape releases, he has performed in venues internationally, including New York City, Dubai, Tokyo, Las Vegas, and Los Angeles.  As an entrepreneur, he has invested in various start-up companies including Localeur, in which he is also an advisor and consultant.\n\n" +
                    "Christopher Nicholas Sarantakos (born December 19, 1967), known by the stage name Criss Angel, is an American magician, illusionist and musician.  Angel began his career in New York City, before moving his base of operations to the Las Vegas Valley.  He is known for starring in the television and stage show \"Criss Angel Mindfreak\" and his previous live performance illusion show \"Criss Angel Believe\" in collaboration with \"Cirque du Soleil\" at the Luxor casino in Las Vegas.  The show generated $150 million in tourist revenue to Las Vegas in 2010, but has since been replaced by \"Mindfreak LIVE\" on 11 May 2016 (the show is partly produced by Cirque, however the directive rights are entirely with Criss Angel).  He also starred in the television series \"Criss Angel BeLIEve\" on Spike TV, the reality-competition television show \"Phenomenon\" on NBC, and the 2014 stage show \"Criss Angel Magicjam\".\n\n" +
                    "Anre Dabiri (born May 23, 1977), better known by his stage name Eldee, stylized as eLDee, is a former Nigerian-American rapper, singer, and record producer but now an IT Consultant based in the United_States \"Lanre\" is a diminutive for the Yoruba name \"Olanrewaju\" (which translates to \"Wealth is moving forward\").  eLDee has a masters degree in Architecture from the University of Lagos, Nigeria.  He is an original member of the band Trybesmen, which was started in 1998 with rappers KB and Freestyle.  He hails from Lagos Island in Lagos State of Nigeria.\n\n" +
                    "Management consulting is the practice of helping organizations to improve their performance, operating primarily through the analysis of existing organizational problems and the development of plans for improvement.  Organizations may draw upon the services of management consultants for a number of reasons, including gaining external (and presumably objective) advice and access to the consultants' specialized expertise.\n\n" +
                    "Sylvester Samuels better known by his stage name Lil Ru, is an American rapper from Ridgeway, South Carolina currently signed to Def Jam Recordings.  His debut album, 21 & Up was released on August 25, 2009.  The Ridgeway native was 16 when he made his professional foray into the music business.  Inspired by New Orleans’ innovative Cash Money Crew, Ru began making a name for himself on his local music scene, doing live shows and pressing up his own CDs.  His hard-hitting lyrics and entrepreneurial spirit caught the attention of fellow South Carolinian Angie Stone.  Shortly after the neo-soul songstress helped him secure a deal with Elektra Records, Ru found himself unsigned again, among the artists lost in the shuffle after the label merged with Atlantic Records.  Music fans first heard him on his 2001 debut single Will Destroy.  He then released his 2002 follow up, Shawty What You Doin’.  Both songs reached the Billboard R&B/Hip-Hop charts and helped land him at his next label home, Capitol Records.\n\n" +
                    "Maruk Caizapanta Anchapacxi (Quito, January 30, 1970), whose stage name is Amaruk Kayshapanta.  Is an Ecuadorian multidisciplinary artist, known in Spain and Ecuador for his artistic and humanistic trajectory in favor of the Human Rights of Immigration in Spain.  Named as the \"Chasqui de Oro\" (In the VI Race and hike \"El Chasqui-NY\").  Received the award as \"Cultural Ambassador of the Andes-Mushuk Nina 2014 (Third Edition)\", for rescuing the traditions and culture of the Andes for the Indigenous Organizations of Peru, Bolivia based in Ecuador.  He obtained the prize \"100 Latinos Madrid\", by the Community of Madrid, in recognition of their non-profit altruistic and cultural work for the benefit of foreign immigrants in Spain.  Known for his role in the TV series \"Hospital Central\" in which he gave life to the character \"Edgar\".  His Philosophy \"Amawtica Amarukiana Desestructuration\" brings to the contemporary world the Philosophical study of the Andean Worldview, a spiritual legacy of transformation and balance for the awakening of a collective conscience.",
            answer: 'Eenasul Fateh',
            supports: ["Eenasul Fateh (Bengali: ঈনাসুল ফাতেহ ; born 3 April 1959), also known by his stage name Aladin, is a Bangladeshi-British cultural practitioner, magician, live artist and former international management consultant.",
                       "Management consulting is the practice of helping organizations to improve their performance, operating primarily through the analysis of existing organizational problems and the development of plans for improvement."]
        },
    ]

    String.prototype.hashCode = function() {
        let hash = 0, i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    window.socket = io({ autoConnect: false })

    $(window).init(function() {
        renderQuestionOptions();
        window.socket.on('update_status', function(response) {
            updateProgressBarTo((response.cur_step / response.total_step * 100).toFixed(4))
            setPredictionProgressBarDescription('Prediction in progress ... [' + response.status + ']');

            if (response.completed == 1) {
                let endTime = Date.now();
                let timeTaken = (endTime - window.startTime) / 1000;
                let result = { answer: "Click 'Predict' button to generate answer.", supports: [] }
                let progressBarMsg = 'Server Error: please try again later.  Time taken: ' + timeTaken.toFixed(4) + 's';
                let progressBarStatus = 'ERROR';

                if (response.cur_step == response.total_step) {
                    progressBarMsg = 'Done!  Time taken: ' + timeTaken.toFixed(4) + 's';
                    progressBarStatus = 'SUCCESS';
                    result = { answer: response.result['answer'], supports: response.result['supports'] };
                }
                renderResult(result);
                updateProgressBarTo(100);
                predictionProgressAnimationStop(progressBarStatus);
                setPredictionProgressBarDescription(progressBarMsg);
                window.socket.disconnect();
            }
        });
    });

    $('#my-input-btn').click(toggleMyInput);

    $('#example-btn').click(toggleExampleInput);

    $('#example-question-select').change(updateExampleContext);

    $('.predict-btn').click(predictAnswer);

    function toggleMyInput() {
        $('#my-input-btn').addClass('btn-primary').removeClass('btn-outline-secondary');
        $('#example-btn').addClass('btn-outline-secondary').removeClass('btn-primary');
        $('#my-question').removeClass('d-none');
        $('#example-question').addClass('d-none');
    }

    function toggleExampleInput() {
        $('#my-input-btn').addClass('btn-outline-secondary').removeClass('btn-primary');
        $('#example-btn').addClass('btn-primary').removeClass('btn-outline-secondary');
        $('#my-question').addClass('d-none');
        $('#example-question').removeClass('d-none');
    }

    function getInputType() {
        if ($('#my-input-btn').hasClass('btn-primary') && $('#example-btn').hasClass('btn-outline-secondary')) {
            return 'MY_INPUT'
        } else if ($('#my-input-btn').hasClass('btn-outline-secondary') && $('#example-btn').hasClass('btn-primary')) {
            return 'EXAMPLE'
        } else {
            return 'ERROR'
        }
    }

    function getSelectedExampleId() {
        return $('#example-question-select').children('option:selected').val();
    }

    function updateExampleContext() {
        renderResult({ answer: "Click 'Predict' button to generate answer.", supports: [] });

        let selectedId = getSelectedExampleId();
        if (selectedId == -1) {
            $('#context-textarea').val('');
            return;
        }
        $('#context-textarea').val(EXAMPLES[selectedId].context);
    }

    function getQuestionOptionHtml(QuestionId, Question) {
        let questionOption = `<option value="${QuestionId}">${Question}</option>`;
        return questionOption;
    }

    function renderQuestionOptions() {
        let output = '<option value="-1" selected>Choose...</option>';
        for (let i = 0; i < EXAMPLES.length; i++) {
            output += getQuestionOptionHtml(i, EXAMPLES[i].question)
        }
        $('#example-question-select').html(output);
    }

    function getCardHtml(card) {
        let cardTemplate = `
            <div class="card ${card.IsAnswer ? 'border-success' : ''} mb-4">
                <div class="card-header ${card.IsAnswer ? 'bg-success text-white' : ''}">${card.CardTitle}</div>
                <div class="card-body ${card.IsAnswer ? 'text-success' : ''}">
                    <p>${card.CardContent}</p>
                </div>
            </div>
        `;
        return cardTemplate
    }

    function renderResult(result) {
        $("#answer-section").empty();

        let output = '';

        let answer = { CardTitle: 'Answer', CardContent: result.answer, IsAnswer: true};
        let answerCard = getCardHtml(answer);
        output += answerCard;

        for (let i = 0; i < result.supports.length; i++) {
            let support = { CardTitle: 'Supporting Fact ' + (i+1), CardContent: result.supports[i], IsAnswer: false};
            let supportCard = getCardHtml(support);
            output += supportCard;
        }

        $("#answer-section").html(output);
    }

    function predictionProgressAnimationStart() {
        $('#prediction-progress-bar').addClass('progress-bar-animated');
        $('#prediction-progress-bar').removeClass('bg-success');
        $('#prediction-progress-bar').removeClass('bg-danger');
    }

    function predictionProgressAnimationStop(status = 'SUCCESS') {
        $('#prediction-progress-bar').removeClass('progress-bar-animated');
        if (status == 'ERROR')
            $('#prediction-progress-bar').addClass('bg-danger');
        else
            $('#prediction-progress-bar').addClass('bg-success');
    }

    function setPredictionProgressBarDescription(description) {
        $('#prediction-progress-bar-description').text(description)
    }

    function updateProgressBarTo(value) {
        $('#prediction-progress-bar').attr('aria-valuenow', value).css('width', value + '%')
    }

    function predictAnswer() {
        // clean up previous prediction ??
        window.startTime = Date.now();
        predictionProgressAnimationStart();
        setPredictionProgressBarDescription('Prediction in progress ...')

        // predict answer
        let inputType = getInputType();
        if (inputType == 'EXAMPLE') {
            // render example answer
            let selectedId = getSelectedExampleId();
            if (selectedId == -1) return;
            let result = { answer: EXAMPLES[selectedId].answer, supports: EXAMPLES[selectedId].supports };
            renderResult(result);

            let endTime = Date.now();
            let timeTaken = (endTime - window.startTime) / 1000;
            predictionProgressAnimationStop();
            setPredictionProgressBarDescription('Done!  Time taken: ' + timeTaken.toFixed(4) + 's');
        } else if (inputType == 'MY_INPUT') {
            // get query data and context
            // let id = window.startTime;
            let id = 'mock';
            let context = $('#context-textarea').val();
            let question = $('#my-question-input').val();

            // validate data??

            let data = {
                "id": id,
                "question": question,
                "context": context
            }

            // if use show details of prediction process, use socket
            if (true) {
                window.socket.open();
                window.socket.emit('predict', {data: JSON.stringify(data)});
                updateProgressBarTo(0)
            } else {
                $.ajax({
                    type: 'POST',
                    url: '/submit',
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    dataType: 'json',
                    success: function(response) {
                        let result = { answer: response['answer'], supports: response['supports'] };
                        renderResult(result);

                        let endTime = Date.now();
                        let timeTaken = (endTime - window.startTime) / 1000;
                        predictionProgressAnimationStop();
                        setPredictionProgressBarDescription('Done!  Time taken: ' + timeTaken.toFixed(4) + 's');
                    },
                    error: function() {
                        let endTime = Date.now();
                        let timeTaken = (endTime - window.startTime) / 1000;
                        predictionProgressAnimationStop('ERROR');
                        setPredictionProgressBarDescription('Server Error: please try again later.  Time taken: ' + timeTaken.toFixed(4) + 's');
                    }
                });
            }
        } else {
            let endTime = Date.now();
            let timeTaken = (endTime - window.startTime) / 1000;
            predictionProgressAnimationStop('ERROR');
            setPredictionProgressBarDescription('Client Error: please refresh page and try again.  Time taken: ' + timeTaken.toFixed(4) + 's');
        }
    }
})()