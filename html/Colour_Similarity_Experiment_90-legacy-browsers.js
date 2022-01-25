/**************************************** 
 * Colour_Similarity_Experiment_90 Test *
 ****************************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'pix',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Colour_Similarity_Experiment_90';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(startupRoutineBegin());
flowScheduler.add(startupRoutineEachFrame());
flowScheduler.add(startupRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin, trials_4LoopScheduler);
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
flowScheduler.add(welcome_instrRoutineBegin());
flowScheduler.add(welcome_instrRoutineEachFrame());
flowScheduler.add(welcome_instrRoutineEnd());
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(stim_response_instrRoutineBegin());
flowScheduler.add(stim_response_instrRoutineEachFrame());
flowScheduler.add(stim_response_instrRoutineEnd());
flowScheduler.add(catch_insrtRoutineBegin());
flowScheduler.add(catch_insrtRoutineEachFrame());
flowScheduler.add(catch_insrtRoutineEnd());
flowScheduler.add(colour_circle_instr_2RoutineBegin());
flowScheduler.add(colour_circle_instr_2RoutineEachFrame());
flowScheduler.add(colour_circle_instr_2RoutineEnd());
flowScheduler.add(instr_pracRoutineBegin());
flowScheduler.add(instr_pracRoutineEachFrame());
flowScheduler.add(instr_pracRoutineEnd());
const duringpracLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(duringpracLoopBegin, duringpracLoopScheduler);
flowScheduler.add(duringpracLoopScheduler);
flowScheduler.add(duringpracLoopEnd);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(survey1RoutineBegin());
flowScheduler.add(survey1RoutineEachFrame());
flowScheduler.add(survey1RoutineEnd());
flowScheduler.add(survey2RoutineBegin());
flowScheduler.add(survey2RoutineEachFrame());
flowScheduler.add(survey2RoutineEnd());
flowScheduler.add(survey3RoutineBegin());
flowScheduler.add(survey3RoutineEachFrame());
flowScheduler.add(survey3RoutineEnd());
flowScheduler.add(survey_4RoutineBegin());
flowScheduler.add(survey_4RoutineEachFrame());
flowScheduler.add(survey_4RoutineEnd());
flowScheduler.add(survey5RoutineBegin());
flowScheduler.add(survey5RoutineEachFrame());
flowScheduler.add(survey5RoutineEnd());
flowScheduler.add(survey6RoutineBegin());
flowScheduler.add(survey6RoutineEachFrame());
flowScheduler.add(survey6RoutineEnd());
flowScheduler.add(survey7RoutineBegin());
flowScheduler.add(survey7RoutineEachFrame());
flowScheduler.add(survey7RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=3C83396B', '');

  return Scheduler.Event.NEXT;
}


var startupClock;
var thisExp;
var win;
var event;
var shuffle;
var random;
var range;
var randint;
var tan;
var sum;
var colPairscheck;
var colPairs;
var length;
var colourcodesClock;
var colourcodesrgb;
var codenum;
var stimpositionsClock;
var stimpositions;
var welcome_instrClock;
var text_54;
var welcome;
var key_resp;
var space;
var consentClock;
var text_53;
var key_resp_16;
var image;
var stim_response_instrClock;
var movie_2Clock;
var movie_2;
var key_resp_15;
var space_14;
var text_17;
var catch_insrtClock;
var space_15;
var key_resp_17;
var movie_3Clock;
var movie_3;
var text_18;
var colour_circle_instr_2Clock;
var key_resp_9;
var space_9;
var text_9;
var image_2;
var instr_pracClock;
var space_10;
var text_10;
var key_resp_10;
var Stim1_display_pracClock;
var Circle;
var centre_cross4_2;
var Stim2_display_pracClock;
var Circle_4;
var centre_cross4_3;
var response_pracClock;
var mouse_5;
var a;
var b;
var response1disk_5;
var response3disk_5;
var response5disk_5;
var response7disk_5;
var text_29;
var responseprac_feedbackClock;
var text_55;
var text_56;
var summary_pracClock;
var mouse_10;
var response1disk_10;
var response3disk_10;
var response5disk_10;
var response7disk_10;
var rectangle_8;
var pracnumber;
var text_49;
var text_50;
var special_trial_pracClock;
var text_36;
var catch_pracClock;
var mouse_7;
var response1disk_7;
var response3disk_7;
var response5disk_7;
var response7disk_7;
var catchtrialorderprac;
var catchnumberprac;
var text_32;
var rectangle_5;
var summary2_pracClock;
var mouse_6;
var response1disk_6;
var response3disk_6;
var response5disk_6;
var response7disk_6;
var rectangle_4;
var text_30;
var text_31;
var beginClock;
var space_19;
var text_46;
var key_resp_22;
var LoopCounterClock;
var LoopCounter;
var Stim1_displayClock;
var Circle_1;
var centre_cross4;
var Stim2_displayClock;
var Circle_2;
var centre_cross4_4;
var responseClock;
var mouse;
var order;
var response1disk;
var response3disk;
var response5disk;
var response7disk;
var text_23;
var response_2Clock;
var mouse_2;
var response1disk_2;
var response3disk_2;
var response5disk_2;
var response7disk_2;
var rectangle;
var trialnumber;
var grey;
var text_25;
var text_24;
var special_trialClock;
var text_33;
var catch_1Clock;
var mouse_3;
var response1disk_3;
var response3disk_3;
var response5disk_3;
var response7disk_3;
var text_26;
var rectangle_2;
var response_sumClock;
var mouse_11;
var response1disk_11;
var response3disk_11;
var response5disk_11;
var response7disk_11;
var rectangle_9;
var text_51;
var text_52;
var survey1Clock;
var copyText_1;
var question_4;
var submitanswer;
var survey2Clock;
var copyText_2;
var question;
var submitanswer_2;
var survey3Clock;
var copyText_3;
var question_2;
var submitanswer_3;
var survey_4Clock;
var copyText_4;
var question_3;
var submitanswer_4;
var survey5Clock;
var copyText_5;
var question_5;
var submitanswer_5;
var survey6Clock;
var copyText_6;
var question_6;
var submitanswer_6;
var survey7Clock;
var copyText_7;
var question_7;
var submitanswer_7;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "startup"
  startupClock = new util.Clock();
  // Code to convert python to javascript that is not automatically converted
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager
  shuffle = function (a) {
      return util.shuffle(a);
  }
  random = function (a) {
      return Math.random();
  }
  range = function(start, end) {
      var ans = [];
      for (let i = start; i <= end; i++) {
          ans.push(i);
      }
      return ans;
  }
  
  
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  Array.prototype.append = [].push
  //pi=Math.PI;
  //sin = Math.sin;
  //cos = Math.cos;
  tan = Math.tan;
  
  sum = function (arr) {
  return arr.reduce((a,b)=>a+b)
  }
  
  
  //get random numbers which follows a uniform distribution
  function getRandom(min, max)
  {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  colPairscheck = []; //associative array or JS-object
  colPairs = []; //associative array or JS-object
  
      length = 81;
  
  for(var i = 0; i < length; i++)
  {
      // do not forget to think about the range of numbers.
      // Because if you want generate 1000 pairs then it should
      // be a range with more than 33 numbers and not with 10.
      // In other case you will get a loop, because 33 x 33 = 999
      var val1 = getRandom(0, 92),
          val2 = getRandom(0, 92),
          key = val1 + '_' + val2; // generate the key
  
      if(colPairscheck[key] != undefined) //check if we have it already
      {
          i--;
          //continue; //go to next loop step with i = i - 1
          //The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
      }
      //if we do not have it then we store it as new array:
      else
          colPairscheck[key] = [val1, val2];
          colPairs[i] = [val1, val2];//new array with our values
  }
  console.log(colPairs)
  // Initialize components for Routine "colourcodes"
  colourcodesClock = new util.Clock();
  colourcodesrgb = [];
  codenum = 0;
  
  // Initialize components for Routine "stimpositions"
  stimpositionsClock = new util.Clock();
  stimpositions = [];
  
  // Initialize components for Routine "welcome_instr"
  welcome_instrClock = new util.Clock();
  text_54 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_54',
    text: 'You may quit the experiment at anytime by pressing <ESC>',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.3)], height: 0.1,  wrapWidth: 1000, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: 0.0 
  });
  
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'Welcome to this experiment \n\nThis will take about 45 minutes \n\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.2,  wrapWidth: 1000, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  space = new visual.TextStim({
    win: psychoJS.window,
    name: 'space',
    text: 'Press SPACE to continue ',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  text_53 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_53',
    text: 'Precision Phenomenology Experiment\nJust a little bit more to read before the experiment...this is an Informed Consent Form. Please read and understand the statements below.\n\nI understand that my taking part in the study is voluntary and that I am free to leave the study at any time, without giving any reason. I understand that my medical care or legal rights will not be affected in any way.\nI agree to the use and release of study-related information about me for the purposes described in this Informed Consent Form.\nI agree to the re-use of data collected in this study for future studies in a de-identified manner as described in this Informed Consent form.\nI understand that my consent continues until and unless I withdraw my consent that can be done at any time by giving notice to the investigator. I understand that if I withdraw my consent I will not be able to continue to take part in the study.\nI understand that if I withdraw consent, the study researchers will no longer use or release information that identifies me in connection with the study unless it is needed to keep the scientific quality of the study. I understand that if I withdraw consent the study researchers may still use any study-related information about me that was collected before I withdrew consent.\nI have read and I understand the information provided in this Informed Consent Form. I have had the opportunity to ask questions and have had these questions answered satisfactorily.\nI have had time to consider the information provided in this Informed Consent Form to consider answers to my questions, and to consider whether I wish to take part in the study.\nIf you understand the statements above, and freely consent to participate in the study, press [Space] to begin the experiment.',
    font: 'Times New Roman',
    units: 'norm', 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'pix', 
    image : 'monash-logo-mono.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [150, 75],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "stim_response_instr"
  stim_response_instrClock = new util.Clock();
  movie_2Clock = new util.Clock();
  movie_2 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie_2',
    units: undefined,
    movie: 'exampletrial.mp4',
    pos: [0, 150],
    size: [600, 400],
    ori: 0,
    opacity: 1,
    loop: true,
    noAudio: false,
    });
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  space_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_14',
    text: 'Press SPACE to continue ',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.7)], height: 0.05,  wrapWidth: 1000, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -2.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Throughout the experiment, focus on the cross at the centre of the screen.\nA circle will flash out quickly on the screen.\n\nSometimes you will need to decide the similarity levels of the previous circle to a circle on the next screen.\n\n0 => most similar colour (least different colour)\n7 => most different colour (least similar colour)\n\nAfter choosing, move your cursor back to the centre and click and hold the box to continue.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: 1000, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "catch_insrt"
  catch_insrtClock = new util.Clock();
  space_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_15',
    text: 'Press SPACE to continue ',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  movie_3Clock = new util.Clock();
  movie_3 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie_3',
    units: undefined,
    movie: 'catchvideo.mp4',
    pos: [0, 100],
    size: [600, 400],
    ori: 0,
    opacity: 1,
    loop: true,
    noAudio: false,
    });
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'Sometimes there will be a special trial where you will just be asked to click on a particular value.\nPlease click and hold the value for that trial.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.5)], height: 0.06,  wrapWidth: 1000, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "colour_circle_instr_2"
  colour_circle_instr_2Clock = new util.Clock();
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  space_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_9',
    text: 'Press SPACE to continue ',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -1.0 
  });
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'During the test, you will see some of these colours displayed below.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -2.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : '93colours.png', mask : undefined,
    ori : 0, pos : [(- 50), 100], size : [600, 400],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "instr_prac"
  instr_pracClock = new util.Clock();
  space_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_10',
    text: 'Press SPACE to continue ',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: 0.0 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'You are going to do a few practice trials to make you be more familiar with the experiment.\nWhen you are ready, please press SPACE to start the practice trials',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.06,  wrapWidth: 1000, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Stim1_display_prac"
  Stim1_display_pracClock = new util.Clock();
  Circle = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle', units : 'pix', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  centre_cross4_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'centre_cross4_2', units : 'norm', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "Stim2_display_prac"
  Stim2_display_pracClock = new util.Clock();
  Circle_4 = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle_4', units : 'pix', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  centre_cross4_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'centre_cross4_3', units : 'norm', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "response_prac"
  response_pracClock = new util.Clock();
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  a = ((window.innerWidth / 2) * 0.1);
  b = ((window.innerWidth / 2) * 0.158);
  response1disk_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk_5', units : 'pix', 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response3disk_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk_5', units : 'pix', 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [a, (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response5disk_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk_5', units : 'pix', 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  response7disk_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk_5', units : 'pix', 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [(- a), a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: 'Please choose the similarity level of the two previously cued circles.\nPlease click and hold to indicate your choice.\n0 => Most similar\n7 => Most different \n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "responseprac_feedback"
  responseprac_feedbackClock = new util.Clock();
  text_55 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_55',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1000, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_56 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_56',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: 1000, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "summary_prac"
  summary_pracClock = new util.Clock();
  mouse_10 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_10.mouseClock = new util.Clock();
  response1disk_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk_10', units : 'pix', 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  response3disk_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk_10', units : 'pix', 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [a, (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response5disk_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk_10', units : 'pix', 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response7disk_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk_10', units : 'pix', 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [(- a), a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  rectangle_8 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_8', units : 'norm', 
    width: [0.1, 0.08][0], height: [0.1, 0.08][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  pracnumber = 0;
  
  text_49 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_49',
    text: 'Please click and hold on the grey rectangle in the middle of the response numbers to continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.5)], height: 0.05,  wrapWidth: 1000, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  text_50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_50',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "special_trial_prac"
  special_trial_pracClock = new util.Clock();
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: 'SPECIAL TRIAL',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "catch_prac"
  catch_pracClock = new util.Clock();
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  response1disk_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk_7', units : 'pix', 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  response3disk_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk_7', units : 'pix', 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [a, (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response5disk_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk_7', units : 'pix', 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response7disk_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk_7', units : 'pix', 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [(- a), a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  
  
  catchtrialorderprac = Array.from({length: 2}, () => Math.floor(Math.random() * 7));
  
  catchnumberprac = (Math.floor((Math.random() * ((7 - 0) + 1))) + 0);
  
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  rectangle_5 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_5', units : 'norm', 
    width: [0.1, 0.08][0], height: [0.1, 0.08][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "summary2_prac"
  summary2_pracClock = new util.Clock();
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  response1disk_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk_6', units : 'pix', 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  response3disk_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk_6', units : 'pix', 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response5disk_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk_6', units : 'pix', 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response7disk_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk_6', units : 'pix', 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  rectangle_4 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_4', units : 'norm', 
    width: [0.1, 0.08][0], height: [0.1, 0.08][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  pracnumber = 0;
  
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: 'Please click and hold the grey rectangle in the middle of the response numbers to continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.7)], height: 0.05,  wrapWidth: 1000, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  space_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_19',
    text: 'Press SPACE to continue ',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: 0.0 
  });
  
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: 'You have finished the practice trial.\n\nNext page will be the formal test. \n\nIf you are ready, please press SPACE button to start the experiment.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.08,  wrapWidth: 1000, ori: 0,
    color: new util.Color('yellow'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "LoopCounter"
  LoopCounterClock = new util.Clock();
  LoopCounter = 0;
  
  // Initialize components for Routine "Stim1_display"
  Stim1_displayClock = new util.Clock();
  Circle_1 = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle_1', units : 'pix', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  centre_cross4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'centre_cross4', units : 'norm', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "Stim2_display"
  Stim2_displayClock = new util.Clock();
  Circle_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle_2', units : 'pix', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  centre_cross4_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'centre_cross4_4', units : 'norm', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  order = randint(1, 100);
  
  response1disk = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk', units : undefined, 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response3disk = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk', units : undefined, 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [a, (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response5disk = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk', units : undefined, 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  response7disk = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk', units : undefined, 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [(- a), a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'Please choose the similarity level of the circle with the previously cued circle.\nPlease click and hold to indicate your choice.\n0 => Most similar\n7 => Most different ',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "response_2"
  response_2Clock = new util.Clock();
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  response1disk_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk_2', units : undefined, 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  response3disk_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk_2', units : undefined, 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [a, (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response5disk_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk_2', units : undefined, 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response7disk_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk_2', units : undefined, 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [(- a), a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle', units : 'norm', 
    width: [0.1, 0.08][0], height: [0.1, 0.08][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  trialnumber = 0;
  grey = [0.2, 0.2, 0.2];
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'Please click and hold the grey rectangle in the middle of the response numbers to continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.5)], height: 0.05,  wrapWidth: 1000, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "special_trial"
  special_trialClock = new util.Clock();
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: 'SPECIAL TRIAL',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "catch_1"
  catch_1Clock = new util.Clock();
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  response1disk_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk_3', units : undefined, 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  response3disk_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk_3', units : undefined, 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [a, (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response5disk_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk_3', units : undefined, 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response7disk_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk_3', units : undefined, 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [(- a), a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  // Set up catch trials
  
  //catchtrialorder = Array.from({length: 20}, () => Math.floor(Math.random() * 324));
  
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  rectangle_2 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_2', units : 'norm', 
    width: [0.1, 0.08][0], height: [0.1, 0.08][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color(grey),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "response_sum"
  response_sumClock = new util.Clock();
  mouse_11 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_11.mouseClock = new util.Clock();
  response1disk_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response1disk_11', units : undefined, 
    image : 'response67.png', mask : undefined,
    ori : 0, pos : [a, a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  response3disk_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response3disk_11', units : undefined, 
    image : 'response45.png', mask : undefined,
    ori : 0, pos : [a, (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  response5disk_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response5disk_11', units : undefined, 
    image : 'response23.png', mask : undefined,
    ori : 0, pos : [(- a), (- a)], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  response7disk_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'response7disk_11', units : undefined, 
    image : 'response01.png', mask : undefined,
    ori : 0, pos : [(- a), a], size : [b, b],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  rectangle_9 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_9', units : 'norm', 
    width: [0.1, 0.08][0], height: [0.1, 0.08][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  trialnumber = 0;
  
  text_51 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_51',
    text: 'Please click and hold the grey rectangle in the middle of the response numbers to continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.5)], height: 0.05,  wrapWidth: 1000, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  text_52 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_52',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.7)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "survey1"
  survey1Clock = new util.Clock();
  copyText_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText_1',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.05), 0.1], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  question_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_4',
    text: 'Please answer the next 7 questions to finish the experiment. Please type your reponse and press <ENTER> to submit,\n\n1. Did you have any difficulty in seeing the location of the two circles on each trial? (y or n)\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  submitanswer = new visual.TextStim({
    win: psychoJS.window,
    name: 'submitanswer',
    text: 'Press enter to submit your answer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.08,  wrapWidth: 3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "survey2"
  survey2Clock = new util.Clock();
  copyText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText_2',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.05), 0.1], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  question = new visual.TextStim({
    win: psychoJS.window,
    name: 'question',
    text: '2. Did you have any difficulty in knowing what colour the central circles were? (y or n)\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  submitanswer_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submitanswer_2',
    text: 'Press enter to submit your answer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.08,  wrapWidth: 3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "survey3"
  survey3Clock = new util.Clock();
  copyText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText_3',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.05), 0.1], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  question_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_2',
    text: '3. Did you have any difficulty in knowing what colour the peripheral circles were? (y or n)\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  submitanswer_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submitanswer_3',
    text: 'Press enter to submit your answer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.08,  wrapWidth: 3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "survey_4"
  survey_4Clock = new util.Clock();
  copyText_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText_4',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.05), 0.1], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  question_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_3',
    text: '4. Do you have normal visual acuity, or corrected-to-normal wearing glasses or contact lenses? (y or n)',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  submitanswer_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submitanswer_4',
    text: 'Press enter to submit your answer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.08,  wrapWidth: 3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "survey5"
  survey5Clock = new util.Clock();
  copyText_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText_5',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.05), 0.1], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  question_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_5',
    text: "5. Do you have any colour vision impairment? (y or n)\nIf yes, please describe the type (e.g) 'red-green colour blind'). ",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  submitanswer_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submitanswer_5',
    text: 'Press enter to submit your answer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.08,  wrapWidth: 3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "survey6"
  survey6Clock = new util.Clock();
  copyText_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText_6',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.05), 0.1], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  question_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_6',
    text: "6. Did you base your judgements on any of the following stratergies? \n- colour catergories (e.g 'red','blue','green')\n- colour opponecy axes (e.g 'red to green', 'blue to yellow')\n- another stratergy \n- no particular stratergy\nPlease type which stratergy, and if you selected 'another stratergy' please describe it.\n",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  submitanswer_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submitanswer_6',
    text: 'Press enter to submit your answer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.08,  wrapWidth: 3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "survey7"
  survey7Clock = new util.Clock();
  copyText_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'copyText_7',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.05), 0.1], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  question_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_7',
    text: 'Please type any other comments you may have. \n\nYou have now finished the experiment. Thank you for your participation!',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  submitanswer_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submitanswer_7',
    text: 'Press enter to submit your answer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.08,  wrapWidth: 3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var startupComponents;
function startupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'startup'-------
    t = 0;
    startupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    startupComponents = [];
    
    startupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function startupRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'startup'-------
    // get current time
    t = startupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    startupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startupRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'startup'-------
    startupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "startup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'colourcodes.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(colourcodesRoutineBegin(snapshot));
    trialsLoopScheduler.add(colourcodesRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(colourcodesRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Stimpositions.xlsx',
    seed: undefined, name: 'trials_4'
  });
  psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
  currentLoop = trials_4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_4.forEach(function() {
    const snapshot = trials_4.getSnapshot();

    trials_4LoopScheduler.add(importConditions(snapshot));
    trials_4LoopScheduler.add(stimpositionsRoutineBegin(snapshot));
    trials_4LoopScheduler.add(stimpositionsRoutineEachFrame(snapshot));
    trials_4LoopScheduler.add(stimpositionsRoutineEnd(snapshot));
    trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


var duringprac;
function duringpracLoopBegin(duringpracLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  duringprac = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'duringprac'
  });
  psychoJS.experiment.addLoop(duringprac); // add the loop to the experiment
  currentLoop = duringprac;  // we're now the current loop

  // Schedule all the trials in the trialList:
  duringprac.forEach(function() {
    const snapshot = duringprac.getSnapshot();

    duringpracLoopScheduler.add(importConditions(snapshot));
    duringpracLoopScheduler.add(Stim1_display_pracRoutineBegin(snapshot));
    duringpracLoopScheduler.add(Stim1_display_pracRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(Stim1_display_pracRoutineEnd(snapshot));
    duringpracLoopScheduler.add(Stim2_display_pracRoutineBegin(snapshot));
    duringpracLoopScheduler.add(Stim2_display_pracRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(Stim2_display_pracRoutineEnd(snapshot));
    duringpracLoopScheduler.add(response_pracRoutineBegin(snapshot));
    duringpracLoopScheduler.add(response_pracRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(response_pracRoutineEnd(snapshot));
    duringpracLoopScheduler.add(responseprac_feedbackRoutineBegin(snapshot));
    duringpracLoopScheduler.add(responseprac_feedbackRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(responseprac_feedbackRoutineEnd(snapshot));
    duringpracLoopScheduler.add(summary_pracRoutineBegin(snapshot));
    duringpracLoopScheduler.add(summary_pracRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(summary_pracRoutineEnd(snapshot));
    duringpracLoopScheduler.add(special_trial_pracRoutineBegin(snapshot));
    duringpracLoopScheduler.add(special_trial_pracRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(special_trial_pracRoutineEnd(snapshot));
    duringpracLoopScheduler.add(catch_pracRoutineBegin(snapshot));
    duringpracLoopScheduler.add(catch_pracRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(catch_pracRoutineEnd(snapshot));
    duringpracLoopScheduler.add(summary2_pracRoutineBegin(snapshot));
    duringpracLoopScheduler.add(summary2_pracRoutineEachFrame(snapshot));
    duringpracLoopScheduler.add(summary2_pracRoutineEnd(snapshot));
    duringpracLoopScheduler.add(endLoopIteration(duringpracLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function duringpracLoopEnd() {
  psychoJS.experiment.removeLoop(duringprac);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_3'
  });
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
  currentLoop = trials_3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_3.forEach(function() {
    const snapshot = trials_3.getSnapshot();

    trials_3LoopScheduler.add(importConditions(snapshot));
    trials_3LoopScheduler.add(LoopCounterRoutineBegin(snapshot));
    trials_3LoopScheduler.add(LoopCounterRoutineEachFrame(snapshot));
    trials_3LoopScheduler.add(LoopCounterRoutineEnd(snapshot));
    const trials_2LoopScheduler = new Scheduler(psychoJS);
    trials_3LoopScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
    trials_3LoopScheduler.add(trials_2LoopScheduler);
    trials_3LoopScheduler.add(trials_2LoopEnd);
    trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Stimconditions.xlsx', '0:162'),
    seed: order, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_2.forEach(function() {
    const snapshot = trials_2.getSnapshot();

    trials_2LoopScheduler.add(importConditions(snapshot));
    trials_2LoopScheduler.add(Stim1_displayRoutineBegin(snapshot));
    trials_2LoopScheduler.add(Stim1_displayRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(Stim1_displayRoutineEnd(snapshot));
    trials_2LoopScheduler.add(Stim2_displayRoutineBegin(snapshot));
    trials_2LoopScheduler.add(Stim2_displayRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(Stim2_displayRoutineEnd(snapshot));
    trials_2LoopScheduler.add(responseRoutineBegin(snapshot));
    trials_2LoopScheduler.add(responseRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(responseRoutineEnd(snapshot));
    trials_2LoopScheduler.add(response_2RoutineBegin(snapshot));
    trials_2LoopScheduler.add(response_2RoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(response_2RoutineEnd(snapshot));
    trials_2LoopScheduler.add(special_trialRoutineBegin(snapshot));
    trials_2LoopScheduler.add(special_trialRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(special_trialRoutineEnd(snapshot));
    trials_2LoopScheduler.add(catch_1RoutineBegin(snapshot));
    trials_2LoopScheduler.add(catch_1RoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(catch_1RoutineEnd(snapshot));
    trials_2LoopScheduler.add(response_sumRoutineBegin(snapshot));
    trials_2LoopScheduler.add(response_sumRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(response_sumRoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var colourcodesComponents;
function colourcodesRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'colourcodes'-------
    t = 0;
    colourcodesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    colourcodesrgb.append(Colourcodes);
    colourcodesrgb[codenum][0] = ((colourcodesrgb[codenum][0] / 50) - 1);
    colourcodesrgb[codenum][1] = ((colourcodesrgb[codenum][1] / 50) - 1);
    colourcodesrgb[codenum][2] = ((colourcodesrgb[codenum][2] / 50) - 1);
    codenum = (codenum + 1);
    console.log(colourcodesrgb[codenum]);
    console.log(colourcodesrgb);
    
    // keep track of which components have finished
    colourcodesComponents = [];
    
    colourcodesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function colourcodesRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'colourcodes'-------
    // get current time
    t = colourcodesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    colourcodesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function colourcodesRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'colourcodes'-------
    colourcodesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "colourcodes" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimpositionsComponents;
function stimpositionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'stimpositions'-------
    t = 0;
    stimpositionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stimpositions.append(StimulusPos);
    console.log(stimpositions);
    
    // keep track of which components have finished
    stimpositionsComponents = [];
    
    stimpositionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimpositionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'stimpositions'-------
    // get current time
    t = stimpositionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stimpositionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimpositionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'stimpositions'-------
    stimpositionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "stimpositions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var welcome_instrComponents;
function welcome_instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'welcome_instr'-------
    t = 0;
    welcome_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    welcome_instrComponents = [];
    welcome_instrComponents.push(text_54);
    welcome_instrComponents.push(welcome);
    welcome_instrComponents.push(key_resp);
    welcome_instrComponents.push(space);
    
    welcome_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'welcome_instr'-------
    // get current time
    t = welcome_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_54* updates
    if (t >= 0.0 && text_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_54.tStart = t;  // (not accounting for frame time here)
      text_54.frameNStart = frameN;  // exact frame index
      
      text_54.setAutoDraw(true);
    }

    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 2 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *space* updates
    if (t >= 2 && space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space.tStart = t;  // (not accounting for frame time here)
      space.frameNStart = frameN;  // exact frame index
      
      space.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'welcome_instr'-------
    welcome_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "welcome_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var posx;
var posy;
var _key_resp_16_allKeys;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent'-------
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    posx = ((window.innerWidth / 2) * 0.8);
    posy = ((window.innerHeight / 2) * 0.8);
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    image.setPos([(- posx), posy]);
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(text_53);
    consentComponents.push(key_resp_16);
    consentComponents.push(image);
    
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent'-------
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_53* updates
    if (t >= 0.0 && text_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_53.tStart = t;  // (not accounting for frame time here)
      text_53.frameNStart = frameN;  // exact frame index
      
      text_53.setAutoDraw(true);
    }

    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }

    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent'-------
    consentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_15_allKeys;
var stim_response_instrComponents;
function stim_response_instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'stim_response_instr'-------
    t = 0;
    stim_response_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    stim_response_instrComponents = [];
    stim_response_instrComponents.push(movie_2);
    stim_response_instrComponents.push(key_resp_15);
    stim_response_instrComponents.push(space_14);
    stim_response_instrComponents.push(text_17);
    
    stim_response_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stim_response_instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'stim_response_instr'-------
    // get current time
    t = stim_response_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_2* updates
    if (t >= 0.0 && movie_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_2.tStart = t;  // (not accounting for frame time here)
      movie_2.frameNStart = frameN;  // exact frame index
      
      movie_2.setAutoDraw(true);
      movie_2.play();
    }

    
    // *key_resp_15* updates
    if (t >= 2 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *space_14* updates
    if (t >= 2 && space_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_14.tStart = t;  // (not accounting for frame time here)
      space_14.frameNStart = frameN;  // exact frame index
      
      space_14.setAutoDraw(true);
    }

    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stim_response_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stim_response_instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'stim_response_instr'-------
    stim_response_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    movie_2.stop();
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "stim_response_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_17_allKeys;
var catch_insrtComponents;
function catch_insrtRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'catch_insrt'-------
    t = 0;
    catch_insrtClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    // keep track of which components have finished
    catch_insrtComponents = [];
    catch_insrtComponents.push(space_15);
    catch_insrtComponents.push(key_resp_17);
    catch_insrtComponents.push(movie_3);
    catch_insrtComponents.push(text_18);
    
    catch_insrtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function catch_insrtRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'catch_insrt'-------
    // get current time
    t = catch_insrtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_15* updates
    if (t >= 2 && space_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_15.tStart = t;  // (not accounting for frame time here)
      space_15.frameNStart = frameN;  // exact frame index
      
      space_15.setAutoDraw(true);
    }

    
    // *key_resp_17* updates
    if (t >= 2 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
    }

    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *movie_3* updates
    if (t >= 0.0 && movie_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_3.tStart = t;  // (not accounting for frame time here)
      movie_3.frameNStart = frameN;  // exact frame index
      
      movie_3.setAutoDraw(true);
      movie_3.play();
    }

    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    catch_insrtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catch_insrtRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'catch_insrt'-------
    catch_insrtComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
    if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
        routineTimer.reset();
        }
    
    key_resp_17.stop();
    movie_3.stop();
    // the Routine "catch_insrt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var colour_circle_instr_2Components;
function colour_circle_instr_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'colour_circle_instr_2'-------
    t = 0;
    colour_circle_instr_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    colour_circle_instr_2Components = [];
    colour_circle_instr_2Components.push(key_resp_9);
    colour_circle_instr_2Components.push(space_9);
    colour_circle_instr_2Components.push(text_9);
    colour_circle_instr_2Components.push(image_2);
    
    colour_circle_instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function colour_circle_instr_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'colour_circle_instr_2'-------
    // get current time
    t = colour_circle_instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_9* updates
    if (t >= 2 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *space_9* updates
    if (t >= 2 && space_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_9.tStart = t;  // (not accounting for frame time here)
      space_9.frameNStart = frameN;  // exact frame index
      
      space_9.setAutoDraw(true);
    }

    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    colour_circle_instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function colour_circle_instr_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'colour_circle_instr_2'-------
    colour_circle_instr_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "colour_circle_instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var instr_pracComponents;
function instr_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_prac'-------
    t = 0;
    instr_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    instr_pracComponents = [];
    instr_pracComponents.push(space_10);
    instr_pracComponents.push(text_10);
    instr_pracComponents.push(key_resp_10);
    
    instr_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_prac'-------
    // get current time
    t = instr_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_10* updates
    if (t >= 2 && space_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_10.tStart = t;  // (not accounting for frame time here)
      space_10.frameNStart = frameN;  // exact frame index
      
      space_10.setAutoDraw(true);
    }

    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_prac'-------
    instr_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "instr_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Ecc;
var circle1posx;
var circle1posy;
var Circle1_col;
var Stim1_display_pracComponents;
function Stim1_display_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Stim1_display_prac'-------
    t = 0;
    Stim1_display_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    Ecc = stimpositions[randint(0, 92)];
    console.log(Ecc);
    if ((Ecc === "onetwo")) {
        circle1posx = (- 100);
        circle1posy = 100;
    }
    if ((Ecc === "onethree")) {
        circle1posx = (- 100);
        circle1posy = 100;
    }
    if ((Ecc === "twoone")) {
        circle1posx = 100;
        circle1posy = 100;
    }
    if ((Ecc === "twofour")) {
        circle1posx = 100;
        circle1posy = 100;
    }
    if ((Ecc === "threeone")) {
        circle1posx = (- 100);
        circle1posy = (- 100);
    }
    if ((Ecc === "threefour")) {
        circle1posx = (- 100);
        circle1posy = (- 100);
    }
    if ((Ecc === "fourtwo")) {
        circle1posx = 100;
        circle1posy = (- 100);
    }
    if ((Ecc === "fourthree")) {
        circle1posx = 100;
        circle1posy = (- 100);
    }
    Circle1_col = colourcodesrgb[randint(0, 92)];
    
    Circle.setPos([circle1posx, circle1posy]);
    Circle.setSize([100, 100]);
    Circle.setFillColor(new util.Color(Circle1_col));
    Circle.setLineColor(new util.Color(Circle1_col));
    // keep track of which components have finished
    Stim1_display_pracComponents = [];
    Stim1_display_pracComponents.push(Circle);
    Stim1_display_pracComponents.push(centre_cross4_2);
    
    Stim1_display_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Stim1_display_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Stim1_display_prac'-------
    // get current time
    t = Stim1_display_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Circle* updates
    if (t >= 0.25 && Circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Circle.tStart = t;  // (not accounting for frame time here)
      Circle.frameNStart = frameN;  // exact frame index
      
      Circle.setAutoDraw(true);
    }

    frameRemains = 0.25 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Circle.status === PsychoJS.Status.STARTED || Circle.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Circle.setAutoDraw(false);
    }
    
    // *centre_cross4_2* updates
    if (t >= 0 && centre_cross4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centre_cross4_2.tStart = t;  // (not accounting for frame time here)
      centre_cross4_2.frameNStart = frameN;  // exact frame index
      
      centre_cross4_2.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((centre_cross4_2.status === PsychoJS.Status.STARTED || centre_cross4_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      centre_cross4_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Stim1_display_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Stim1_display_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Stim1_display_prac'-------
    Stim1_display_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("Circle1_col", Circle1_col);
    thisExp.addData("Ecc", Ecc);
    
    return Scheduler.Event.NEXT;
  };
}


var Circle2_col;
var Stim2_display_pracComponents;
function Stim2_display_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Stim2_display_prac'-------
    t = 0;
    Stim2_display_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    if ((Ecc === "onetwo")) {
        circle1posx = 100;
        circle1posy = 100;
    }
    if ((Ecc === "onethree")) {
        circle1posx = (- 100);
        circle1posy = (- 100);
    }
    if ((Ecc === "twoone")) {
        circle1posx = (- 100);
        circle1posy = 100;
    }
    if ((Ecc === "twofour")) {
        circle1posx = 100;
        circle1posy = (- 100);
    }
    if ((Ecc === "threeone")) {
        circle1posx = (- 100);
        circle1posy = 100;
    }
    if ((Ecc === "threefour")) {
        circle1posx = 100;
        circle1posy = (- 100);
    }
    if ((Ecc === "fourtwo")) {
        circle1posx = 100;
        circle1posy = 100;
    }
    if ((Ecc === "fourthree")) {
        circle1posx = (- 100);
        circle1posy = (- 100);
    }
    Circle2_col = colourcodesrgb[randint(0, 92)];
    
    Circle_4.setPos([circle1posx, circle1posy]);
    Circle_4.setSize([100, 100]);
    Circle_4.setFillColor(new util.Color(Circle2_col));
    Circle_4.setLineColor(new util.Color(Circle2_col));
    // keep track of which components have finished
    Stim2_display_pracComponents = [];
    Stim2_display_pracComponents.push(Circle_4);
    Stim2_display_pracComponents.push(centre_cross4_3);
    
    Stim2_display_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Stim2_display_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Stim2_display_prac'-------
    // get current time
    t = Stim2_display_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Circle_4* updates
    if (t >= 0.25 && Circle_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Circle_4.tStart = t;  // (not accounting for frame time here)
      Circle_4.frameNStart = frameN;  // exact frame index
      
      Circle_4.setAutoDraw(true);
    }

    frameRemains = 0.25 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Circle_4.status === PsychoJS.Status.STARTED || Circle_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Circle_4.setAutoDraw(false);
    }
    
    // *centre_cross4_3* updates
    if (t >= 0 && centre_cross4_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centre_cross4_3.tStart = t;  // (not accounting for frame time here)
      centre_cross4_3.frameNStart = frameN;  // exact frame index
      
      centre_cross4_3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((centre_cross4_3.status === PsychoJS.Status.STARTED || centre_cross4_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      centre_cross4_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Stim2_display_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Stim2_display_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Stim2_display_prac'-------
    Stim2_display_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("Circle2_col", Circle2_col);
    thisExp.addData("Ecc", Ecc);
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var Colour_2;
var response_pracComponents;
function response_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'response_prac'-------
    t = 0;
    response_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_5
    mouse_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    event.clearEvents();
    pracnumber = (pracnumber + 1);
    Colour_2 = (Math.floor((Math.random() * ((9 - 1) + 1))) + 1);
    if ((Colour_2 === 1)) {
        Circle2_col = [1, (- 1), (- 1)];
    } else {
        if ((Colour_2 === 2)) {
            Circle2_col = [1, 0.33, (- 1)];
        } else {
            if ((Colour_2 === 3)) {
                Circle2_col = [0.32, 1, (- 1)];
            } else {
                if ((Colour_2 === 4)) {
                    Circle2_col = [(- 1), 1, (- 1)];
                } else {
                    if ((Colour_2 === 5)) {
                        Circle2_col = [(- 1), 1, 0.33];
                    } else {
                        if ((Colour_2 === 6)) {
                            Circle2_col = [(- 1), 0.32, 1];
                        } else {
                            if ((Colour_2 === 7)) {
                                Circle2_col = [(- 1), (- 1), 1];
                            } else {
                                if ((Colour_2 === 8)) {
                                    Circle2_col = [0.33, (- 1), 1];
                                } else {
                                    if ((Colour_2 === 9)) {
                                        Circle2_col = [1, (- 1), 0.33];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    response_pracComponents = [];
    response_pracComponents.push(mouse_5);
    response_pracComponents.push(response1disk_5);
    response_pracComponents.push(response3disk_5);
    response_pracComponents.push(response5disk_5);
    response_pracComponents.push(response7disk_5);
    response_pracComponents.push(text_29);
    
    response_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var mousexpos;
var mouseypos;
var x11d;
var y11d;
var x12d;
var y12d;
var x13d;
var y13d;
var a1d;
var b1d;
var c1d;
var x21d;
var y21d;
var x22d;
var y22d;
var x23d;
var y23d;
var a2d;
var b2d;
var c2d;
var x31d;
var y31d;
var x32d;
var y32d;
var x33d;
var y33d;
var a3d;
var b3d;
var c3d;
var x41d;
var y41d;
var x42d;
var y42d;
var x43d;
var y43d;
var a4d;
var b4d;
var c4d;
var x51d;
var y51d;
var x52d;
var y52d;
var x53d;
var y53d;
var a5d;
var b5d;
var c5d;
var x61d;
var y61d;
var x62d;
var y62d;
var x63d;
var y63d;
var a6d;
var b6d;
var c6d;
var x71d;
var y71d;
var x72d;
var y72d;
var x73d;
var y73d;
var a7d;
var b7d;
var c7d;
var x81d;
var y81d;
var x82d;
var y82d;
var x83d;
var y83d;
var a8d;
var b8d;
var c8d;
var similarity;
var responsenumber;
function response_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'response_prac'-------
    // get current time
    t = response_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_5* updates
    if (t >= 0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [response1disk_5,response3disk_5,response5disk_5,response7disk_5,]) {
            if (obj.contains(mouse_5)) {
              gotValidClick = true;
              mouse_5.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    mousexpos = mouse.getPos()[0];
    mouseypos = mouse.getPos()[1];
    x11d = (a - (b / 2));
    y11d = (a + (b / 2));
    x12d = (a + (b / 2));
    y12d = (a + (b / 2));
    x13d = (a - (b / 2));
    y13d = (a - (b / 2));
    a1d = ((((y12d - y13d) * (mousexpos - x13d)) + ((x13d - x12d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    b1d = ((((y13d - y11d) * (mousexpos - x13d)) + ((x11d - x13d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    c1d = ((1 - a1d) - b1d);
    x21d = (a - (b / 2));
    y21d = (a - (b / 2));
    x22d = (a + (b / 2));
    y22d = (a + (b / 2));
    x23d = (a + (b / 2));
    y23d = (a - (b / 2));
    a2d = ((((y22d - y23d) * (mousexpos - x23d)) + ((x23d - x22d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    b2d = ((((y23d - y21d) * (mousexpos - x23d)) + ((x21d - x23d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    c2d = ((1 - a2d) - b2d);
    x31d = (a - (b / 2));
    y31d = (- (a - (b / 2)));
    x32d = (a + (b / 2));
    y32d = (- (a - (b / 2)));
    x33d = (a + (b / 2));
    y33d = (- (a + (b / 2)));
    a3d = ((((y32d - y33d) * (mousexpos - x33d)) + ((x33d - x32d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    b3d = ((((y33d - y31d) * (mousexpos - x33d)) + ((x31d - x33d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    c3d = ((1 - a3d) - b3d);
    x41d = (a - (b / 2));
    y41d = (- (a - (b / 2)));
    x42d = (a + (b / 2));
    y42d = (- (a + (b / 2)));
    x43d = (a - (b / 2));
    y43d = (- (a + (b / 2)));
    a4d = ((((y42d - y43d) * (mousexpos - x43d)) + ((x43d - x42d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    b4d = ((((y43d - y41d) * (mousexpos - x43d)) + ((x41d - x43d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    c4d = ((1 - a4d) - b4d);
    x51d = (- (a + (b / 2)));
    y51d = (- (a + (b / 2)));
    x52d = (- (a - (b / 2)));
    y52d = (- (a - (b / 2)));
    x53d = (- (a - (b / 2)));
    y53d = (- (a + (b / 2)));
    a5d = ((((y52d - y53d) * (mousexpos - x53d)) + ((x53d - x52d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    b5d = ((((y53d - y51d) * (mousexpos - x53d)) + ((x51d - x53d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    c5d = ((1 - a5d) - b5d);
    x61d = (- (a + (b / 2)));
    y61d = (- (a - (b / 2)));
    x62d = (- (a - (b / 2)));
    y62d = (- (a - (b / 2)));
    x63d = (- (a + (b / 2)));
    y63d = (- (a + (b / 2)));
    a6d = ((((y62d - y63d) * (mousexpos - x63d)) + ((x63d - x62d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    b6d = ((((y63d - y61d) * (mousexpos - x63d)) + ((x61d - x63d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    c6d = ((1 - a6d) - b6d);
    x71d = (- (a + (b / 2)));
    y71d = (a + (b / 2));
    x72d = (- (a - (b / 2)));
    y72d = (a - (b / 2));
    x73d = (- (a + (b / 2)));
    y73d = (a - (b / 2));
    a7d = ((((y72d - y73d) * (mousexpos - x73d)) + ((x73d - x72d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    b7d = ((((y73d - y71d) * (mousexpos - x73d)) + ((x71d - x73d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    c7d = ((1 - a7d) - b7d);
    x81d = (- (a + (b / 2)));
    y81d = (a + (b / 2));
    x82d = (- (a - (b / 2)));
    y82d = (a + (b / 2));
    x83d = (- (a - (b / 2)));
    y83d = (a - (b / 2));
    a8d = ((((y82d - y83d) * (mousexpos - x83d)) + ((x83d - x82d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    b8d = ((((y83d - y81d) * (mousexpos - x83d)) + ((x81d - x83d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    c8d = ((1 - a8d) - b8d);
    if (((((0 <= a1d) && (a1d <= 1)) && ((0 <= b1d) && (b1d <= 1))) && ((0 <= c1d) && (c1d <= 1)))) {
        similarity = 7;
        responsenumber = 7;
    } else {
        if (((((0 <= a2d) && (a2d <= 1)) && ((0 <= b2d) && (b2d <= 1))) && ((0 <= c2d) && (c2d <= 1)))) {
            similarity = 6;
            responsenumber = 6;
        } else {
            if (((((0 <= a3d) && (a3d <= 1)) && ((0 <= b3d) && (b3d <= 1))) && ((0 <= c3d) && (c3d <= 1)))) {
                similarity = 5;
                responsenumber = 5;
            } else {
                if (((((0 <= a4d) && (a4d <= 1)) && ((0 <= b4d) && (b4d <= 1))) && ((0 <= c4d) && (c4d <= 1)))) {
                    similarity = 4;
                    responsenumber = 4;
                } else {
                    if (((((0 <= a5d) && (a5d <= 1)) && ((0 <= b5d) && (b5d <= 1))) && ((0 <= c5d) && (c5d <= 1)))) {
                        similarity = 3;
                        responsenumber = 3;
                    } else {
                        if (((((0 <= a6d) && (a6d <= 1)) && ((0 <= b6d) && (b6d <= 1))) && ((0 <= c6d) && (c6d <= 1)))) {
                            similarity = 2;
                            responsenumber = 2;
                        } else {
                            if (((((0 <= a7d) && (a7d <= 1)) && ((0 <= b7d) && (b7d <= 1))) && ((0 <= c7d) && (c7d <= 1)))) {
                                similarity = 1;
                                responsenumber = 1;
                            } else {
                                if (((((0 <= a8d) && (a8d <= 1)) && ((0 <= b8d) && (b8d <= 1))) && ((0 <= c8d) && (c8d <= 1)))) {
                                    similarity = 0;
                                    responsenumber = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    
    // *response1disk_5* updates
    if (t >= 0.0 && response1disk_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk_5.tStart = t;  // (not accounting for frame time here)
      response1disk_5.frameNStart = frameN;  // exact frame index
      
      response1disk_5.setAutoDraw(true);
    }

    
    // *response3disk_5* updates
    if (t >= 0.0 && response3disk_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk_5.tStart = t;  // (not accounting for frame time here)
      response3disk_5.frameNStart = frameN;  // exact frame index
      
      response3disk_5.setAutoDraw(true);
    }

    
    // *response5disk_5* updates
    if (t >= 0.0 && response5disk_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk_5.tStart = t;  // (not accounting for frame time here)
      response5disk_5.frameNStart = frameN;  // exact frame index
      
      response5disk_5.setAutoDraw(true);
    }

    
    // *response7disk_5* updates
    if (t >= 0.0 && response7disk_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk_5.tStart = t;  // (not accounting for frame time here)
      response7disk_5.frameNStart = frameN;  // exact frame index
      
      response7disk_5.setAutoDraw(true);
    }

    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function response_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'response_prac'-------
    response_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_5.getPos();
    _mouseButtons = mouse_5.getPressed();
    psychoJS.experiment.addData('mouse_5.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_5.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_5.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_5.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_5.rightButton', _mouseButtons[2]);
    if (mouse_5.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_5.clicked_name', mouse_5.clicked_name[0]);}
    mousexpos = mouse.getPos()[0];
    mouseypos = mouse.getPos()[1];
    x11d = (a - (b / 2));
    y11d = (a + (b / 2));
    x12d = (a + (b / 2));
    y12d = (a + (b / 2));
    x13d = (a - (b / 2));
    y13d = (a - (b / 2));
    a1d = ((((y12d - y13d) * (mousexpos - x13d)) + ((x13d - x12d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    b1d = ((((y13d - y11d) * (mousexpos - x13d)) + ((x11d - x13d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    c1d = ((1 - a1d) - b1d);
    x21d = (a - (b / 2));
    y21d = (a - (b / 2));
    x22d = (a + (b / 2));
    y22d = (a + (b / 2));
    x23d = (a + (b / 2));
    y23d = (a - (b / 2));
    a2d = ((((y22d - y23d) * (mousexpos - x23d)) + ((x23d - x22d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    b2d = ((((y23d - y21d) * (mousexpos - x23d)) + ((x21d - x23d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    c2d = ((1 - a2d) - b2d);
    x31d = (a - (b / 2));
    y31d = (- (a - (b / 2)));
    x32d = (a + (b / 2));
    y32d = (- (a - (b / 2)));
    x33d = (a + (b / 2));
    y33d = (- (a + (b / 2)));
    a3d = ((((y32d - y33d) * (mousexpos - x33d)) + ((x33d - x32d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    b3d = ((((y33d - y31d) * (mousexpos - x33d)) + ((x31d - x33d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    c3d = ((1 - a3d) - b3d);
    x41d = (a - (b / 2));
    y41d = (- (a - (b / 2)));
    x42d = (a + (b / 2));
    y42d = (- (a + (b / 2)));
    x43d = (a - (b / 2));
    y43d = (- (a + (b / 2)));
    a4d = ((((y42d - y43d) * (mousexpos - x43d)) + ((x43d - x42d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    b4d = ((((y43d - y41d) * (mousexpos - x43d)) + ((x41d - x43d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    c4d = ((1 - a4d) - b4d);
    x51d = (- (a + (b / 2)));
    y51d = (- (a + (b / 2)));
    x52d = (- (a - (b / 2)));
    y52d = (- (a - (b / 2)));
    x53d = (- (a - (b / 2)));
    y53d = (- (a + (b / 2)));
    a5d = ((((y52d - y53d) * (mousexpos - x53d)) + ((x53d - x52d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    b5d = ((((y53d - y51d) * (mousexpos - x53d)) + ((x51d - x53d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    c5d = ((1 - a5d) - b5d);
    x61d = (- (a + (b / 2)));
    y61d = (- (a - (b / 2)));
    x62d = (- (a - (b / 2)));
    y62d = (- (a - (b / 2)));
    x63d = (- (a + (b / 2)));
    y63d = (- (a + (b / 2)));
    a6d = ((((y62d - y63d) * (mousexpos - x63d)) + ((x63d - x62d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    b6d = ((((y63d - y61d) * (mousexpos - x63d)) + ((x61d - x63d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    c6d = ((1 - a6d) - b6d);
    x71d = (- (a + (b / 2)));
    y71d = (a + (b / 2));
    x72d = (- (a - (b / 2)));
    y72d = (a - (b / 2));
    x73d = (- (a + (b / 2)));
    y73d = (a - (b / 2));
    a7d = ((((y72d - y73d) * (mousexpos - x73d)) + ((x73d - x72d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    b7d = ((((y73d - y71d) * (mousexpos - x73d)) + ((x71d - x73d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    c7d = ((1 - a7d) - b7d);
    x81d = (- (a + (b / 2)));
    y81d = (a + (b / 2));
    x82d = (- (a - (b / 2)));
    y82d = (a + (b / 2));
    x83d = (- (a - (b / 2)));
    y83d = (a - (b / 2));
    a8d = ((((y82d - y83d) * (mousexpos - x83d)) + ((x83d - x82d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    b8d = ((((y83d - y81d) * (mousexpos - x83d)) + ((x81d - x83d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    c8d = ((1 - a8d) - b8d);
    if (((((0 <= a1d) && (a1d <= 1)) && ((0 <= b1d) && (b1d <= 1))) && ((0 <= c1d) && (c1d <= 1)))) {
        similarity = 7;
    } else {
        if (((((0 <= a2d) && (a2d <= 1)) && ((0 <= b2d) && (b2d <= 1))) && ((0 <= c2d) && (c2d <= 1)))) {
            similarity = 6;
        } else {
            if (((((0 <= a3d) && (a3d <= 1)) && ((0 <= b3d) && (b3d <= 1))) && ((0 <= c3d) && (c3d <= 1)))) {
                similarity = 5;
            } else {
                if (((((0 <= a4d) && (a4d <= 1)) && ((0 <= b4d) && (b4d <= 1))) && ((0 <= c4d) && (c4d <= 1)))) {
                    similarity = 4;
                } else {
                    if (((((0 <= a5d) && (a5d <= 1)) && ((0 <= b5d) && (b5d <= 1))) && ((0 <= c5d) && (c5d <= 1)))) {
                        similarity = 3;
                    } else {
                        if (((((0 <= a6d) && (a6d <= 1)) && ((0 <= b6d) && (b6d <= 1))) && ((0 <= c6d) && (c6d <= 1)))) {
                            similarity = 2;
                        } else {
                            if (((((0 <= a7d) && (a7d <= 1)) && ((0 <= b7d) && (b7d <= 1))) && ((0 <= c7d) && (c7d <= 1)))) {
                                similarity = 1;
                            } else {
                                if (((((0 <= a8d) && (a8d <= 1)) && ((0 <= b8d) && (b8d <= 1))) && ((0 <= c8d) && (c8d <= 1)))) {
                                    similarity = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    thisExp.addData("similarity", similarity);
    thisExp.addData("response_time", mouse_5.mouseClock.getTime());
    
    // the Routine "response_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var responsefeedback;
var responsefeedback1;
var responseprac_feedbackComponents;
function responseprac_feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'responseprac_feedback'-------
    t = 0;
    responseprac_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if (((0 <= responsenumber) && (responsenumber <= 1))) {
        responsefeedback = `You selected ${responsenumber}`;
        responsefeedback1 = `${responsenumber} indicates you found the colours very similar`;
    }
    if (((2 <= responsenumber) && (responsenumber <= 3))) {
        responsefeedback = `You selected ${responsenumber}`;
        responsefeedback1 = `${responsenumber} indicates you found the colours similar`;
    }
    if (((4 <= responsenumber) && (responsenumber <= 5))) {
        responsefeedback = `You selected ${responsenumber}`;
        responsefeedback1 = `${responsenumber} indicates you found the colours different`;
    }
    if (((6 <= responsenumber) && (responsenumber <= 7))) {
        responsefeedback = `You selected ${responsenumber}`;
        responsefeedback1 = `${responsenumber} indicates you found the colours very different`;
    }
    
    text_55.setText(responsefeedback);
    text_56.setText(responsefeedback1);
    // keep track of which components have finished
    responseprac_feedbackComponents = [];
    responseprac_feedbackComponents.push(text_55);
    responseprac_feedbackComponents.push(text_56);
    
    responseprac_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function responseprac_feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'responseprac_feedback'-------
    // get current time
    t = responseprac_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((0 <= responsenumber) && (responsenumber <= 3))) {
        responsefeedback = `You selected ${responsenumber} indicating you found the colours are similar`;
    }
    if (((4 <= responsenumber) && (responsenumber <= 7))) {
        responsefeedback = `You selected ${responsenumber} indicating you found the colours are dissimilar`;
    }
    
    
    // *text_55* updates
    if (t >= 0.0 && text_55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_55.tStart = t;  // (not accounting for frame time here)
      text_55.frameNStart = frameN;  // exact frame index
      
      text_55.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_55.status === PsychoJS.Status.STARTED || text_55.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_55.setAutoDraw(false);
    }
    
    // *text_56* updates
    if (t >= 0.0 && text_56.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_56.tStart = t;  // (not accounting for frame time here)
      text_56.frameNStart = frameN;  // exact frame index
      
      text_56.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_56.status === PsychoJS.Status.STARTED || text_56.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_56.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseprac_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseprac_feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'responseprac_feedback'-------
    responseprac_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var pracnumbertext;
var summary_pracComponents;
function summary_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'summary_prac'-------
    t = 0;
    summary_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_10
    mouse_10.clicked_name = [];
    gotValidClick = false; // until a click is received
    rectangle_8.setFillColor(new util.Color(grey));
    pracnumbertext = `You have finished ${pracnumber} of 7 practice questions`;
    event.clearEvents();
    
    text_50.setText(pracnumbertext);
    // keep track of which components have finished
    summary_pracComponents = [];
    summary_pracComponents.push(mouse_10);
    summary_pracComponents.push(response1disk_10);
    summary_pracComponents.push(response3disk_10);
    summary_pracComponents.push(response5disk_10);
    summary_pracComponents.push(response7disk_10);
    summary_pracComponents.push(rectangle_8);
    summary_pracComponents.push(text_49);
    summary_pracComponents.push(text_50);
    
    summary_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function summary_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'summary_prac'-------
    // get current time
    t = summary_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_10* updates
    if (t >= 0.0 && mouse_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_10.tStart = t;  // (not accounting for frame time here)
      mouse_10.frameNStart = frameN;  // exact frame index
      
      mouse_10.status = PsychoJS.Status.STARTED;
      mouse_10.mouseClock.reset();
      prevButtonState = mouse_10.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_10.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_10.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [rectangle_8]) {
            if (obj.contains(mouse_10)) {
              gotValidClick = true;
              mouse_10.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *response1disk_10* updates
    if (t >= 0.0 && response1disk_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk_10.tStart = t;  // (not accounting for frame time here)
      response1disk_10.frameNStart = frameN;  // exact frame index
      
      response1disk_10.setAutoDraw(true);
    }

    
    // *response3disk_10* updates
    if (t >= 0.0 && response3disk_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk_10.tStart = t;  // (not accounting for frame time here)
      response3disk_10.frameNStart = frameN;  // exact frame index
      
      response3disk_10.setAutoDraw(true);
    }

    
    // *response5disk_10* updates
    if (t >= 0.0 && response5disk_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk_10.tStart = t;  // (not accounting for frame time here)
      response5disk_10.frameNStart = frameN;  // exact frame index
      
      response5disk_10.setAutoDraw(true);
    }

    
    // *response7disk_10* updates
    if (t >= 0.0 && response7disk_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk_10.tStart = t;  // (not accounting for frame time here)
      response7disk_10.frameNStart = frameN;  // exact frame index
      
      response7disk_10.setAutoDraw(true);
    }

    
    // *rectangle_8* updates
    if (t >= 0.0 && rectangle_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_8.tStart = t;  // (not accounting for frame time here)
      rectangle_8.frameNStart = frameN;  // exact frame index
      
      rectangle_8.setAutoDraw(true);
    }

    
    // *text_49* updates
    if (t >= 0.0 && text_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_49.tStart = t;  // (not accounting for frame time here)
      text_49.frameNStart = frameN;  // exact frame index
      
      text_49.setAutoDraw(true);
    }

    
    // *text_50* updates
    if (t >= 0.0 && text_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_50.tStart = t;  // (not accounting for frame time here)
      text_50.frameNStart = frameN;  // exact frame index
      
      text_50.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    summary_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function summary_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'summary_prac'-------
    summary_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_10.getPos();
    _mouseButtons = mouse_10.getPressed();
    psychoJS.experiment.addData('mouse_10.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_10.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_10.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_10.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_10.rightButton', _mouseButtons[2]);
    if (mouse_10.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_10.clicked_name', mouse_10.clicked_name[0]);}
    // the Routine "summary_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var special_trial_pracComponents;
function special_trial_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'special_trial_prac'-------
    t = 0;
    special_trial_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.250000);
    // update component parameters for each repeat
    // keep track of which components have finished
    special_trial_pracComponents = [];
    special_trial_pracComponents.push(text_36);
    
    special_trial_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function special_trial_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'special_trial_prac'-------
    // get current time
    t = special_trial_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_36* updates
    if (t >= 0.0 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_36.status === PsychoJS.Status.STARTED || text_36.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_36.setAutoDraw(false);
    }
    if ((! ((pracnumber === catchtrialorderprac[0]) || (pracnumber === catchtrialorderprac[1])))) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    special_trial_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function special_trial_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'special_trial_prac'-------
    special_trial_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var catchtext;
var catch_pracComponents;
function catch_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'catch_prac'-------
    t = 0;
    catch_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_7
    mouse_7.clicked_name = [];
    gotValidClick = false; // until a click is received
    catchtext = `SPECIAL TRIAL PLEASE JUST CLICK AND HOLD ${catchnumberprac}`;
    event.clearEvents();
    
    text_32.setText(catchtext);
    rectangle_5.setFillColor(new util.Color(grey));
    // keep track of which components have finished
    catch_pracComponents = [];
    catch_pracComponents.push(mouse_7);
    catch_pracComponents.push(response1disk_7);
    catch_pracComponents.push(response3disk_7);
    catch_pracComponents.push(response5disk_7);
    catch_pracComponents.push(response7disk_7);
    catch_pracComponents.push(text_32);
    catch_pracComponents.push(rectangle_5);
    
    catch_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function catch_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'catch_prac'-------
    // get current time
    t = catch_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [response1disk_7,response3disk_7,response5disk_7,response7disk_7]) {
            if (obj.contains(mouse_7)) {
              gotValidClick = true;
              mouse_7.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *response1disk_7* updates
    if (t >= 0.0 && response1disk_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk_7.tStart = t;  // (not accounting for frame time here)
      response1disk_7.frameNStart = frameN;  // exact frame index
      
      response1disk_7.setAutoDraw(true);
    }

    
    // *response3disk_7* updates
    if (t >= 0.0 && response3disk_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk_7.tStart = t;  // (not accounting for frame time here)
      response3disk_7.frameNStart = frameN;  // exact frame index
      
      response3disk_7.setAutoDraw(true);
    }

    
    // *response5disk_7* updates
    if (t >= 0.0 && response5disk_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk_7.tStart = t;  // (not accounting for frame time here)
      response5disk_7.frameNStart = frameN;  // exact frame index
      
      response5disk_7.setAutoDraw(true);
    }

    
    // *response7disk_7* updates
    if (t >= 0.0 && response7disk_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk_7.tStart = t;  // (not accounting for frame time here)
      response7disk_7.frameNStart = frameN;  // exact frame index
      
      response7disk_7.setAutoDraw(true);
    }

    if ((! ((pracnumber === catchtrialorderprac[0]) || (pracnumber === catchtrialorderprac[1])))) {
        continueRoutine = false;
    }
    
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }

    
    // *rectangle_5* updates
    if (t >= 0.0 && rectangle_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_5.tStart = t;  // (not accounting for frame time here)
      rectangle_5.frameNStart = frameN;  // exact frame index
      
      rectangle_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    catch_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var catchprac;
function catch_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'catch_prac'-------
    catch_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_7.getPos();
    _mouseButtons = mouse_7.getPressed();
    psychoJS.experiment.addData('mouse_7.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_7.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_7.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_7.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_7.rightButton', _mouseButtons[2]);
    if (mouse_7.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_7.clicked_name', mouse_7.clicked_name[0]);}
    mousexpos = mouse.getPos()[0];
    mouseypos = mouse.getPos()[1];
    x11d = (a - (b / 2));
    y11d = (a + (b / 2));
    x12d = (a + (b / 2));
    y12d = (a + (b / 2));
    x13d = (a - (b / 2));
    y13d = (a - (b / 2));
    a1d = ((((y12d - y13d) * (mousexpos - x13d)) + ((x13d - x12d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    b1d = ((((y13d - y11d) * (mousexpos - x13d)) + ((x11d - x13d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    c1d = ((1 - a1d) - b1d);
    x21d = (a - (b / 2));
    y21d = (a - (b / 2));
    x22d = (a + (b / 2));
    y22d = (a + (b / 2));
    x23d = (a + (b / 2));
    y23d = (a - (b / 2));
    a2d = ((((y22d - y23d) * (mousexpos - x23d)) + ((x23d - x22d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    b2d = ((((y23d - y21d) * (mousexpos - x23d)) + ((x21d - x23d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    c2d = ((1 - a2d) - b2d);
    x31d = (a - (b / 2));
    y31d = (- (a - (b / 2)));
    x32d = (a + (b / 2));
    y32d = (- (a - (b / 2)));
    x33d = (a + (b / 2));
    y33d = (- (a + (b / 2)));
    a3d = ((((y32d - y33d) * (mousexpos - x33d)) + ((x33d - x32d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    b3d = ((((y33d - y31d) * (mousexpos - x33d)) + ((x31d - x33d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    c3d = ((1 - a3d) - b3d);
    x41d = (a - (b / 2));
    y41d = (- (a - (b / 2)));
    x42d = (a + (b / 2));
    y42d = (- (a + (b / 2)));
    x43d = (a - (b / 2));
    y43d = (- (a + (b / 2)));
    a4d = ((((y42d - y43d) * (mousexpos - x43d)) + ((x43d - x42d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    b4d = ((((y43d - y41d) * (mousexpos - x43d)) + ((x41d - x43d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    c4d = ((1 - a4d) - b4d);
    x51d = (- (a + (b / 2)));
    y51d = (- (a + (b / 2)));
    x52d = (- (a - (b / 2)));
    y52d = (- (a - (b / 2)));
    x53d = (- (a - (b / 2)));
    y53d = (- (a + (b / 2)));
    a5d = ((((y52d - y53d) * (mousexpos - x53d)) + ((x53d - x52d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    b5d = ((((y53d - y51d) * (mousexpos - x53d)) + ((x51d - x53d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    c5d = ((1 - a5d) - b5d);
    x61d = (- (a + (b / 2)));
    y61d = (- (a - (b / 2)));
    x62d = (- (a - (b / 2)));
    y62d = (- (a - (b / 2)));
    x63d = (- (a + (b / 2)));
    y63d = (- (a + (b / 2)));
    a6d = ((((y62d - y63d) * (mousexpos - x63d)) + ((x63d - x62d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    b6d = ((((y63d - y61d) * (mousexpos - x63d)) + ((x61d - x63d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    c6d = ((1 - a6d) - b6d);
    x71d = (- (a + (b / 2)));
    y71d = (a + (b / 2));
    x72d = (- (a - (b / 2)));
    y72d = (a - (b / 2));
    x73d = (- (a + (b / 2)));
    y73d = (a - (b / 2));
    a7d = ((((y72d - y73d) * (mousexpos - x73d)) + ((x73d - x72d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    b7d = ((((y73d - y71d) * (mousexpos - x73d)) + ((x71d - x73d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    c7d = ((1 - a7d) - b7d);
    x81d = (- (a + (b / 2)));
    y81d = (a + (b / 2));
    x82d = (- (a - (b / 2)));
    y82d = (a + (b / 2));
    x83d = (- (a - (b / 2)));
    y83d = (a - (b / 2));
    a8d = ((((y82d - y83d) * (mousexpos - x83d)) + ((x83d - x82d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    b8d = ((((y83d - y81d) * (mousexpos - x83d)) + ((x81d - x83d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    c8d = ((1 - a8d) - b8d);
    if (((((0 <= a1d) && (a1d <= 1)) && ((0 <= b1d) && (b1d <= 1))) && ((0 <= c1d) && (c1d <= 1)))) {
        catchprac = 7;
        thisExp.addData("catchprac", catchprac);
    } else {
        if (((((0 <= a2d) && (a2d <= 1)) && ((0 <= b2d) && (b2d <= 1))) && ((0 <= c2d) && (c2d <= 1)))) {
            catchprac = 6;
            thisExp.addData("catchprac", catchprac);
        } else {
            if (((((0 <= a3d) && (a3d <= 1)) && ((0 <= b3d) && (b3d <= 1))) && ((0 <= c3d) && (c3d <= 1)))) {
                catchprac = 5;
                thisExp.addData("catchprac", catchprac);
            } else {
                if (((((0 <= a4d) && (a4d <= 1)) && ((0 <= b4d) && (b4d <= 1))) && ((0 <= c4d) && (c4d <= 1)))) {
                    catchprac = 4;
                    thisExp.addData("catchprac", catchprac);
                } else {
                    if (((((0 <= a5d) && (a5d <= 1)) && ((0 <= b5d) && (b5d <= 1))) && ((0 <= c5d) && (c5d <= 1)))) {
                        catchprac = 3;
                        thisExp.addData("catchprac", catchprac);
                    } else {
                        if (((((0 <= a6d) && (a6d <= 1)) && ((0 <= b6d) && (b6d <= 1))) && ((0 <= c6d) && (c6d <= 1)))) {
                            catchprac = 2;
                            thisExp.addData("catchprac", catchprac);
                        } else {
                            if (((((0 <= a7d) && (a7d <= 1)) && ((0 <= b7d) && (b7d <= 1))) && ((0 <= c7d) && (c7d <= 1)))) {
                                catchprac = 1;
                                thisExp.addData("catchprac", catchprac);
                            } else {
                                if (((((0 <= a8d) && (a8d <= 1)) && ((0 <= b8d) && (b8d <= 1))) && ((0 <= c8d) && (c8d <= 1)))) {
                                    catchprac = 0;
                                    thisExp.addData("catchprac", catchprac);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    thisExp.addData("catchnumberprac", catchnumberprac);
    
    // the Routine "catch_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var summary2_pracComponents;
function summary2_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'summary2_prac'-------
    t = 0;
    summary2_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    response3disk_6.setPos([a, (- a)]);
    response3disk_6.setSize([b, b]);
    response7disk_6.setPos([(- a), a]);
    response7disk_6.setSize([b, b]);
    rectangle_4.setFillColor(new util.Color(grey));
    pracnumbertext = `You have finished ${pracnumber} of 7 practice questions`;
    event.clearEvents();
    if ((! ((pracnumber === catchtrialorderprac[0]) || (pracnumber === catchtrialorderprac[1])))) {
        continueRoutine = false;
    }
    
    text_31.setText(pracnumbertext);
    // keep track of which components have finished
    summary2_pracComponents = [];
    summary2_pracComponents.push(mouse_6);
    summary2_pracComponents.push(response1disk_6);
    summary2_pracComponents.push(response3disk_6);
    summary2_pracComponents.push(response5disk_6);
    summary2_pracComponents.push(response7disk_6);
    summary2_pracComponents.push(rectangle_4);
    summary2_pracComponents.push(text_30);
    summary2_pracComponents.push(text_31);
    
    summary2_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function summary2_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'summary2_prac'-------
    // get current time
    t = summary2_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [rectangle_4]) {
            if (obj.contains(mouse_6)) {
              gotValidClick = true;
              mouse_6.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *response1disk_6* updates
    if (t >= 0.0 && response1disk_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk_6.tStart = t;  // (not accounting for frame time here)
      response1disk_6.frameNStart = frameN;  // exact frame index
      
      response1disk_6.setAutoDraw(true);
    }

    
    // *response3disk_6* updates
    if (t >= 0.0 && response3disk_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk_6.tStart = t;  // (not accounting for frame time here)
      response3disk_6.frameNStart = frameN;  // exact frame index
      
      response3disk_6.setAutoDraw(true);
    }

    
    // *response5disk_6* updates
    if (t >= 0.0 && response5disk_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk_6.tStart = t;  // (not accounting for frame time here)
      response5disk_6.frameNStart = frameN;  // exact frame index
      
      response5disk_6.setAutoDraw(true);
    }

    
    // *response7disk_6* updates
    if (t >= 0.0 && response7disk_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk_6.tStart = t;  // (not accounting for frame time here)
      response7disk_6.frameNStart = frameN;  // exact frame index
      
      response7disk_6.setAutoDraw(true);
    }

    
    // *rectangle_4* updates
    if (t >= 0.0 && rectangle_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_4.tStart = t;  // (not accounting for frame time here)
      rectangle_4.frameNStart = frameN;  // exact frame index
      
      rectangle_4.setAutoDraw(true);
    }

    if ((! ((pracnumber === catchtrialorderprac[0]) || (pracnumber === catchtrialorderprac[1])))) {
        continueRoutine = false;
    }
    
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }

    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    summary2_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function summary2_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'summary2_prac'-------
    summary2_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_6.getPos();
    _mouseButtons = mouse_6.getPressed();
    psychoJS.experiment.addData('mouse_6.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_6.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_6.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_6.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_6.rightButton', _mouseButtons[2]);
    if (mouse_6.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_6.clicked_name', mouse_6.clicked_name[0]);}
    // the Routine "summary2_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_22_allKeys;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'begin'-------
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_22.keys = undefined;
    key_resp_22.rt = undefined;
    _key_resp_22_allKeys = [];
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(space_19);
    beginComponents.push(text_46);
    beginComponents.push(key_resp_22);
    
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_19* updates
    if (t >= 2 && space_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_19.tStart = t;  // (not accounting for frame time here)
      space_19.frameNStart = frameN;  // exact frame index
      
      space_19.setAutoDraw(true);
    }

    
    // *text_46* updates
    if (t >= 0.0 && text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_46.tStart = t;  // (not accounting for frame time here)
      text_46.frameNStart = frameN;  // exact frame index
      
      text_46.setAutoDraw(true);
    }

    
    // *key_resp_22* updates
    if (t >= 0.0 && key_resp_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_22.tStart = t;  // (not accounting for frame time here)
      key_resp_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.clearEvents(); });
    }

    if (key_resp_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_22.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_22_allKeys = _key_resp_22_allKeys.concat(theseKeys);
      if (_key_resp_22_allKeys.length > 0) {
        key_resp_22.keys = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].name;  // just the last key pressed
        key_resp_22.rt = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'begin'-------
    beginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_22.keys', key_resp_22.keys);
    if (typeof key_resp_22.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_22.rt', key_resp_22.rt);
        routineTimer.reset();
        }
    
    key_resp_22.stop();
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var LoopCounterComponents;
function LoopCounterRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'LoopCounter'-------
    t = 0;
    LoopCounterClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    LoopCounter = (LoopCounter + 1);
    
    // keep track of which components have finished
    LoopCounterComponents = [];
    
    LoopCounterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function LoopCounterRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'LoopCounter'-------
    // get current time
    t = LoopCounterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    LoopCounterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LoopCounterRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'LoopCounter'-------
    LoopCounterComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "LoopCounter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Circle1_colour;
var colourstrial;
var Stim1_displayComponents;
function Stim1_displayRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Stim1_display'-------
    t = 0;
    Stim1_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    Circle1_colour = [];
    colourstrial = colPairs[Colourpair];
    console.log(Colourpair);
    console.log(Temporder);
    console.log(Ecc);
    console.log(LoopCounter);
    if ((LoopCounter === 1)) {
        Ecc = stimpositions[trialnumber];
        if ((Ecc === "onetwo")) {
            circle1posx = (- 100);
            circle1posy = 100;
        }
        if ((Ecc === "onethree")) {
            circle1posx = (- 100);
            circle1posy = 100;
        }
        if ((Ecc === "twoone")) {
            circle1posx = 100;
            circle1posy = 100;
        }
        if ((Ecc === "twofour")) {
            circle1posx = 100;
            circle1posy = 100;
        }
        if ((Ecc === "threeone")) {
            circle1posx = (- 100);
            circle1posy = (- 100);
        }
        if ((Ecc === "threefour")) {
            circle1posx = (- 100);
            circle1posy = (- 100);
        }
        if ((Ecc === "fourtwo")) {
            circle1posx = 100;
            circle1posy = (- 100);
        }
        if ((Ecc === "fourthree")) {
            circle1posx = 100;
            circle1posy = (- 100);
        }
    }
    if ((LoopCounter === 2)) {
        Ecc = stimpositions[(trialnumber - 162)];
        if ((Ecc === "onetwo")) {
            circle1posx = (- 100);
            circle1posy = (- 100);
        }
        if ((Ecc === "onethree")) {
            circle1posx = (- 100);
            circle1posy = (- 100);
        }
        if ((Ecc === "twoone")) {
            circle1posx = 100;
            circle1posy = (- 100);
        }
        if ((Ecc === "twofour")) {
            circle1posx = 100;
            circle1posy = (- 100);
        }
        if ((Ecc === "threeone")) {
            circle1posx = (- 100);
            circle1posy = 100;
        }
        if ((Ecc === "threefour")) {
            circle1posx = (- 100);
            circle1posy = 100;
        }
        if ((Ecc === "fourtwo")) {
            circle1posx = 100;
            circle1posy = 100;
        }
        if ((Ecc === "fourthree")) {
            circle1posx = 100;
            circle1posy = 100;
        }
    }
    if ((Temporder === "first")) {
        Circle1_colour = colourcodesrgb[colourstrial[0]];
    }
    if ((Temporder === "second")) {
        Circle1_colour = colourcodesrgb[colourstrial[1]];
    }
    console.log(Colourpair);
    console.log(colourstrial);
    
    Circle_1.setPos([circle1posx, circle1posy]);
    Circle_1.setSize([100, 100]);
    Circle_1.setFillColor(new util.Color(Circle1_colour));
    Circle_1.setLineColor(new util.Color(Circle1_colour));
    // keep track of which components have finished
    Stim1_displayComponents = [];
    Stim1_displayComponents.push(Circle_1);
    Stim1_displayComponents.push(centre_cross4);
    
    Stim1_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Stim1_displayRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Stim1_display'-------
    // get current time
    t = Stim1_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Circle_1* updates
    if (t >= 0.25 && Circle_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Circle_1.tStart = t;  // (not accounting for frame time here)
      Circle_1.frameNStart = frameN;  // exact frame index
      
      Circle_1.setAutoDraw(true);
    }

    frameRemains = 0.25 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Circle_1.status === PsychoJS.Status.STARTED || Circle_1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Circle_1.setAutoDraw(false);
    }
    
    // *centre_cross4* updates
    if (t >= 0 && centre_cross4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centre_cross4.tStart = t;  // (not accounting for frame time here)
      centre_cross4.frameNStart = frameN;  // exact frame index
      
      centre_cross4.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((centre_cross4.status === PsychoJS.Status.STARTED || centre_cross4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      centre_cross4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Stim1_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Stim1_displayRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Stim1_display'-------
    Stim1_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("Circle1_colour", Circle1_colour);
    thisExp.addData("Ecc", Ecc);
    
    return Scheduler.Event.NEXT;
  };
}


var Circle2_colour;
var circle2posx;
var circle2posy;
var Stim2_displayComponents;
function Stim2_displayRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Stim2_display'-------
    t = 0;
    Stim2_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    Circle2_colour = [];
    colourstrial = colPairs[Colourpair];
    console.log(Ecc);
    console.log(LoopCounter);
    if ((Temporder === "first")) {
        Circle2_colour = colourcodesrgb[colourstrial[1]];
    }
    if ((Temporder === "second")) {
        Circle2_colour = colourcodesrgb[colourstrial[0]];
    }
    if ((LoopCounter === 1)) {
        Ecc = stimpositions[trialnumber];
        if ((Ecc === "onetwo")) {
            circle2posx = 100;
            circle2posy = 100;
        }
        if ((Ecc === "onethree")) {
            circle2posx = (- 100);
            circle2posy = (- 100);
        }
        if ((Ecc === "twoone")) {
            circle2posx = (- 100);
            circle2posy = 100;
        }
        if ((Ecc === "twofour")) {
            circle2posx = 100;
            circle2posy = (- 100);
        }
        if ((Ecc === "threeone")) {
            circle2posx = (- 100);
            circle2posy = 100;
        }
        if ((Ecc === "threefour")) {
            circle2posx = 100;
            circle2posy = (- 100);
        }
        if ((Ecc === "fourtwo")) {
            circle2posx = 100;
            circle2posy = 100;
        }
        if ((Ecc === "fourthree")) {
            circle2posx = (- 100);
            circle2posy = (- 100);
        }
    }
    if ((LoopCounter === 2)) {
        Ecc = stimpositions[(trialnumber - 162)];
        if ((Ecc === "onetwo")) {
            circle2posx = 100;
            circle2posy = (- 100);
        }
        if ((Ecc === "onethree")) {
            circle2posx = (- 100);
            circle2posy = 100;
        }
        if ((Ecc === "twoone")) {
            circle2posx = (- 100);
            circle2posy = (- 100);
        }
        if ((Ecc === "twofour")) {
            circle2posx = 100;
            circle2posy = 100;
        }
        if ((Ecc === "threeone")) {
            circle2posx = (- 100);
            circle2posy = (- 100);
        }
        if ((Ecc === "threefour")) {
            circle2posx = 100;
            circle2posy = 100;
        }
        if ((Ecc === "fourtwo")) {
            circle2posx = 100;
            circle2posy = (- 100);
        }
        if ((Ecc === "fourthree")) {
            circle2posx = (- 100);
            circle2posy = 100;
        }
    }
    console.log(Circle2_colour);
    
    Circle_2.setPos([circle2posx, circle2posy]);
    Circle_2.setSize([100, 100]);
    Circle_2.setFillColor(new util.Color(Circle2_colour));
    Circle_2.setLineColor(new util.Color(Circle2_colour));
    // keep track of which components have finished
    Stim2_displayComponents = [];
    Stim2_displayComponents.push(Circle_2);
    Stim2_displayComponents.push(centre_cross4_4);
    
    Stim2_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Stim2_displayRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Stim2_display'-------
    // get current time
    t = Stim2_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Circle_2* updates
    if (t >= 0.25 && Circle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Circle_2.tStart = t;  // (not accounting for frame time here)
      Circle_2.frameNStart = frameN;  // exact frame index
      
      Circle_2.setAutoDraw(true);
    }

    frameRemains = 0.25 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Circle_2.status === PsychoJS.Status.STARTED || Circle_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Circle_2.setAutoDraw(false);
    }
    
    // *centre_cross4_4* updates
    if (t >= 0 && centre_cross4_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centre_cross4_4.tStart = t;  // (not accounting for frame time here)
      centre_cross4_4.frameNStart = frameN;  // exact frame index
      
      centre_cross4_4.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((centre_cross4_4.status === PsychoJS.Status.STARTED || centre_cross4_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      centre_cross4_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Stim2_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Stim2_displayRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Stim2_display'-------
    Stim2_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("Circle2_colour", Circle2_colour);
    thisExp.addData("Ecc", Ecc);
    
    return Scheduler.Event.NEXT;
  };
}


var responseComponents;
function responseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'response'-------
    t = 0;
    responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    event.clearEvents();
    
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(mouse);
    responseComponents.push(response1disk);
    responseComponents.push(response3disk);
    responseComponents.push(response5disk);
    responseComponents.push(response7disk);
    responseComponents.push(text_23);
    
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function responseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'response'-------
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [response1disk,response3disk,response5disk,response7disk]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *response1disk* updates
    if (t >= 0.0 && response1disk.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk.tStart = t;  // (not accounting for frame time here)
      response1disk.frameNStart = frameN;  // exact frame index
      
      response1disk.setAutoDraw(true);
    }

    
    // *response3disk* updates
    if (t >= 0.0 && response3disk.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk.tStart = t;  // (not accounting for frame time here)
      response3disk.frameNStart = frameN;  // exact frame index
      
      response3disk.setAutoDraw(true);
    }

    
    // *response5disk* updates
    if (t >= 0.0 && response5disk.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk.tStart = t;  // (not accounting for frame time here)
      response5disk.frameNStart = frameN;  // exact frame index
      
      response5disk.setAutoDraw(true);
    }

    
    // *response7disk* updates
    if (t >= 0.0 && response7disk.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk.tStart = t;  // (not accounting for frame time here)
      response7disk.frameNStart = frameN;  // exact frame index
      
      response7disk.setAutoDraw(true);
    }

    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'response'-------
    responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    mousexpos = mouse.getPos()[0];
    mouseypos = mouse.getPos()[1];
    x11d = (a - (b / 2));
    y11d = (a + (b / 2));
    x12d = (a + (b / 2));
    y12d = (a + (b / 2));
    x13d = (a - (b / 2));
    y13d = (a - (b / 2));
    a1d = ((((y12d - y13d) * (mousexpos - x13d)) + ((x13d - x12d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    b1d = ((((y13d - y11d) * (mousexpos - x13d)) + ((x11d - x13d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    c1d = ((1 - a1d) - b1d);
    x21d = (a - (b / 2));
    y21d = (a - (b / 2));
    x22d = (a + (b / 2));
    y22d = (a + (b / 2));
    x23d = (a + (b / 2));
    y23d = (a - (b / 2));
    a2d = ((((y22d - y23d) * (mousexpos - x23d)) + ((x23d - x22d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    b2d = ((((y23d - y21d) * (mousexpos - x23d)) + ((x21d - x23d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    c2d = ((1 - a2d) - b2d);
    x31d = (a - (b / 2));
    y31d = (- (a - (b / 2)));
    x32d = (a + (b / 2));
    y32d = (- (a - (b / 2)));
    x33d = (a + (b / 2));
    y33d = (- (a + (b / 2)));
    a3d = ((((y32d - y33d) * (mousexpos - x33d)) + ((x33d - x32d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    b3d = ((((y33d - y31d) * (mousexpos - x33d)) + ((x31d - x33d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    c3d = ((1 - a3d) - b3d);
    x41d = (a - (b / 2));
    y41d = (- (a - (b / 2)));
    x42d = (a + (b / 2));
    y42d = (- (a + (b / 2)));
    x43d = (a - (b / 2));
    y43d = (- (a + (b / 2)));
    a4d = ((((y42d - y43d) * (mousexpos - x43d)) + ((x43d - x42d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    b4d = ((((y43d - y41d) * (mousexpos - x43d)) + ((x41d - x43d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    c4d = ((1 - a4d) - b4d);
    x51d = (- (a + (b / 2)));
    y51d = (- (a + (b / 2)));
    x52d = (- (a - (b / 2)));
    y52d = (- (a - (b / 2)));
    x53d = (- (a - (b / 2)));
    y53d = (- (a + (b / 2)));
    a5d = ((((y52d - y53d) * (mousexpos - x53d)) + ((x53d - x52d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    b5d = ((((y53d - y51d) * (mousexpos - x53d)) + ((x51d - x53d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    c5d = ((1 - a5d) - b5d);
    x61d = (- (a + (b / 2)));
    y61d = (- (a - (b / 2)));
    x62d = (- (a - (b / 2)));
    y62d = (- (a - (b / 2)));
    x63d = (- (a + (b / 2)));
    y63d = (- (a + (b / 2)));
    a6d = ((((y62d - y63d) * (mousexpos - x63d)) + ((x63d - x62d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    b6d = ((((y63d - y61d) * (mousexpos - x63d)) + ((x61d - x63d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    c6d = ((1 - a6d) - b6d);
    x71d = (- (a + (b / 2)));
    y71d = (a + (b / 2));
    x72d = (- (a - (b / 2)));
    y72d = (a - (b / 2));
    x73d = (- (a + (b / 2)));
    y73d = (a - (b / 2));
    a7d = ((((y72d - y73d) * (mousexpos - x73d)) + ((x73d - x72d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    b7d = ((((y73d - y71d) * (mousexpos - x73d)) + ((x71d - x73d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    c7d = ((1 - a7d) - b7d);
    x81d = (- (a + (b / 2)));
    y81d = (a + (b / 2));
    x82d = (- (a - (b / 2)));
    y82d = (a + (b / 2));
    x83d = (- (a - (b / 2)));
    y83d = (a - (b / 2));
    a8d = ((((y82d - y83d) * (mousexpos - x83d)) + ((x83d - x82d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    b8d = ((((y83d - y81d) * (mousexpos - x83d)) + ((x81d - x83d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    c8d = ((1 - a8d) - b8d);
    if (((((0 <= a1d) && (a1d <= 1)) && ((0 <= b1d) && (b1d <= 1))) && ((0 <= c1d) && (c1d <= 1)))) {
        similarity = 7;
    } else {
        if (((((0 <= a2d) && (a2d <= 1)) && ((0 <= b2d) && (b2d <= 1))) && ((0 <= c2d) && (c2d <= 1)))) {
            similarity = 6;
        } else {
            if (((((0 <= a3d) && (a3d <= 1)) && ((0 <= b3d) && (b3d <= 1))) && ((0 <= c3d) && (c3d <= 1)))) {
                similarity = 5;
            } else {
                if (((((0 <= a4d) && (a4d <= 1)) && ((0 <= b4d) && (b4d <= 1))) && ((0 <= c4d) && (c4d <= 1)))) {
                    similarity = 4;
                } else {
                    if (((((0 <= a5d) && (a5d <= 1)) && ((0 <= b5d) && (b5d <= 1))) && ((0 <= c5d) && (c5d <= 1)))) {
                        similarity = 3;
                    } else {
                        if (((((0 <= a6d) && (a6d <= 1)) && ((0 <= b6d) && (b6d <= 1))) && ((0 <= c6d) && (c6d <= 1)))) {
                            similarity = 2;
                        } else {
                            if (((((0 <= a7d) && (a7d <= 1)) && ((0 <= b7d) && (b7d <= 1))) && ((0 <= c7d) && (c7d <= 1)))) {
                                similarity = 1;
                            } else {
                                if (((((0 <= a8d) && (a8d <= 1)) && ((0 <= b8d) && (b8d <= 1))) && ((0 <= c8d) && (c8d <= 1)))) {
                                    similarity = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    trialnumber = (trialnumber + 1);
    thisExp.addData("similarity", similarity);
    thisExp.addData("response_time", mouse.mouseClock.getTime());
    
    // the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialnumbertext;
var response_2Components;
function response_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'response_2'-------
    t = 0;
    response_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    rectangle.setFillColor(new util.Color(grey));
    trialnumbertext = `You have finished ${trialnumber} of 324 questions`;
    event.clearEvents();
    
    text_24.setText(trialnumbertext);
    // keep track of which components have finished
    response_2Components = [];
    response_2Components.push(mouse_2);
    response_2Components.push(response1disk_2);
    response_2Components.push(response3disk_2);
    response_2Components.push(response5disk_2);
    response_2Components.push(response7disk_2);
    response_2Components.push(rectangle);
    response_2Components.push(text_25);
    response_2Components.push(text_24);
    
    response_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'response_2'-------
    // get current time
    t = response_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [rectangle]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *response1disk_2* updates
    if (t >= 0.0 && response1disk_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk_2.tStart = t;  // (not accounting for frame time here)
      response1disk_2.frameNStart = frameN;  // exact frame index
      
      response1disk_2.setAutoDraw(true);
    }

    
    // *response3disk_2* updates
    if (t >= 0.0 && response3disk_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk_2.tStart = t;  // (not accounting for frame time here)
      response3disk_2.frameNStart = frameN;  // exact frame index
      
      response3disk_2.setAutoDraw(true);
    }

    
    // *response5disk_2* updates
    if (t >= 0.0 && response5disk_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk_2.tStart = t;  // (not accounting for frame time here)
      response5disk_2.frameNStart = frameN;  // exact frame index
      
      response5disk_2.setAutoDraw(true);
    }

    
    // *response7disk_2* updates
    if (t >= 0.0 && response7disk_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk_2.tStart = t;  // (not accounting for frame time here)
      response7disk_2.frameNStart = frameN;  // exact frame index
      
      response7disk_2.setAutoDraw(true);
    }

    
    // *rectangle* updates
    if (t >= 0.0 && rectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle.tStart = t;  // (not accounting for frame time here)
      rectangle.frameNStart = frameN;  // exact frame index
      
      rectangle.setAutoDraw(true);
    }

    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }

    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function response_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'response_2'-------
    response_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    if (mouse_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0]);}
    // the Routine "response_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var special_trialComponents;
function special_trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'special_trial'-------
    t = 0;
    special_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.250000);
    // update component parameters for each repeat
    // keep track of which components have finished
    special_trialComponents = [];
    special_trialComponents.push(text_33);
    
    special_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function special_trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'special_trial'-------
    // get current time
    t = special_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_33.status === PsychoJS.Status.STARTED || text_33.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_33.setAutoDraw(false);
    }
    if (Catch === 0){
        continueRoutine = false
        }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    special_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function special_trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'special_trial'-------
    special_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var catchnumber;
var catch_1Components;
function catch_1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'catch_1'-------
    t = 0;
    catch_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    catchnumber = (Math.floor((Math.random() * ((7 - 0) + 1))) + 0);
    event.clearEvents();
    catchtext = `SPECIAL TRIAL PLEASE CLICK AND HOLD ${catchnumber}`;
    
    text_26.setText(catchtext);
    // keep track of which components have finished
    catch_1Components = [];
    catch_1Components.push(mouse_3);
    catch_1Components.push(response1disk_3);
    catch_1Components.push(response3disk_3);
    catch_1Components.push(response5disk_3);
    catch_1Components.push(response7disk_3);
    catch_1Components.push(text_26);
    catch_1Components.push(rectangle_2);
    
    catch_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function catch_1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'catch_1'-------
    // get current time
    t = catch_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [response1disk_3,response3disk_3,response5disk_3,response7disk_3,]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *response1disk_3* updates
    if (t >= 0.0 && response1disk_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk_3.tStart = t;  // (not accounting for frame time here)
      response1disk_3.frameNStart = frameN;  // exact frame index
      
      response1disk_3.setAutoDraw(true);
    }

    
    // *response3disk_3* updates
    if (t >= 0.0 && response3disk_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk_3.tStart = t;  // (not accounting for frame time here)
      response3disk_3.frameNStart = frameN;  // exact frame index
      
      response3disk_3.setAutoDraw(true);
    }

    
    // *response5disk_3* updates
    if (t >= 0.0 && response5disk_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk_3.tStart = t;  // (not accounting for frame time here)
      response5disk_3.frameNStart = frameN;  // exact frame index
      
      response5disk_3.setAutoDraw(true);
    }

    
    // *response7disk_3* updates
    if (t >= 0.0 && response7disk_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk_3.tStart = t;  // (not accounting for frame time here)
      response7disk_3.frameNStart = frameN;  // exact frame index
      
      response7disk_3.setAutoDraw(true);
    }

    if (Catch === 0){
        continueRoutine = false
        }
    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    // *rectangle_2* updates
    if (t >= 0.0 && rectangle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_2.tStart = t;  // (not accounting for frame time here)
      rectangle_2.frameNStart = frameN;  // exact frame index
      
      rectangle_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    catch_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var catchresponse;
function catch_1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'catch_1'-------
    catch_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    if (mouse_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0]);}
    mousexpos = mouse.getPos()[0];
    mouseypos = mouse.getPos()[1];
    x11d = (a - (b / 2));
    y11d = (a + (b / 2));
    x12d = (a + (b / 2));
    y12d = (a + (b / 2));
    x13d = (a - (b / 2));
    y13d = (a - (b / 2));
    a1d = ((((y12d - y13d) * (mousexpos - x13d)) + ((x13d - x12d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    b1d = ((((y13d - y11d) * (mousexpos - x13d)) + ((x11d - x13d) * (mouseypos - y13d))) / (((y12d - y13d) * (x11d - x13d)) + ((x13d - x12d) * (y11d - y13d))));
    c1d = ((1 - a1d) - b1d);
    x21d = (a - (b / 2));
    y21d = (a - (b / 2));
    x22d = (a + (b / 2));
    y22d = (a + (b / 2));
    x23d = (a + (b / 2));
    y23d = (a - (b / 2));
    a2d = ((((y22d - y23d) * (mousexpos - x23d)) + ((x23d - x22d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    b2d = ((((y23d - y21d) * (mousexpos - x23d)) + ((x21d - x23d) * (mouseypos - y23d))) / (((y22d - y23d) * (x21d - x23d)) + ((x23d - x22d) * (y21d - y23d))));
    c2d = ((1 - a2d) - b2d);
    x31d = (a - (b / 2));
    y31d = (- (a - (b / 2)));
    x32d = (a + (b / 2));
    y32d = (- (a - (b / 2)));
    x33d = (a + (b / 2));
    y33d = (- (a + (b / 2)));
    a3d = ((((y32d - y33d) * (mousexpos - x33d)) + ((x33d - x32d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    b3d = ((((y33d - y31d) * (mousexpos - x33d)) + ((x31d - x33d) * (mouseypos - y33d))) / (((y32d - y33d) * (x31d - x33d)) + ((x33d - x32d) * (y31d - y33d))));
    c3d = ((1 - a3d) - b3d);
    x41d = (a - (b / 2));
    y41d = (- (a - (b / 2)));
    x42d = (a + (b / 2));
    y42d = (- (a + (b / 2)));
    x43d = (a - (b / 2));
    y43d = (- (a + (b / 2)));
    a4d = ((((y42d - y43d) * (mousexpos - x43d)) + ((x43d - x42d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    b4d = ((((y43d - y41d) * (mousexpos - x43d)) + ((x41d - x43d) * (mouseypos - y43d))) / (((y42d - y43d) * (x41d - x43d)) + ((x43d - x42d) * (y41d - y43d))));
    c4d = ((1 - a4d) - b4d);
    x51d = (- (a + (b / 2)));
    y51d = (- (a + (b / 2)));
    x52d = (- (a - (b / 2)));
    y52d = (- (a - (b / 2)));
    x53d = (- (a - (b / 2)));
    y53d = (- (a + (b / 2)));
    a5d = ((((y52d - y53d) * (mousexpos - x53d)) + ((x53d - x52d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    b5d = ((((y53d - y51d) * (mousexpos - x53d)) + ((x51d - x53d) * (mouseypos - y53d))) / (((y52d - y53d) * (x51d - x53d)) + ((x53d - x52d) * (y51d - y53d))));
    c5d = ((1 - a5d) - b5d);
    x61d = (- (a + (b / 2)));
    y61d = (- (a - (b / 2)));
    x62d = (- (a - (b / 2)));
    y62d = (- (a - (b / 2)));
    x63d = (- (a + (b / 2)));
    y63d = (- (a + (b / 2)));
    a6d = ((((y62d - y63d) * (mousexpos - x63d)) + ((x63d - x62d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    b6d = ((((y63d - y61d) * (mousexpos - x63d)) + ((x61d - x63d) * (mouseypos - y63d))) / (((y62d - y63d) * (x61d - x63d)) + ((x63d - x62d) * (y61d - y63d))));
    c6d = ((1 - a6d) - b6d);
    x71d = (- (a + (b / 2)));
    y71d = (a + (b / 2));
    x72d = (- (a - (b / 2)));
    y72d = (a - (b / 2));
    x73d = (- (a + (b / 2)));
    y73d = (a - (b / 2));
    a7d = ((((y72d - y73d) * (mousexpos - x73d)) + ((x73d - x72d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    b7d = ((((y73d - y71d) * (mousexpos - x73d)) + ((x71d - x73d) * (mouseypos - y73d))) / (((y72d - y73d) * (x71d - x73d)) + ((x73d - x72d) * (y71d - y73d))));
    c7d = ((1 - a7d) - b7d);
    x81d = (- (a + (b / 2)));
    y81d = (a + (b / 2));
    x82d = (- (a - (b / 2)));
    y82d = (a + (b / 2));
    x83d = (- (a - (b / 2)));
    y83d = (a - (b / 2));
    a8d = ((((y82d - y83d) * (mousexpos - x83d)) + ((x83d - x82d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    b8d = ((((y83d - y81d) * (mousexpos - x83d)) + ((x81d - x83d) * (mouseypos - y83d))) / (((y82d - y83d) * (x81d - x83d)) + ((x83d - x82d) * (y81d - y83d))));
    c8d = ((1 - a8d) - b8d);
    if (((((0 <= a1d) && (a1d <= 1)) && ((0 <= b1d) && (b1d <= 1))) && ((0 <= c1d) && (c1d <= 1)))) {
        catchresponse = 7;
    } else {
        if (((((0 <= a2d) && (a2d <= 1)) && ((0 <= b2d) && (b2d <= 1))) && ((0 <= c2d) && (c2d <= 1)))) {
            catchresponse = 6;
        } else {
            if (((((0 <= a3d) && (a3d <= 1)) && ((0 <= b3d) && (b3d <= 1))) && ((0 <= c3d) && (c3d <= 1)))) {
                catchresponse = 5;
            } else {
                if (((((0 <= a4d) && (a4d <= 1)) && ((0 <= b4d) && (b4d <= 1))) && ((0 <= c4d) && (c4d <= 1)))) {
                    catchresponse = 4;
                } else {
                    if (((((0 <= a5d) && (a5d <= 1)) && ((0 <= b5d) && (b5d <= 1))) && ((0 <= c5d) && (c5d <= 1)))) {
                        catchresponse = 3;
                    } else {
                        if (((((0 <= a6d) && (a6d <= 1)) && ((0 <= b6d) && (b6d <= 1))) && ((0 <= c6d) && (c6d <= 1)))) {
                            catchresponse = 2;
                        } else {
                            if (((((0 <= a7d) && (a7d <= 1)) && ((0 <= b7d) && (b7d <= 1))) && ((0 <= c7d) && (c7d <= 1)))) {
                                catchresponse = 1;
                            } else {
                                if (((((0 <= a8d) && (a8d <= 1)) && ((0 <= b8d) && (b8d <= 1))) && ((0 <= c8d) && (c8d <= 1)))) {
                                    catchresponse = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    thisExp.addData("catchresponse", catchresponse);
    thisExp.addData("catchnumber", catchnumber);
    thisExp.addData("response_time_catch", mouse_3.mouseClock.getTime());
    thisExp.addData("Catch", Catch);
    
    // the Routine "catch_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var response_sumComponents;
function response_sumRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'response_sum'-------
    t = 0;
    response_sumClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_11
    mouse_11.clicked_name = [];
    gotValidClick = false; // until a click is received
    rectangle_9.setFillColor(new util.Color(grey));
    trialnumbertext = `You have finished ${trialnumber} of 324 questions`;
    event.clearEvents();
    
    if (Catch === 0){
        continueRoutine = false
        }
    text_52.setText(trialnumbertext);
    // keep track of which components have finished
    response_sumComponents = [];
    response_sumComponents.push(mouse_11);
    response_sumComponents.push(response1disk_11);
    response_sumComponents.push(response3disk_11);
    response_sumComponents.push(response5disk_11);
    response_sumComponents.push(response7disk_11);
    response_sumComponents.push(rectangle_9);
    response_sumComponents.push(text_51);
    response_sumComponents.push(text_52);
    
    response_sumComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_sumRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'response_sum'-------
    // get current time
    t = response_sumClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_11* updates
    if (t >= 0.0 && mouse_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_11.tStart = t;  // (not accounting for frame time here)
      mouse_11.frameNStart = frameN;  // exact frame index
      
      mouse_11.status = PsychoJS.Status.STARTED;
      mouse_11.mouseClock.reset();
      prevButtonState = mouse_11.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_11.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_11.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [rectangle]) {
            if (obj.contains(mouse_11)) {
              gotValidClick = true;
              mouse_11.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *response1disk_11* updates
    if (t >= 0.0 && response1disk_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response1disk_11.tStart = t;  // (not accounting for frame time here)
      response1disk_11.frameNStart = frameN;  // exact frame index
      
      response1disk_11.setAutoDraw(true);
    }

    
    // *response3disk_11* updates
    if (t >= 0.0 && response3disk_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response3disk_11.tStart = t;  // (not accounting for frame time here)
      response3disk_11.frameNStart = frameN;  // exact frame index
      
      response3disk_11.setAutoDraw(true);
    }

    
    // *response5disk_11* updates
    if (t >= 0.0 && response5disk_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response5disk_11.tStart = t;  // (not accounting for frame time here)
      response5disk_11.frameNStart = frameN;  // exact frame index
      
      response5disk_11.setAutoDraw(true);
    }

    
    // *response7disk_11* updates
    if (t >= 0.0 && response7disk_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response7disk_11.tStart = t;  // (not accounting for frame time here)
      response7disk_11.frameNStart = frameN;  // exact frame index
      
      response7disk_11.setAutoDraw(true);
    }

    
    // *rectangle_9* updates
    if (t >= 0.0 && rectangle_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_9.tStart = t;  // (not accounting for frame time here)
      rectangle_9.frameNStart = frameN;  // exact frame index
      
      rectangle_9.setAutoDraw(true);
    }

    if (Catch === 0){
        continueRoutine = false
        }
    
    // *text_51* updates
    if (t >= 0.0 && text_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_51.tStart = t;  // (not accounting for frame time here)
      text_51.frameNStart = frameN;  // exact frame index
      
      text_51.setAutoDraw(true);
    }

    
    // *text_52* updates
    if (t >= 0.0 && text_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_52.tStart = t;  // (not accounting for frame time here)
      text_52.frameNStart = frameN;  // exact frame index
      
      text_52.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_sumComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function response_sumRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'response_sum'-------
    response_sumComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_11.getPos();
    _mouseButtons = mouse_11.getPressed();
    psychoJS.experiment.addData('mouse_11.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_11.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_11.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_11.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_11.rightButton', _mouseButtons[2]);
    if (mouse_11.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_11.clicked_name', mouse_11.clicked_name[0]);}
    // the Routine "response_sum" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var modify;
var survey1Components;
function survey1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'survey1'-------
    t = 0;
    survey1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    copyText_1.text = '';
    // keep track of which components have finished
    survey1Components = [];
    survey1Components.push(copyText_1);
    survey1Components.push(question_4);
    survey1Components.push(submitanswer);
    
    survey1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var textAdd;
function survey1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'survey1'-------
    // get current time
    t = survey1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *copyText_1* updates
    if (t >= 0 && copyText_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText_1.tStart = t;  // (not accounting for frame time here)
      copyText_1.frameNStart = frameN;  // exact frame index
      
      copyText_1.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys({keyList: ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','return','backspace','space']});
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        copyText_1.text = copyText_1.text.slice(0, -1);
        textAdd = undefined;
    } else if (textAdd !== undefined) {
        if (modify) {
            copyText_1.text = copyText_1.text + textAdd.toUpperCase();
            modify = false;
        } else {
            copyText_1.text = copyText_1.text + textAdd
        }
        textAdd = undefined;
    }
    
    
    // *question_4* updates
    if (t >= 0 && question_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_4.tStart = t;  // (not accounting for frame time here)
      question_4.frameNStart = frameN;  // exact frame index
      
      question_4.setAutoDraw(true);
    }

    
    // *submitanswer* updates
    if (t >= 0.0 && submitanswer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitanswer.tStart = t;  // (not accounting for frame time here)
      submitanswer.frameNStart = frameN;  // exact frame index
      
      submitanswer.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    survey1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'survey1'-------
    survey1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("answer1", copyText_1.text)
    copyText_1.setText('')  // empty the onscreen text ready for next input
    
    thisExp.addData("rt1", t);
    // the Routine "survey1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var survey2Components;
function survey2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'survey2'-------
    t = 0;
    survey2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    copyText_2.text = '';
    // keep track of which components have finished
    survey2Components = [];
    survey2Components.push(copyText_2);
    survey2Components.push(question);
    survey2Components.push(submitanswer_2);
    
    survey2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function survey2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'survey2'-------
    // get current time
    t = survey2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *copyText_2* updates
    if (t >= 0 && copyText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText_2.tStart = t;  // (not accounting for frame time here)
      copyText_2.frameNStart = frameN;  // exact frame index
      
      copyText_2.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys({keyList: ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','return','backspace','space']});
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        copyText_2.text = copyText_2.text.slice(0, -1);
        textAdd = undefined;
    } else if (textAdd !== undefined) {
        if (modify) {
            copyText_2.text = copyText_2.text + textAdd.toUpperCase();
            modify = false;
        } else {
            copyText_2.text = copyText_2.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *question* updates
    if (t >= 0 && question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question.tStart = t;  // (not accounting for frame time here)
      question.frameNStart = frameN;  // exact frame index
      
      question.setAutoDraw(true);
    }

    
    // *submitanswer_2* updates
    if (t >= 0.0 && submitanswer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitanswer_2.tStart = t;  // (not accounting for frame time here)
      submitanswer_2.frameNStart = frameN;  // exact frame index
      
      submitanswer_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    survey2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'survey2'-------
    survey2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("answer2", copyText_2.text)
    copyText_2.setText('')  // empty the onscreen text ready for next input
    
    thisExp.addData("rt2", t);
    // the Routine "survey2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var survey3Components;
function survey3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'survey3'-------
    t = 0;
    survey3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    copyText_3.text = '';
    
    // keep track of which components have finished
    survey3Components = [];
    survey3Components.push(copyText_3);
    survey3Components.push(question_2);
    survey3Components.push(submitanswer_3);
    
    survey3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function survey3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'survey3'-------
    // get current time
    t = survey3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *copyText_3* updates
    if (t >= 0 && copyText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText_3.tStart = t;  // (not accounting for frame time here)
      copyText_3.frameNStart = frameN;  // exact frame index
      
      copyText_3.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys({keyList: ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','return','backspace','space']});
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        copyText_3.text = copyText_3.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            copyText_3.text = copyText_3.text + textAdd.toUpperCase();
            modify = false;
        } else {
            copyText_3.text = copyText_3.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *question_2* updates
    if (t >= 0 && question_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_2.tStart = t;  // (not accounting for frame time here)
      question_2.frameNStart = frameN;  // exact frame index
      
      question_2.setAutoDraw(true);
    }

    
    // *submitanswer_3* updates
    if (t >= 0.0 && submitanswer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitanswer_3.tStart = t;  // (not accounting for frame time here)
      submitanswer_3.frameNStart = frameN;  // exact frame index
      
      submitanswer_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    survey3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'survey3'-------
    survey3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("answer3", copyText_3.text)
    copyText_3.setText('')  // empty the onscreen text ready for next input
    thisExp.addData("rt3", t);
    // the Routine "survey3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var survey_4Components;
function survey_4RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'survey_4'-------
    t = 0;
    survey_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    copyText_4.text = '';
    // keep track of which components have finished
    survey_4Components = [];
    survey_4Components.push(copyText_4);
    survey_4Components.push(question_3);
    survey_4Components.push(submitanswer_4);
    
    survey_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function survey_4RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'survey_4'-------
    // get current time
    t = survey_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *copyText_4* updates
    if (t >= 0 && copyText_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText_4.tStart = t;  // (not accounting for frame time here)
      copyText_4.frameNStart = frameN;  // exact frame index
      
      copyText_4.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys({keyList: ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','return','backspace','space']});
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        copyText_4.text = copyText_4.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            copyText_4.text = copyText_4.text + textAdd.toUpperCase();
            modify = false;
        } else {
            copyText_4.text = copyText_4.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *question_3* updates
    if (t >= 0 && question_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_3.tStart = t;  // (not accounting for frame time here)
      question_3.frameNStart = frameN;  // exact frame index
      
      question_3.setAutoDraw(true);
    }

    
    // *submitanswer_4* updates
    if (t >= 0.0 && submitanswer_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitanswer_4.tStart = t;  // (not accounting for frame time here)
      submitanswer_4.frameNStart = frameN;  // exact frame index
      
      submitanswer_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    survey_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey_4RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'survey_4'-------
    survey_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("answer4", copyText_4.text)
    copyText_4.setText('')  // empty the onscreen text ready for next input
    thisExp.addData("rt4", t);
    // the Routine "survey_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var survey5Components;
function survey5RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'survey5'-------
    t = 0;
    survey5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    copyText_5.text = '';
    // keep track of which components have finished
    survey5Components = [];
    survey5Components.push(copyText_5);
    survey5Components.push(question_5);
    survey5Components.push(submitanswer_5);
    
    survey5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function survey5RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'survey5'-------
    // get current time
    t = survey5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *copyText_5* updates
    if (t >= 0 && copyText_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText_5.tStart = t;  // (not accounting for frame time here)
      copyText_5.frameNStart = frameN;  // exact frame index
      
      copyText_5.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys({keyList: ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','return','backspace','space']});
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        copyText_5.text = copyText_5.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            copyText_5.text = copyText_5.text + textAdd.toUpperCase();
            modify = false;
        } else {
            copyText_5.text = copyText_5.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *question_5* updates
    if (t >= 0 && question_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_5.tStart = t;  // (not accounting for frame time here)
      question_5.frameNStart = frameN;  // exact frame index
      
      question_5.setAutoDraw(true);
    }

    
    // *submitanswer_5* updates
    if (t >= 0.0 && submitanswer_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitanswer_5.tStart = t;  // (not accounting for frame time here)
      submitanswer_5.frameNStart = frameN;  // exact frame index
      
      submitanswer_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    survey5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey5RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'survey5'-------
    survey5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("answer5", copyText_5.text)
    copyText_5.setText('')  // empty the onscreen text ready for next input
    thisExp.addData("rt5", t);
    // the Routine "survey5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var survey6Components;
function survey6RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'survey6'-------
    t = 0;
    survey6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    copyText_6.text = '';
    // keep track of which components have finished
    survey6Components = [];
    survey6Components.push(copyText_6);
    survey6Components.push(question_6);
    survey6Components.push(submitanswer_6);
    
    survey6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function survey6RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'survey6'-------
    // get current time
    t = survey6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *copyText_6* updates
    if (t >= 0 && copyText_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText_6.tStart = t;  // (not accounting for frame time here)
      copyText_6.frameNStart = frameN;  // exact frame index
      
      copyText_6.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys({keyList: ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','return','backspace','space']});
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        copyText_6.text = copyText_6.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            copyText_6.text = copyText_6.text + textAdd.toUpperCase();
            modify = false;
        } else {
            copyText_6.text = copyText_6.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *question_6* updates
    if (t >= 0 && question_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_6.tStart = t;  // (not accounting for frame time here)
      question_6.frameNStart = frameN;  // exact frame index
      
      question_6.setAutoDraw(true);
    }

    
    // *submitanswer_6* updates
    if (t >= 0.0 && submitanswer_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitanswer_6.tStart = t;  // (not accounting for frame time here)
      submitanswer_6.frameNStart = frameN;  // exact frame index
      
      submitanswer_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    survey6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey6RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'survey6'-------
    survey6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("answer6", copyText_6.text)
    copyText_6.setText('')  // empty the onscreen text ready for next input
    
    thisExp.addData("rt6", t);
    // the Routine "survey6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var survey7Components;
function survey7RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'survey7'-------
    t = 0;
    survey7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    copyText_7.text = '';
    
    // keep track of which components have finished
    survey7Components = [];
    survey7Components.push(copyText_7);
    survey7Components.push(question_7);
    survey7Components.push(submitanswer_7);
    
    survey7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function survey7RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'survey7'-------
    // get current time
    t = survey7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *copyText_7* updates
    if (t >= 0 && copyText_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      copyText_7.tStart = t;  // (not accounting for frame time here)
      copyText_7.frameNStart = frameN;  // exact frame index
      
      copyText_7.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys({keyList: ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','return','backspace', 'space']});
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        copyText_7.text = copyText_7.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            copyText_7.text = copyText_7.text + textAdd.toUpperCase();
            modify = false;
        } else {
            copyText_7.text = copyText_7.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *question_7* updates
    if (t >= 0 && question_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_7.tStart = t;  // (not accounting for frame time here)
      question_7.frameNStart = frameN;  // exact frame index
      
      question_7.setAutoDraw(true);
    }

    
    // *submitanswer_7* updates
    if (t >= 0.0 && submitanswer_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitanswer_7.tStart = t;  // (not accounting for frame time here)
      submitanswer_7.frameNStart = frameN;  // exact frame index
      
      submitanswer_7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    survey7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey7RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'survey7'-------
    survey7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("answer7", copyText_7.text)
    copyText_7.setText('')  // empty the onscreen text ready for next input
    thisExp.addData("rt7", t);
    // the Routine "survey7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
