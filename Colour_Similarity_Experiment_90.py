#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.10),
    on January 25, 2022, at 13:40
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.10'
expName = 'Simcolourproject_2stim_asymm_good'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='\\\\ad.monash.edu\\home\\User023\\bfis0008\\Documents\\Quantum Similarity\\Code\\Colour_Similarity_Experiment-90\\Colour_Similarity_Experiment_90\\Colour_Similarity_Experiment_90.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 800], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='pix')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "startup"
startupClock = core.Clock()
import pandas as pd
from psychopy import tools
import random as rnd
rnd.seed()



def trialnumbers(m, n):
    seen = set()

    x, y = randint(m, n), randint(m, n)

    while True:
        seen.add((x, y))
        yield (x, y)
        x, y = randint(m, n), randint(m, n)
        while (x, y) in seen:
            x, y = randint(m, n), randint(m, n)
            
trialnumberpairs = trialnumbers(1,81)
print(trialnumberpairs)

# Initialize components for Routine "colourcodes"
colourcodesClock = core.Clock()
colourcodesrgb=[]# Create an array to store the colour codes
codenum = 0 # Start counter to index colour codes to change to rgb values 

# Initialize components for Routine "stimpositions"
stimpositionsClock = core.Clock()
stimpositions=[]# Create an array to store the stimulus positions


# Initialize components for Routine "welcome_instr"
welcome_instrClock = core.Clock()
text_54 = visual.TextStim(win=win, name='text_54',
    text='You may quit the experiment at anytime by pressing <ESC>',
    font='Arial',
    units='norm', pos=(0, -0.3), height=0.1, wrapWidth=1000, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
welcome = visual.TextStim(win=win, name='welcome',
    text='Welcome to this experiment \n\nThis will take about 45 minutes \n\n',
    font='Arial',
    units='norm', pos=(0, 0), height=0.2, wrapWidth=1000, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp = keyboard.Keyboard()
space = visual.TextStim(win=win, name='space',
    text='Press SPACE to continue ',
    font='Arial',
    units='norm', pos=(0.7, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "consent"
consentClock = core.Clock()
text_53 = visual.TextStim(win=win, name='text_53',
    text='Precision Phenomenology Experiment\nJust a little bit more to read before the experiment...this is an Informed Consent Form. Please read and understand the statements below.\n\nI understand that my taking part in the study is voluntary and that I am free to leave the study at any time, without giving any reason. I understand that my medical care or legal rights will not be affected in any way.\nI agree to the use and release of study-related information about me for the purposes described in this Informed Consent Form.\nI agree to the re-use of data collected in this study for future studies in a de-identified manner as described in this Informed Consent form.\nI understand that my consent continues until and unless I withdraw my consent that can be done at any time by giving notice to the investigator. I understand that if I withdraw my consent I will not be able to continue to take part in the study.\nI understand that if I withdraw consent, the study researchers will no longer use or release information that identifies me in connection with the study unless it is needed to keep the scientific quality of the study. I understand that if I withdraw consent the study researchers may still use any study-related information about me that was collected before I withdrew consent.\nI have read and I understand the information provided in this Informed Consent Form. I have had the opportunity to ask questions and have had these questions answered satisfactorily.\nI have had time to consider the information provided in this Informed Consent Form to consider answers to my questions, and to consider whether I wish to take part in the study.\nIf you understand the statements above, and freely consent to participate in the study, press [Space] to begin the experiment.',
    font='Times New Roman',
    units='norm', pos=(0, 0), height=0.05, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_16 = keyboard.Keyboard()
image = visual.ImageStim(
    win=win,
    name='image', units='pix', 
    image='monash-logo-mono.png', mask=None,
    ori=0, pos=[0,0], size=150,75,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)

# Initialize components for Routine "stim_response_instr"
stim_response_instrClock = core.Clock()
movie_2 = visual.MovieStim3(
    win=win, name='movie_2',
    noAudio = False,
    filename='exampletrial.mp4',
    ori=0, pos=(0, 150), opacity=1,
    loop=True,
    size=600,400,
    depth=0.0,
    )
key_resp_15 = keyboard.Keyboard()
space_14 = visual.TextStim(win=win, name='space_14',
    text='Press SPACE to continue ',
    font='Arial',
    units='norm', pos=(0.7, -0.7), height=0.05, wrapWidth=1000, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text_17 = visual.TextStim(win=win, name='text_17',
    text='Throughout the experiment, focus on the cross at the centre of the screen.\nA circle will flash out quickly on the screen.\n\nSometimes you will need to decide the similarity levels of the previous circle to a circle on the next screen.\n\n0 => most similar colour (least different colour)\n7 => most different colour (least similar colour)\n\nAfter choosing, move your cursor back to the centre and click and hold the box to continue.',
    font='Arial',
    units='norm', pos=(0, -0.4), height=0.05, wrapWidth=1000, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "catch_insrt"
catch_insrtClock = core.Clock()
space_15 = visual.TextStim(win=win, name='space_15',
    text='Press SPACE to continue ',
    font='Arial',
    units='norm', pos=(0.7, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_17 = keyboard.Keyboard()
movie_3 = visual.MovieStim3(
    win=win, name='movie_3',
    noAudio = False,
    filename='catchvideo.mp4',
    ori=0, pos=0,100, opacity=1,
    loop=True,
    size=600,400,
    depth=-2.0,
    )
text_18 = visual.TextStim(win=win, name='text_18',
    text='Sometimes there will be a special trial where you will just be asked to click on a particular value.\nPlease click and hold the value for that trial.',
    font='Arial',
    units='norm', pos=(0, -0.5), height=0.06, wrapWidth=1000, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "colour_circle_instr_2"
colour_circle_instr_2Clock = core.Clock()
key_resp_9 = keyboard.Keyboard()
space_9 = visual.TextStim(win=win, name='space_9',
    text='Press SPACE to continue ',
    font='Arial',
    units='norm', pos=(0.7, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
text_9 = visual.TextStim(win=win, name='text_9',
    text='During the test, you will see some of these colours displayed below.',
    font='Arial',
    units='norm', pos=(0, 0.8), height=0.06, wrapWidth=None, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='93colours.png', mask=None,
    ori=0, pos=(-50, 100), size=(600, 400),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)

# Initialize components for Routine "instr_prac"
instr_pracClock = core.Clock()
space_10 = visual.TextStim(win=win, name='space_10',
    text='Press SPACE to continue ',
    font='Arial',
    units='norm', pos=(0.7, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
text_10 = visual.TextStim(win=win, name='text_10',
    text='You are going to do a few practice trials to make you be more familiar with the experiment.\nWhen you are ready, please press SPACE to start the practice trials',
    font='Arial',
    units='norm', pos=(0, 0), height=0.06, wrapWidth=1000, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "Stim1_display_prac"
Stim1_display_pracClock = core.Clock()
Circle = visual.Polygon(
    win=win, name='Circle',units='pix', 
    edges=1000, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
centre_cross4_2 = visual.ShapeStim(
    win=win, name='centre_cross4_2', vertices='cross',units='norm', 
    size=(0.03, 0.03),
    ori=0, pos=(0, 0),
    lineWidth=1.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)

# Initialize components for Routine "Stim2_display_prac"
Stim2_display_pracClock = core.Clock()
Circle_4 = visual.Polygon(
    win=win, name='Circle_4',units='pix', 
    edges=1000, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
centre_cross4_3 = visual.ShapeStim(
    win=win, name='centre_cross4_3', vertices='cross',units='norm', 
    size=(0.03, 0.03),
    ori=0, pos=(0, 0),
    lineWidth=1.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)

# Initialize components for Routine "response_prac"
response_pracClock = core.Clock()
mouse_5 = event.Mouse(win=win)
x, y = [None, None]
mouse_5.mouseClock = core.Clock()
# Set response size
a = (screen.size[0]/2)*0.10;
b = (screen.size[0]/2)*0.158

response1disk_5 = visual.ImageStim(
    win=win,
    name='response1disk_5', units='pix', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response3disk_5 = visual.ImageStim(
    win=win,
    name='response3disk_5', units='pix', 
    image='response45.png', mask=None,
    ori=0, pos=a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response5disk_5 = visual.ImageStim(
    win=win,
    name='response5disk_5', units='pix', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
response7disk_5 = visual.ImageStim(
    win=win,
    name='response7disk_5', units='pix', 
    image='response01.png', mask=None,
    ori=0, pos=-a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-5.0)
text_29 = visual.TextStim(win=win, name='text_29',
    text='Please choose the similarity level of the two previously cued circles.\nPlease click and hold to indicate your choice.\n0 => Most similar\n7 => Most different \n',
    font='Arial',
    units='norm', pos=(0, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "responseprac_feedback"
responseprac_feedbackClock = core.Clock()
text_55 = visual.TextStim(win=win, name='text_55',
    text='default text',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1000, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
text_56 = visual.TextStim(win=win, name='text_56',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.2), height=0.1, wrapWidth=1000, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "summary_prac"
summary_pracClock = core.Clock()
mouse_10 = event.Mouse(win=win)
x, y = [None, None]
mouse_10.mouseClock = core.Clock()
response1disk_10 = visual.ImageStim(
    win=win,
    name='response1disk_10', units='pix', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
response3disk_10 = visual.ImageStim(
    win=win,
    name='response3disk_10', units='pix', 
    image='response45.png', mask=None,
    ori=0, pos=a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response5disk_10 = visual.ImageStim(
    win=win,
    name='response5disk_10', units='pix', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response7disk_10 = visual.ImageStim(
    win=win,
    name='response7disk_10', units='pix', 
    image='response01.png', mask=None,
    ori=0, pos=-a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
rectangle_8 = visual.Rect(
    win=win, name='rectangle_8',units='norm', 
    width=(0.1, 0.08)[0], height=(0.1, 0.08)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='white', lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
pracnumber = 0;

text_49 = visual.TextStim(win=win, name='text_49',
    text='Please click and hold on the grey rectangle in the middle of the response numbers to continue',
    font='Arial',
    units='norm', pos=(0, -0.5), height=0.05, wrapWidth=1000, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
text_50 = visual.TextStim(win=win, name='text_50',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);

# Initialize components for Routine "special_trial_prac"
special_trial_pracClock = core.Clock()
text_36 = visual.TextStim(win=win, name='text_36',
    text='SPECIAL TRIAL',
    font='Arial',
    units='norm', pos=(0,0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "catch_prac"
catch_pracClock = core.Clock()
mouse_7 = event.Mouse(win=win)
x, y = [None, None]
mouse_7.mouseClock = core.Clock()
response1disk_7 = visual.ImageStim(
    win=win,
    name='response1disk_7', units='pix', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
response3disk_7 = visual.ImageStim(
    win=win,
    name='response3disk_7', units='pix', 
    image='response45.png', mask=None,
    ori=0, pos=a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response5disk_7 = visual.ImageStim(
    win=win,
    name='response5disk_7', units='pix', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response7disk_7 = visual.ImageStim(
    win=win,
    name='response7disk_7', units='pix', 
    image='response01.png', mask=None,
    ori=0, pos=-a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
# Set up catch trials 

catchtrialorderprac = []
for i in range(0,2):
    n = randint(0,7)
    catchtrialorderprac.append(n)

catchnumberprac = randint(0,7);

text_32 = visual.TextStim(win=win, name='text_32',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
rectangle_5 = visual.Rect(
    win=win, name='rectangle_5',units='norm', 
    width=(0.1, 0.08)[0], height=(0.1, 0.08)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='white', lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-7.0, interpolate=True)

# Initialize components for Routine "summary2_prac"
summary2_pracClock = core.Clock()
mouse_6 = event.Mouse(win=win)
x, y = [None, None]
mouse_6.mouseClock = core.Clock()
response1disk_6 = visual.ImageStim(
    win=win,
    name='response1disk_6', units='pix', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
response3disk_6 = visual.ImageStim(
    win=win,
    name='response3disk_6', units='pix', 
    image='response45.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response5disk_6 = visual.ImageStim(
    win=win,
    name='response5disk_6', units='pix', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response7disk_6 = visual.ImageStim(
    win=win,
    name='response7disk_6', units='pix', 
    image='response01.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
rectangle_4 = visual.Rect(
    win=win, name='rectangle_4',units='norm', 
    width=(0.1, 0.08)[0], height=(0.1, 0.08)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='white', lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
pracnumber = 0;

text_30 = visual.TextStim(win=win, name='text_30',
    text='Please click and hold the grey rectangle in the middle of the response numbers to continue',
    font='Arial',
    units='norm', pos=(0, -0.7), height=0.05, wrapWidth=1000, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
text_31 = visual.TextStim(win=win, name='text_31',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.8), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);

# Initialize components for Routine "begin"
beginClock = core.Clock()
space_19 = visual.TextStim(win=win, name='space_19',
    text='Press SPACE to continue ',
    font='Arial',
    units='norm', pos=(0.7, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
text_46 = visual.TextStim(win=win, name='text_46',
    text='You have finished the practice trial.\n\nNext page will be the formal test. \n\nIf you are ready, please press SPACE button to start the experiment.',
    font='Arial',
    units='norm', pos=(0, 0), height=0.08, wrapWidth=1000, ori=0, 
    color='yellow', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_22 = keyboard.Keyboard()

# Initialize components for Routine "Stim1_display"
Stim1_displayClock = core.Clock()
trialnumber = 0 # Count trial numbers to index stim positions 
Circle_1 = visual.Polygon(
    win=win, name='Circle_1',units='pix', 
    edges=1000, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
centre_cross4 = visual.ShapeStim(
    win=win, name='centre_cross4', vertices='cross',units='norm', 
    size=(0.03, 0.03),
    ori=0, pos=(0, 0),
    lineWidth=1.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)

# Initialize components for Routine "Stim2_display"
Stim2_displayClock = core.Clock()
Circle_2 = visual.Polygon(
    win=win, name='Circle_2',units='pix', 
    edges=1000, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
centre_cross4_4 = visual.ShapeStim(
    win=win, name='centre_cross4_4', vertices='cross',units='norm', 
    size=(0.03, 0.03),
    ori=0, pos=(0, 0),
    lineWidth=1.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)

# Initialize components for Routine "response"
responseClock = core.Clock()
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
order = randint(1,100);

response1disk = visual.ImageStim(
    win=win,
    name='response1disk', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response3disk = visual.ImageStim(
    win=win,
    name='response3disk', 
    image='response45.png', mask=None,
    ori=0, pos=a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response5disk = visual.ImageStim(
    win=win,
    name='response5disk', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
response7disk = visual.ImageStim(
    win=win,
    name='response7disk', 
    image='response01.png', mask=None,
    ori=0, pos=-a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-5.0)
text_23 = visual.TextStim(win=win, name='text_23',
    text='Please choose the similarity level of the circle with the previously cued circle.\nPlease click and hold to indicate your choice.\n0 => Most similar\n7 => Most different ',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "response_2"
response_2Clock = core.Clock()
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()
response1disk_2 = visual.ImageStim(
    win=win,
    name='response1disk_2', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
response3disk_2 = visual.ImageStim(
    win=win,
    name='response3disk_2', 
    image='response45.png', mask=None,
    ori=0, pos=a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response5disk_2 = visual.ImageStim(
    win=win,
    name='response5disk_2', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response7disk_2 = visual.ImageStim(
    win=win,
    name='response7disk_2', 
    image='response01.png', mask=None,
    ori=0, pos=-a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
rectangle = visual.Rect(
    win=win, name='rectangle',units='norm', 
    width=(0.100, 0.080)[0], height=(0.100, 0.080)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='white', lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
trialnumber = 0;
grey = (.2, .2, .2);


text_25 = visual.TextStim(win=win, name='text_25',
    text='Please click and hold the grey rectangle in the middle of the response numbers to continue',
    font='Arial',
    units='norm', pos=(0, -0.5), height=0.05, wrapWidth=1000, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
text_24 = visual.TextStim(win=win, name='text_24',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);

# Initialize components for Routine "special_trial"
special_trialClock = core.Clock()
text_33 = visual.TextStim(win=win, name='text_33',
    text='SPECIAL TRIAL',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "catch_1"
catch_1Clock = core.Clock()
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()
response1disk_3 = visual.ImageStim(
    win=win,
    name='response1disk_3', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
response3disk_3 = visual.ImageStim(
    win=win,
    name='response3disk_3', 
    image='response45.png', mask=None,
    ori=0, pos=a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response5disk_3 = visual.ImageStim(
    win=win,
    name='response5disk_3', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response7disk_3 = visual.ImageStim(
    win=win,
    name='response7disk_3', 
    image='response01.png', mask=None,
    ori=0, pos=-a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
catchtrialorder = []
for i in range(0,20):
    n = randint(0,324)
    catchtrialorder.append(n)

text_26 = visual.TextStim(win=win, name='text_26',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
rectangle_2 = visual.Rect(
    win=win, name='rectangle_2',units='norm', 
    width=(0.100, 0.080)[0], height=(0.100, 0.080)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='white', lineColorSpace='rgb',
    fillColor=grey, fillColorSpace='rgb',
    opacity=1, depth=-7.0, interpolate=True)

# Initialize components for Routine "response_sum"
response_sumClock = core.Clock()
mouse_11 = event.Mouse(win=win)
x, y = [None, None]
mouse_11.mouseClock = core.Clock()
response1disk_11 = visual.ImageStim(
    win=win,
    name='response1disk_11', 
    image='response67.png', mask=None,
    ori=0, pos=a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
response3disk_11 = visual.ImageStim(
    win=win,
    name='response3disk_11', 
    image='response45.png', mask=None,
    ori=0, pos=a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
response5disk_11 = visual.ImageStim(
    win=win,
    name='response5disk_11', 
    image='response23.png', mask=None,
    ori=0, pos=-a,-a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
response7disk_11 = visual.ImageStim(
    win=win,
    name='response7disk_11', 
    image='response01.png', mask=None,
    ori=0, pos=-a,a, size=b,b,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
rectangle_9 = visual.Rect(
    win=win, name='rectangle_9',units='norm', 
    width=(0.100, 0.080)[0], height=(0.100, 0.080)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='white', lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
trialnumber = 0;

text_51 = visual.TextStim(win=win, name='text_51',
    text='Please click and hold the grey rectangle in the middle of the response numbers to continue',
    font='Arial',
    units='norm', pos=(0, -0.5), height=0.05, wrapWidth=1000, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
text_52 = visual.TextStim(win=win, name='text_52',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.7), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);

# Initialize components for Routine "survey1"
survey1Clock = core.Clock()
copyText_1 = visual.TextStim(win=win, name='copyText_1',
    text=None,
    font='Arial',
    units='norm', pos=(-0.05, 0.1), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
import string
allLetters = list(string.ascii_lowercase+string.digits)
question_4 = visual.TextStim(win=win, name='question_4',
    text='Please answer the next 7 questions to finish the experiment. Please type your reponse and press <ENTER> to submit,\n\n1. Did you have any difficulty in seeing the location of the two circles on each trial? (y or n)\n',
    font='Arial',
    units='norm', pos=(0, 0.5), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
submitanswer = visual.TextStim(win=win, name='submitanswer',
    text='Press enter to submit your answer',
    font='Arial',
    units='norm', pos=(0, -0.9), height=0.08, wrapWidth=3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "survey2"
survey2Clock = core.Clock()
copyText_2 = visual.TextStim(win=win, name='copyText_2',
    text=None,
    font='Arial',
    units='norm', pos=(-0.05, 0.1), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
import string
allLetters = list(string.ascii_lowercase+string.digits)
question = visual.TextStim(win=win, name='question',
    text='2. Did you have any difficulty in knowing what colour the central circles were? (y or n)\n',
    font='Arial',
    units='norm', pos=(0, 0.5), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
submitanswer_2 = visual.TextStim(win=win, name='submitanswer_2',
    text='Press enter to submit your answer',
    font='Arial',
    units='norm', pos=(0, -0.9), height=0.08, wrapWidth=3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "survey3"
survey3Clock = core.Clock()
copyText_3 = visual.TextStim(win=win, name='copyText_3',
    text=None,
    font='Arial',
    units='norm', pos=(-0.05, 0.1), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
import string
allLetters = list(string.ascii_lowercase+string.digits)
question_2 = visual.TextStim(win=win, name='question_2',
    text='3. Did you have any difficulty in knowing what colour the peripheral circles were? (y or n)\n',
    font='Arial',
    units='norm', pos=(0, 0.5), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
submitanswer_3 = visual.TextStim(win=win, name='submitanswer_3',
    text='Press enter to submit your answer',
    font='Arial',
    units='norm', pos=(0, -0.9), height=0.08, wrapWidth=3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "survey_4"
survey_4Clock = core.Clock()
copyText_4 = visual.TextStim(win=win, name='copyText_4',
    text=None,
    font='Arial',
    units='norm', pos=(-0.05, 0.1), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
import string
allLetters = list(string.ascii_lowercase+string.digits)
question_3 = visual.TextStim(win=win, name='question_3',
    text='4. Do you have normal visual acuity, or corrected-to-normal wearing glasses or contact lenses? (y or n)',
    font='Arial',
    units='norm', pos=(0, 0.5), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
submitanswer_4 = visual.TextStim(win=win, name='submitanswer_4',
    text='Press enter to submit your answer',
    font='Arial',
    units='norm', pos=(0, -0.9), height=0.08, wrapWidth=3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "survey5"
survey5Clock = core.Clock()
copyText_5 = visual.TextStim(win=win, name='copyText_5',
    text=None,
    font='Arial',
    units='norm', pos=(-0.05, 0.1), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
import string
allLetters = list(string.ascii_lowercase+string.digits)
question_5 = visual.TextStim(win=win, name='question_5',
    text="5. Do you have any colour vision impairment? (y or n)\nIf yes, please describe the type (e.g) 'red-green colour blind'). ",
    font='Arial',
    units='norm', pos=(0, 0.5), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
submitanswer_5 = visual.TextStim(win=win, name='submitanswer_5',
    text='Press enter to submit your answer',
    font='Arial',
    units='norm', pos=(0, -0.9), height=0.08, wrapWidth=3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "survey6"
survey6Clock = core.Clock()
copyText_6 = visual.TextStim(win=win, name='copyText_6',
    text=None,
    font='Arial',
    units='norm', pos=(-0.05, 0.1), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
import string
allLetters = list(string.ascii_lowercase+string.digits)
question_6 = visual.TextStim(win=win, name='question_6',
    text="6. Did you base your judgements on any of the following stratergies? \n- colour catergories (e.g 'red','blue','green')\n- colour opponecy axes (e.g 'red to green', 'blue to yellow')\n- another stratergy \n- no particular stratergy\nPlease type which stratergy, and if you selected 'another stratergy' please describe it.\n",
    font='Arial',
    units='norm', pos=(0, 0.5), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
submitanswer_6 = visual.TextStim(win=win, name='submitanswer_6',
    text='Press enter to submit your answer',
    font='Arial',
    units='norm', pos=(0, -0.9), height=0.08, wrapWidth=3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "survey7"
survey7Clock = core.Clock()
copyText_7 = visual.TextStim(win=win, name='copyText_7',
    text=None,
    font='Arial',
    units='norm', pos=(-0.05, 0.1), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
import string
allLetters = list(string.ascii_lowercase+string.digits)
question_7 = visual.TextStim(win=win, name='question_7',
    text='Please type any other comments you may have. \n\nYou have now finished the experiment. Thank you for your participation!',
    font='Arial',
    units='norm', pos=(0, 0.5), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
submitanswer_7 = visual.TextStim(win=win, name='submitanswer_7',
    text='Press enter to submit your answer',
    font='Arial',
    units='norm', pos=(0, -0.9), height=0.08, wrapWidth=3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "startup"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
startupComponents = []
for thisComponent in startupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
startupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "startup"-------
while continueRoutine:
    # get current time
    t = startupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=startupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in startupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "startup"-------
for thisComponent in startupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "startup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('colourcodes.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "colourcodes"-------
    continueRoutine = True
    # update component parameters for each repeat
    colourcodesrgb.append(((Colourcodes)))
    #convert colour codes into rgb codes for pavolvia 
    colourcodesrgb[codenum][0]=((colourcodesrgb[codenum][0]/50)-1);
    colourcodesrgb[codenum][1]=((colourcodesrgb[codenum][1]/50)-1);
    colourcodesrgb[codenum][2]=((colourcodesrgb[codenum][2]/50)-1);
    codenum = codenum + 1;
    print(colourcodesrgb[codenum])
    print(colourcodesrgb)
    # import the colourcodes from the excel file and to array
    # keep track of which components have finished
    colourcodesComponents = []
    for thisComponent in colourcodesComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    colourcodesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "colourcodes"-------
    while continueRoutine:
        # get current time
        t = colourcodesClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=colourcodesClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in colourcodesComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "colourcodes"-------
    for thisComponent in colourcodesComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "colourcodes" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# set up handler to look after randomisation of conditions etc
trials_4 = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Stimpositions.xlsx'),
    seed=None, name='trials_4')
thisExp.addLoop(trials_4)  # add the loop to the experiment
thisTrial_4 = trials_4.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
if thisTrial_4 != None:
    for paramName in thisTrial_4:
        exec('{} = thisTrial_4[paramName]'.format(paramName))

for thisTrial_4 in trials_4:
    currentLoop = trials_4
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
    if thisTrial_4 != None:
        for paramName in thisTrial_4:
            exec('{} = thisTrial_4[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "stimpositions"-------
    continueRoutine = True
    # update component parameters for each repeat
    stimpositions.append(((StimulusPos)))
    print(stimpositions)
    # import the colourcodes from the excel file and to array
    # keep track of which components have finished
    stimpositionsComponents = []
    for thisComponent in stimpositionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    stimpositionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stimpositions"-------
    while continueRoutine:
        # get current time
        t = stimpositionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=stimpositionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in stimpositionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stimpositions"-------
    for thisComponent in stimpositionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "stimpositions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_4'


# ------Prepare to start Routine "welcome_instr"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
welcome_instrComponents = [text_54, welcome, key_resp, space]
for thisComponent in welcome_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
welcome_instrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "welcome_instr"-------
while continueRoutine:
    # get current time
    t = welcome_instrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=welcome_instrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_54* updates
    if text_54.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_54.frameNStart = frameN  # exact frame index
        text_54.tStart = t  # local t and not account for scr refresh
        text_54.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_54, 'tStartRefresh')  # time at next scr refresh
        text_54.setAutoDraw(True)
    
    # *welcome* updates
    if welcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome.frameNStart = frameN  # exact frame index
        welcome.tStart = t  # local t and not account for scr refresh
        welcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome, 'tStartRefresh')  # time at next scr refresh
        welcome.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *space* updates
    if space.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        space.frameNStart = frameN  # exact frame index
        space.tStart = t  # local t and not account for scr refresh
        space.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space, 'tStartRefresh')  # time at next scr refresh
        space.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcome_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "welcome_instr"-------
for thisComponent in welcome_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_54.started', text_54.tStartRefresh)
thisExp.addData('text_54.stopped', text_54.tStopRefresh)
thisExp.addData('welcome.started', welcome.tStartRefresh)
thisExp.addData('welcome.stopped', welcome.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "welcome_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent"-------
continueRoutine = True
# update component parameters for each repeat
posx = ((window.innerWidth / 2) * 0.85);
posy = ((window.innerWidth / 2) * 0.85);
key_resp_16.keys = []
key_resp_16.rt = []
_key_resp_16_allKeys = []
image.setPos((-posx, posy))
# keep track of which components have finished
consentComponents = [text_53, key_resp_16, image]
for thisComponent in consentComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent"-------
while continueRoutine:
    # get current time
    t = consentClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consentClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_53* updates
    if text_53.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_53.frameNStart = frameN  # exact frame index
        text_53.tStart = t  # local t and not account for scr refresh
        text_53.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
        text_53.setAutoDraw(True)
    
    # *key_resp_16* updates
    waitOnFlip = False
    if key_resp_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_16.frameNStart = frameN  # exact frame index
        key_resp_16.tStart = t  # local t and not account for scr refresh
        key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
        key_resp_16.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_16.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_16.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_16.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_16_allKeys.extend(theseKeys)
        if len(_key_resp_16_allKeys):
            key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
            key_resp_16.rt = _key_resp_16_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *image* updates
    if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image.frameNStart = frameN  # exact frame index
        image.tStart = t  # local t and not account for scr refresh
        image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
        image.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent"-------
for thisComponent in consentComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_53.started', text_53.tStartRefresh)
thisExp.addData('text_53.stopped', text_53.tStopRefresh)
# check responses
if key_resp_16.keys in ['', [], None]:  # No response was made
    key_resp_16.keys = None
thisExp.addData('key_resp_16.keys',key_resp_16.keys)
if key_resp_16.keys != None:  # we had a response
    thisExp.addData('key_resp_16.rt', key_resp_16.rt)
thisExp.addData('key_resp_16.started', key_resp_16.tStartRefresh)
thisExp.addData('key_resp_16.stopped', key_resp_16.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('image.started', image.tStartRefresh)
thisExp.addData('image.stopped', image.tStopRefresh)
# the Routine "consent" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "stim_response_instr"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_15.keys = []
key_resp_15.rt = []
_key_resp_15_allKeys = []
# keep track of which components have finished
stim_response_instrComponents = [movie_2, key_resp_15, space_14, text_17]
for thisComponent in stim_response_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
stim_response_instrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "stim_response_instr"-------
while continueRoutine:
    # get current time
    t = stim_response_instrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=stim_response_instrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *movie_2* updates
    if movie_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        movie_2.frameNStart = frameN  # exact frame index
        movie_2.tStart = t  # local t and not account for scr refresh
        movie_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(movie_2, 'tStartRefresh')  # time at next scr refresh
        movie_2.setAutoDraw(True)
    
    # *key_resp_15* updates
    waitOnFlip = False
    if key_resp_15.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        key_resp_15.frameNStart = frameN  # exact frame index
        key_resp_15.tStart = t  # local t and not account for scr refresh
        key_resp_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_15, 'tStartRefresh')  # time at next scr refresh
        key_resp_15.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_15.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_15.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_15.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_15.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_15_allKeys.extend(theseKeys)
        if len(_key_resp_15_allKeys):
            key_resp_15.keys = _key_resp_15_allKeys[-1].name  # just the last key pressed
            key_resp_15.rt = _key_resp_15_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *space_14* updates
    if space_14.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        space_14.frameNStart = frameN  # exact frame index
        space_14.tStart = t  # local t and not account for scr refresh
        space_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_14, 'tStartRefresh')  # time at next scr refresh
        space_14.setAutoDraw(True)
    
    # *text_17* updates
    if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_17.frameNStart = frameN  # exact frame index
        text_17.tStart = t  # local t and not account for scr refresh
        text_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
        text_17.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in stim_response_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "stim_response_instr"-------
for thisComponent in stim_response_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
movie_2.stop()
# check responses
if key_resp_15.keys in ['', [], None]:  # No response was made
    key_resp_15.keys = None
thisExp.addData('key_resp_15.keys',key_resp_15.keys)
if key_resp_15.keys != None:  # we had a response
    thisExp.addData('key_resp_15.rt', key_resp_15.rt)
thisExp.addData('key_resp_15.started', key_resp_15.tStartRefresh)
thisExp.addData('key_resp_15.stopped', key_resp_15.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('space_14.started', space_14.tStartRefresh)
thisExp.addData('space_14.stopped', space_14.tStopRefresh)
thisExp.addData('text_17.started', text_17.tStartRefresh)
thisExp.addData('text_17.stopped', text_17.tStopRefresh)
# the Routine "stim_response_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "catch_insrt"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_17.keys = []
key_resp_17.rt = []
_key_resp_17_allKeys = []
# keep track of which components have finished
catch_insrtComponents = [space_15, key_resp_17, movie_3, text_18]
for thisComponent in catch_insrtComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
catch_insrtClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "catch_insrt"-------
while continueRoutine:
    # get current time
    t = catch_insrtClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=catch_insrtClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *space_15* updates
    if space_15.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        space_15.frameNStart = frameN  # exact frame index
        space_15.tStart = t  # local t and not account for scr refresh
        space_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_15, 'tStartRefresh')  # time at next scr refresh
        space_15.setAutoDraw(True)
    
    # *key_resp_17* updates
    waitOnFlip = False
    if key_resp_17.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        key_resp_17.frameNStart = frameN  # exact frame index
        key_resp_17.tStart = t  # local t and not account for scr refresh
        key_resp_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_17, 'tStartRefresh')  # time at next scr refresh
        key_resp_17.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_17.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_17.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_17.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_17.getKeys(keyList=['y', 'n', 'left', 'right', 'space'], waitRelease=False)
        _key_resp_17_allKeys.extend(theseKeys)
        if len(_key_resp_17_allKeys):
            key_resp_17.keys = _key_resp_17_allKeys[-1].name  # just the last key pressed
            key_resp_17.rt = _key_resp_17_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *movie_3* updates
    if movie_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        movie_3.frameNStart = frameN  # exact frame index
        movie_3.tStart = t  # local t and not account for scr refresh
        movie_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(movie_3, 'tStartRefresh')  # time at next scr refresh
        movie_3.setAutoDraw(True)
    
    # *text_18* updates
    if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_18.frameNStart = frameN  # exact frame index
        text_18.tStart = t  # local t and not account for scr refresh
        text_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
        text_18.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in catch_insrtComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "catch_insrt"-------
for thisComponent in catch_insrtComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('space_15.started', space_15.tStartRefresh)
thisExp.addData('space_15.stopped', space_15.tStopRefresh)
# check responses
if key_resp_17.keys in ['', [], None]:  # No response was made
    key_resp_17.keys = None
thisExp.addData('key_resp_17.keys',key_resp_17.keys)
if key_resp_17.keys != None:  # we had a response
    thisExp.addData('key_resp_17.rt', key_resp_17.rt)
thisExp.addData('key_resp_17.started', key_resp_17.tStartRefresh)
thisExp.addData('key_resp_17.stopped', key_resp_17.tStopRefresh)
thisExp.nextEntry()
movie_3.stop()
thisExp.addData('text_18.started', text_18.tStartRefresh)
thisExp.addData('text_18.stopped', text_18.tStopRefresh)
# the Routine "catch_insrt" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "colour_circle_instr_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
colour_circle_instr_2Components = [key_resp_9, space_9, text_9, image_2]
for thisComponent in colour_circle_instr_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
colour_circle_instr_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "colour_circle_instr_2"-------
while continueRoutine:
    # get current time
    t = colour_circle_instr_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=colour_circle_instr_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *space_9* updates
    if space_9.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        space_9.frameNStart = frameN  # exact frame index
        space_9.tStart = t  # local t and not account for scr refresh
        space_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_9, 'tStartRefresh')  # time at next scr refresh
        space_9.setAutoDraw(True)
    
    # *text_9* updates
    if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_9.frameNStart = frameN  # exact frame index
        text_9.tStart = t  # local t and not account for scr refresh
        text_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
        text_9.setAutoDraw(True)
    
    # *image_2* updates
    if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2.frameNStart = frameN  # exact frame index
        image_2.tStart = t  # local t and not account for scr refresh
        image_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
        image_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in colour_circle_instr_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "colour_circle_instr_2"-------
for thisComponent in colour_circle_instr_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_9.keys in ['', [], None]:  # No response was made
    key_resp_9.keys = None
thisExp.addData('key_resp_9.keys',key_resp_9.keys)
if key_resp_9.keys != None:  # we had a response
    thisExp.addData('key_resp_9.rt', key_resp_9.rt)
thisExp.addData('key_resp_9.started', key_resp_9.tStartRefresh)
thisExp.addData('key_resp_9.stopped', key_resp_9.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('space_9.started', space_9.tStartRefresh)
thisExp.addData('space_9.stopped', space_9.tStopRefresh)
thisExp.addData('text_9.started', text_9.tStartRefresh)
thisExp.addData('text_9.stopped', text_9.tStopRefresh)
thisExp.addData('image_2.started', image_2.tStartRefresh)
thisExp.addData('image_2.stopped', image_2.tStopRefresh)
# the Routine "colour_circle_instr_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr_prac"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
instr_pracComponents = [space_10, text_10, key_resp_10]
for thisComponent in instr_pracComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_prac"-------
while continueRoutine:
    # get current time
    t = instr_pracClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_pracClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *space_10* updates
    if space_10.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        space_10.frameNStart = frameN  # exact frame index
        space_10.tStart = t  # local t and not account for scr refresh
        space_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_10, 'tStartRefresh')  # time at next scr refresh
        space_10.setAutoDraw(True)
    
    # *text_10* updates
    if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_10.frameNStart = frameN  # exact frame index
        text_10.tStart = t  # local t and not account for scr refresh
        text_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
        text_10.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_pracComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_prac"-------
for thisComponent in instr_pracComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('space_10.started', space_10.tStartRefresh)
thisExp.addData('space_10.stopped', space_10.tStopRefresh)
thisExp.addData('text_10.started', text_10.tStartRefresh)
thisExp.addData('text_10.stopped', text_10.tStopRefresh)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.addData('key_resp_10.started', key_resp_10.tStartRefresh)
thisExp.addData('key_resp_10.stopped', key_resp_10.tStopRefresh)
thisExp.nextEntry()
# the Routine "instr_prac" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
duringprac = data.TrialHandler(nReps=7, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='duringprac')
thisExp.addLoop(duringprac)  # add the loop to the experiment
thisDuringprac = duringprac.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDuringprac.rgb)
if thisDuringprac != None:
    for paramName in thisDuringprac:
        exec('{} = thisDuringprac[paramName]'.format(paramName))

for thisDuringprac in duringprac:
    currentLoop = duringprac
    # abbreviate parameter names if possible (e.g. rgb = thisDuringprac.rgb)
    if thisDuringprac != None:
        for paramName in thisDuringprac:
            exec('{} = thisDuringprac[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Stim1_display_prac"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # Circle position 
    
    # Set circle position 
    Ecc =  stimpositions[randint(0,92)];
    print(Ecc)
    
    if Ecc == 'onetwo':
        circle1posx = -100
        circle1posy = 100;
    if Ecc == 'onethree':
        circle1posx = -100
        circle1posy = 100;
    if Ecc == 'twoone':
        circle1posx = 100
        circle1posy = 100;
    if Ecc == 'twofour':
        circle1posx = 100
        circle1posy = 100;
    if Ecc == 'threeone':
        circle1posx = -100
        circle1posy = -100;
    if Ecc == 'threefour':
        circle1posx = -100
        circle1posy = -100;
    if Ecc == 'fourtwo':
        circle1posx = 100
        circle1posy = -100;
    if Ecc == 'fourthree':
        circle1posx = 100
        circle1posy = -100;
    
    
    # Randomly select circle colour
    # Convert colour codes for js
    
    Circle1_col = colourcodesrgb[randint(0,92)];
    
    
    
    Circle.setPos((circle1posx,circle1posy))
    Circle.setSize(100,100)
    Circle.setFillColor(Circle1_col)
    Circle.setLineColor(Circle1_col)
    # keep track of which components have finished
    Stim1_display_pracComponents = [Circle, centre_cross4_2]
    for thisComponent in Stim1_display_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Stim1_display_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Stim1_display_prac"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Stim1_display_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Stim1_display_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Circle* updates
        if Circle.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
            # keep track of start time/frame for later
            Circle.frameNStart = frameN  # exact frame index
            Circle.tStart = t  # local t and not account for scr refresh
            Circle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Circle, 'tStartRefresh')  # time at next scr refresh
            Circle.setAutoDraw(True)
        if Circle.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Circle.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                Circle.tStop = t  # not accounting for scr refresh
                Circle.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Circle, 'tStopRefresh')  # time at next scr refresh
                Circle.setAutoDraw(False)
        
        # *centre_cross4_2* updates
        if centre_cross4_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            centre_cross4_2.frameNStart = frameN  # exact frame index
            centre_cross4_2.tStart = t  # local t and not account for scr refresh
            centre_cross4_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(centre_cross4_2, 'tStartRefresh')  # time at next scr refresh
            centre_cross4_2.setAutoDraw(True)
        if centre_cross4_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > centre_cross4_2.tStartRefresh + 0.500-frameTolerance:
                # keep track of stop time/frame for later
                centre_cross4_2.tStop = t  # not accounting for scr refresh
                centre_cross4_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(centre_cross4_2, 'tStopRefresh')  # time at next scr refresh
                centre_cross4_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Stim1_display_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Stim1_display_prac"-------
    for thisComponent in Stim1_display_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData("Circle1_col", Circle1_col);
    thisExp.addData("Ecc", Ecc);
    
    duringprac.addData('Circle.started', Circle.tStartRefresh)
    duringprac.addData('Circle.stopped', Circle.tStopRefresh)
    duringprac.addData('centre_cross4_2.started', centre_cross4_2.tStartRefresh)
    duringprac.addData('centre_cross4_2.stopped', centre_cross4_2.tStopRefresh)
    
    # ------Prepare to start Routine "Stim2_display_prac"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    
    # Set circle position 
    if Ecc == 'onetwo':
        circle1posx = 100
        circle1posy = 100;
    if Ecc == 'onethree':
        circle1posx = -100
        circle1posy = -100;
    if Ecc == 'twoone':
        circle1posx = -100
        circle1posy = 100;
    if Ecc == 'twofour':
        circle1posx = 100
        circle1posy = -100;
    if Ecc == 'threeone':
        circle1posx = -100
        circle1posy = 100;
    if Ecc == 'threefour':
        circle1posx = 100
        circle1posy = -100;
    if Ecc == 'fourtwo':
        circle1posx = 100
        circle1posy = 100;
    if Ecc == 'fourthree':
        circle1posx = -100
        circle1posy = -100;
    
    # Randomly select circle colour
    
    Circle2_col = colourcodesrgb[randint(0,92)];
    #Circle2_col[0]=((Circle2_col[0]/50)-1);
    #Circle2_col[1]=((Circle2_col[1]/50)-1)
    #Circle2_col[2]=((Circle2_col[2]/50)-1);
    
    Circle_4.setPos((circle1posx,circle1posy))
    Circle_4.setSize(100,100)
    Circle_4.setFillColor(Circle2_col)
    Circle_4.setLineColor(Circle2_col)
    # keep track of which components have finished
    Stim2_display_pracComponents = [Circle_4, centre_cross4_3]
    for thisComponent in Stim2_display_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Stim2_display_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Stim2_display_prac"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Stim2_display_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Stim2_display_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Circle_4* updates
        if Circle_4.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
            # keep track of start time/frame for later
            Circle_4.frameNStart = frameN  # exact frame index
            Circle_4.tStart = t  # local t and not account for scr refresh
            Circle_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Circle_4, 'tStartRefresh')  # time at next scr refresh
            Circle_4.setAutoDraw(True)
        if Circle_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Circle_4.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                Circle_4.tStop = t  # not accounting for scr refresh
                Circle_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Circle_4, 'tStopRefresh')  # time at next scr refresh
                Circle_4.setAutoDraw(False)
        
        # *centre_cross4_3* updates
        if centre_cross4_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            centre_cross4_3.frameNStart = frameN  # exact frame index
            centre_cross4_3.tStart = t  # local t and not account for scr refresh
            centre_cross4_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(centre_cross4_3, 'tStartRefresh')  # time at next scr refresh
            centre_cross4_3.setAutoDraw(True)
        if centre_cross4_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > centre_cross4_3.tStartRefresh + 0.500-frameTolerance:
                # keep track of stop time/frame for later
                centre_cross4_3.tStop = t  # not accounting for scr refresh
                centre_cross4_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(centre_cross4_3, 'tStopRefresh')  # time at next scr refresh
                centre_cross4_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Stim2_display_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Stim2_display_prac"-------
    for thisComponent in Stim2_display_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData("Circle2_col", Circle2_col);
    thisExp.addData("Ecc", Ecc);
    
    duringprac.addData('Circle_4.started', Circle_4.tStartRefresh)
    duringprac.addData('Circle_4.stopped', Circle_4.tStopRefresh)
    duringprac.addData('centre_cross4_3.started', centre_cross4_3.tStartRefresh)
    duringprac.addData('centre_cross4_3.stopped', centre_cross4_3.tStopRefresh)
    
    # ------Prepare to start Routine "response_prac"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_5
    mouse_5.clicked_name = []
    gotValidClick = False  # until a click is received
    
    event.clearEvents()
    
    # Count trial numbers
    
    pracnumber =  pracnumber + 1;
    
    # Randomly select circle colour
    
    Colour_2 = randint(1,9);
    
    # Set circle colour
    if Colour_2 == 1:
        Circle2_col = (1, -1, -1);
    elif Colour_2 == 2:
        Circle2_col = (1, 0.33, -1);
    elif Colour_2 == 3:
        Circle2_col = (0.32, 1, -1);
    elif Colour_2 == 4:
        Circle2_col = (-1, 1, -1);
    elif Colour_2 == 5:
        Circle2_col = (-1, 1, 0.33);
    elif Colour_2 == 6:
        Circle2_col = (-1, 0.32, 1);
    elif Colour_2 == 7:
        Circle2_col = (-1, -1, 1);
    elif Colour_2 == 8:
        Circle2_col = (0.33, -1, 1);
    elif Colour_2 == 9:
        Circle2_col = (1, -1, 0.33);
    
    
    
    # keep track of which components have finished
    response_pracComponents = [mouse_5, response1disk_5, response3disk_5, response5disk_5, response7disk_5, text_29]
    for thisComponent in response_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    response_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "response_prac"-------
    while continueRoutine:
        # get current time
        t = response_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=response_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse_5* updates
        if mouse_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            mouse_5.frameNStart = frameN  # exact frame index
            mouse_5.tStart = t  # local t and not account for scr refresh
            mouse_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_5, 'tStartRefresh')  # time at next scr refresh
            mouse_5.status = STARTED
            mouse_5.mouseClock.reset()
            prevButtonState = mouse_5.getPressed()  # if button is down already this ISN'T a new click
        if mouse_5.status == STARTED:  # only update if started and not finished!
            buttons = mouse_5.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [response1disk_5,response3disk_5,response5disk_5,response7disk_5,]:
                        if obj.contains(mouse_5):
                            gotValidClick = True
                            mouse_5.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        # Similarity for feedback
        mousexpos=mouse.getPos()[0]  # get x position of mouse
        mouseypos=mouse.getPos()[1]  # get y position of mouse
        
        # Triangle 7     
        x11d = a - b/2;
        y11d = a + b/2;
        x12d = a + b/2;
        y12d = a + b/2;
        x13d = a - b/2;
        y13d = a - b/2;
        a1d = ((y12d - y13d)*(mousexpos - x13d) + (x13d - x12d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
        b1d = ((y13d - y11d)*(mousexpos - x13d) + (x11d - x13d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
        c1d = 1 - a1d - b1d;
        
        # Triangle 6 
        x21d = a - b/2;
        y21d = a - b/2
        x22d = a + b/2
        y22d = a + b/2
        x23d = a + b/2
        y23d = a - b/2
        a2d = ((y22d - y23d)*(mousexpos - x23d) + (x23d - x22d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
        b2d = ((y23d - y21d)*(mousexpos - x23d) + (x21d - x23d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
        c2d = 1 - a2d - b2d
        
        # Triangle 5
        x31d = a - b/2
        y31d = -(a - b/2)
        x32d = a + b/2
        y32d = -(a - b/2) 
        x33d = a + b/2
        y33d = -(a + b/2)
        a3d = ((y32d - y33d)*(mousexpos - x33d) + (x33d - x32d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
        b3d = ((y33d - y31d)*(mousexpos - x33d) + (x31d - x33d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
        c3d = 1 - a3d - b3d
        
        
        # Triangle 4 
        x41d = a - b/2
        y41d = -(a - b/2)
        x42d = a + b/2
        y42d = -(a + b/2)
        x43d = a - b/2
        y43d = -(a + b/2)
        a4d = ((y42d - y43d)*(mousexpos - x43d) + (x43d - x42d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
        b4d = ((y43d - y41d)*(mousexpos - x43d) + (x41d - x43d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
        c4d = 1 - a4d - b4d
        
        #  Triangle 3
        x51d = -(a + b/2)
        y51d = -(a + b/2)
        x52d = -(a - b/2)
        y52d = -(a - b/2)
        x53d = -(a - b/2)
        y53d = -(a + b/2)
        a5d = ((y52d - y53d)*(mousexpos - x53d) + (x53d - x52d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
        b5d = ((y53d - y51d)*(mousexpos - x53d) + (x51d - x53d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
        c5d = 1 - a5d - b5d
        
        # Triangle 2
        x61d = -(a+b/2)
        y61d = -(a-b/2)
        x62d = -(a-b/2)
        y62d = -(a-b/2)
        x63d = -(a+b/2)
        y63d = - (a+b/2)
        a6d = ((y62d - y63d)*(mousexpos - x63d) + (x63d - x62d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
        b6d = ((y63d - y61d)*(mousexpos - x63d) + (x61d - x63d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
        c6d = 1 - a6d - b6d
        
        # Triangle 1 
        
        x71d = -(a + b/2)
        y71d = a + b/2
        x72d = -(a - b/2)
        y72d = a - b/2
        x73d = -(a + b/2)
        y73d = a - b/2
        a7d = ((y72d - y73d)*(mousexpos - x73d) + (x73d - x72d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
        b7d = ((y73d - y71d)*(mousexpos - x73d) + (x71d - x73d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
        c7d = 1 - a7d - b7d
        
        
        # Triangle 0 
        x81d = -(a + b/2)
        y81d = a + b/2
        x82d = -(a - b/2)
        y82d = a + b/2
        x83d = -(a - b/2)
        y83d = a - b/2
        a8d = ((y82d - y83d)*(mousexpos - x83d) + (x83d - x82d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
        b8d = ((y83d - y81d)*(mousexpos - x83d) + (x81d - x83d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
        c8d = 1 - a8d - b8d
        
        
        if (0 <= a1d <= 1) and (0 <= b1d <= 1) and (0 <= c1d <= 1):
            similarity = 7
            responsenumber = 7 
        elif (0 <= a2d <= 1) and (0 <= b2d <= 1) and (0 <= c2d <= 1):
            similarity = 6
            responsenumber = 6
        elif (0 <= a3d <= 1) and (0 <= b3d <= 1) and (0 <= c3d <= 1):
            similarity = 5
            responsenumber = 5
        elif (0 <= a4d <= 1) and (0 <= b4d <= 1) and (0 <= c4d <= 1):
            similarity = 4
            responsenumber = 4
        elif (0 <= a5d <= 1) and (0 <= b5d <= 1) and (0 <= c5d <= 1):
            similarity = 3
            responsenumber = 3
        elif (0 <= a6d <= 1) and (0 <= b6d <= 1) and (0 <= c6d <= 1):
            similarity = 2
            responsenumber = 2
        elif (0 <= a7d <= 1) and (0 <= b7d <= 1) and (0 <= c7d <= 1):
            similarity = 1
            responsenumber = 1
        elif (0 <= a8d <= 1) and (0 <= b8d <= 1) and (0 <= c8d <= 1):
            similarity = 0
            responsenumber = 0
        
        # *response1disk_5* updates
        if response1disk_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response1disk_5.frameNStart = frameN  # exact frame index
            response1disk_5.tStart = t  # local t and not account for scr refresh
            response1disk_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response1disk_5, 'tStartRefresh')  # time at next scr refresh
            response1disk_5.setAutoDraw(True)
        
        # *response3disk_5* updates
        if response3disk_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response3disk_5.frameNStart = frameN  # exact frame index
            response3disk_5.tStart = t  # local t and not account for scr refresh
            response3disk_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response3disk_5, 'tStartRefresh')  # time at next scr refresh
            response3disk_5.setAutoDraw(True)
        
        # *response5disk_5* updates
        if response5disk_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response5disk_5.frameNStart = frameN  # exact frame index
            response5disk_5.tStart = t  # local t and not account for scr refresh
            response5disk_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response5disk_5, 'tStartRefresh')  # time at next scr refresh
            response5disk_5.setAutoDraw(True)
        
        # *response7disk_5* updates
        if response7disk_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response7disk_5.frameNStart = frameN  # exact frame index
            response7disk_5.tStart = t  # local t and not account for scr refresh
            response7disk_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response7disk_5, 'tStartRefresh')  # time at next scr refresh
            response7disk_5.setAutoDraw(True)
        
        # *text_29* updates
        if text_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_29.frameNStart = frameN  # exact frame index
            text_29.tStart = t  # local t and not account for scr refresh
            text_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_29, 'tStartRefresh')  # time at next scr refresh
            text_29.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in response_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "response_prac"-------
    for thisComponent in response_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for duringprac (TrialHandler)
    x, y = mouse_5.getPos()
    buttons = mouse_5.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [response1disk_5,response3disk_5,response5disk_5,response7disk_5,]:
            if obj.contains(mouse_5):
                gotValidClick = True
                mouse_5.clicked_name.append(obj.name)
    duringprac.addData('mouse_5.x', x)
    duringprac.addData('mouse_5.y', y)
    duringprac.addData('mouse_5.leftButton', buttons[0])
    duringprac.addData('mouse_5.midButton', buttons[1])
    duringprac.addData('mouse_5.rightButton', buttons[2])
    if len(mouse_5.clicked_name):
        duringprac.addData('mouse_5.clicked_name', mouse_5.clicked_name[0])
    duringprac.addData('mouse_5.started', mouse_5.tStartRefresh)
    duringprac.addData('mouse_5.stopped', mouse_5.tStopRefresh)
    # Save similarity rating 
    mousexpos=mouse.getPos()[0]  # get x position of mouse
    mouseypos=mouse.getPos()[1]  # get y position of mouse
    
    # Triangle 7     
    x11d = a - b/2;
    y11d = a + b/2;
    x12d = a + b/2;
    y12d = a + b/2;
    x13d = a - b/2;
    y13d = a - b/2;
    a1d = ((y12d - y13d)*(mousexpos - x13d) + (x13d - x12d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
    b1d = ((y13d - y11d)*(mousexpos - x13d) + (x11d - x13d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
    c1d = 1 - a1d - b1d;
    
    # Triangle 6 
    x21d = a - b/2;
    y21d = a - b/2
    x22d = a + b/2
    y22d = a + b/2
    x23d = a + b/2
    y23d = a - b/2
    a2d = ((y22d - y23d)*(mousexpos - x23d) + (x23d - x22d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
    b2d = ((y23d - y21d)*(mousexpos - x23d) + (x21d - x23d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
    c2d = 1 - a2d - b2d
    
    # Triangle 5
    x31d = a - b/2
    y31d = -(a - b/2)
    x32d = a + b/2
    y32d = -(a - b/2) 
    x33d = a + b/2
    y33d = -(a + b/2)
    a3d = ((y32d - y33d)*(mousexpos - x33d) + (x33d - x32d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
    b3d = ((y33d - y31d)*(mousexpos - x33d) + (x31d - x33d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
    c3d = 1 - a3d - b3d
    
    
    # Triangle 4 
    x41d = a - b/2
    y41d = -(a - b/2)
    x42d = a + b/2
    y42d = -(a + b/2)
    x43d = a - b/2
    y43d = -(a + b/2)
    a4d = ((y42d - y43d)*(mousexpos - x43d) + (x43d - x42d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
    b4d = ((y43d - y41d)*(mousexpos - x43d) + (x41d - x43d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
    c4d = 1 - a4d - b4d
    
    #  Triangle 3
    x51d = -(a + b/2)
    y51d = -(a + b/2)
    x52d = -(a - b/2)
    y52d = -(a - b/2)
    x53d = -(a - b/2)
    y53d = -(a + b/2)
    a5d = ((y52d - y53d)*(mousexpos - x53d) + (x53d - x52d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
    b5d = ((y53d - y51d)*(mousexpos - x53d) + (x51d - x53d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
    c5d = 1 - a5d - b5d
    
    # Triangle 2
    x61d = -(a+b/2)
    y61d = -(a-b/2)
    x62d = -(a-b/2)
    y62d = -(a-b/2)
    x63d = -(a+b/2)
    y63d = - (a+b/2)
    a6d = ((y62d - y63d)*(mousexpos - x63d) + (x63d - x62d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
    b6d = ((y63d - y61d)*(mousexpos - x63d) + (x61d - x63d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
    c6d = 1 - a6d - b6d
    
    # Triangle 1 
    
    x71d = -(a + b/2)
    y71d = a + b/2
    x72d = -(a - b/2)
    y72d = a - b/2
    x73d = -(a + b/2)
    y73d = a - b/2
    a7d = ((y72d - y73d)*(mousexpos - x73d) + (x73d - x72d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
    b7d = ((y73d - y71d)*(mousexpos - x73d) + (x71d - x73d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
    c7d = 1 - a7d - b7d
    
    
    # Triangle 0 
    x81d = -(a + b/2)
    y81d = a + b/2
    x82d = -(a - b/2)
    y82d = a + b/2
    x83d = -(a - b/2)
    y83d = a - b/2
    a8d = ((y82d - y83d)*(mousexpos - x83d) + (x83d - x82d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
    b8d = ((y83d - y81d)*(mousexpos - x83d) + (x81d - x83d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
    c8d = 1 - a8d - b8d
    
    
    if (0 <= a1d <= 1) and (0 <= b1d <= 1) and (0 <= c1d <= 1):
        similarity = 7
    elif (0 <= a2d <= 1) and (0 <= b2d <= 1) and (0 <= c2d <= 1):
        similarity = 6
    elif (0 <= a3d <= 1) and (0 <= b3d <= 1) and (0 <= c3d <= 1):
        similarity = 5
    elif (0 <= a4d <= 1) and (0 <= b4d <= 1) and (0 <= c4d <= 1):
        similarity = 4
    elif (0 <= a5d <= 1) and (0 <= b5d <= 1) and (0 <= c5d <= 1):
        similarity = 3
    elif (0 <= a6d <= 1) and (0 <= b6d <= 1) and (0 <= c6d <= 1):
        similarity = 2
    elif (0 <= a7d <= 1) and (0 <= b7d <= 1) and (0 <= c7d <= 1):
        similarity = 1
    elif (0 <= a8d <= 1) and (0 <= b8d <= 1) and (0 <= c8d <= 1):
        similarity = 0
    
    
    thisExp.addData("similarity", similarity);
    thisExp.addData("response_time", mouse_5.mouseClock.getTime())  # Save time relative to start of mouse
    
    
    duringprac.addData('response1disk_5.started', response1disk_5.tStartRefresh)
    duringprac.addData('response1disk_5.stopped', response1disk_5.tStopRefresh)
    duringprac.addData('response3disk_5.started', response3disk_5.tStartRefresh)
    duringprac.addData('response3disk_5.stopped', response3disk_5.tStopRefresh)
    duringprac.addData('response5disk_5.started', response5disk_5.tStartRefresh)
    duringprac.addData('response5disk_5.stopped', response5disk_5.tStopRefresh)
    duringprac.addData('response7disk_5.started', response7disk_5.tStartRefresh)
    duringprac.addData('response7disk_5.stopped', response7disk_5.tStopRefresh)
    duringprac.addData('text_29.started', text_29.tStartRefresh)
    duringprac.addData('text_29.stopped', text_29.tStopRefresh)
    # the Routine "response_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "responseprac_feedback"-------
    continueRoutine = True
    routineTimer.add(4.000000)
    # update component parameters for each repeat
    if 0 <= responsenumber <= 1:
        responsefeedback = f'You selected {responsenumber}'
        responsefeedback1 = f'{responsenumber} indicates you found the colours very similar';
    
    if 2 <= responsenumber <= 3:
        responsefeedback = f'You selected {responsenumber}'
        responsefeedback1 = f'{responsenumber} indicates you found the colours similar';
    
    
    if 4 <= responsenumber  <= 5:
        responsefeedback = f'You selected {responsenumber}' ;
        responsefeedback1 = f'{responsenumber} indicates you found the colours different';
    
    if 6 <= responsenumber  <= 7:
        responsefeedback = f'You selected {responsenumber}' ;
        responsefeedback1 = f'{responsenumber} indicates you found the colours very different';
    
    
    text_55.setText(responsefeedback)
    text_56.setText(responsefeedback1)
    # keep track of which components have finished
    responseprac_feedbackComponents = [text_55, text_56]
    for thisComponent in responseprac_feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    responseprac_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "responseprac_feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = responseprac_feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=responseprac_feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if 0 <= responsenumber <= 3:
            responsefeedback = f'You selected {responsenumber} indicating you found the colours are similar';
        
        
        if 4 <= responsenumber  <= 7:
            responsefeedback = f'You selected {responsenumber} indicating you found the colours are dissimilar';
        
        
        
        # *text_55* updates
        if text_55.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_55.frameNStart = frameN  # exact frame index
            text_55.tStart = t  # local t and not account for scr refresh
            text_55.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_55, 'tStartRefresh')  # time at next scr refresh
            text_55.setAutoDraw(True)
        if text_55.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_55.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_55.tStop = t  # not accounting for scr refresh
                text_55.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_55, 'tStopRefresh')  # time at next scr refresh
                text_55.setAutoDraw(False)
        
        # *text_56* updates
        if text_56.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_56.frameNStart = frameN  # exact frame index
            text_56.tStart = t  # local t and not account for scr refresh
            text_56.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_56, 'tStartRefresh')  # time at next scr refresh
            text_56.setAutoDraw(True)
        if text_56.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_56.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_56.tStop = t  # not accounting for scr refresh
                text_56.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_56, 'tStopRefresh')  # time at next scr refresh
                text_56.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in responseprac_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "responseprac_feedback"-------
    for thisComponent in responseprac_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    duringprac.addData('text_55.started', text_55.tStartRefresh)
    duringprac.addData('text_55.stopped', text_55.tStopRefresh)
    duringprac.addData('text_56.started', text_56.tStartRefresh)
    duringprac.addData('text_56.stopped', text_56.tStopRefresh)
    
    # ------Prepare to start Routine "summary_prac"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_10
    mouse_10.clicked_name = []
    gotValidClick = False  # until a click is received
    rectangle_8.setFillColor(grey)
    pracnumbertext = f'You have finished {pracnumber} of 7 practice questions';
    
    event.clearEvents()
    text_50.setText(pracnumbertext)
    # keep track of which components have finished
    summary_pracComponents = [mouse_10, response1disk_10, response3disk_10, response5disk_10, response7disk_10, rectangle_8, text_49, text_50]
    for thisComponent in summary_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    summary_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "summary_prac"-------
    while continueRoutine:
        # get current time
        t = summary_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=summary_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse_10* updates
        if mouse_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_10.frameNStart = frameN  # exact frame index
            mouse_10.tStart = t  # local t and not account for scr refresh
            mouse_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_10, 'tStartRefresh')  # time at next scr refresh
            mouse_10.status = STARTED
            mouse_10.mouseClock.reset()
            prevButtonState = mouse_10.getPressed()  # if button is down already this ISN'T a new click
        if mouse_10.status == STARTED:  # only update if started and not finished!
            buttons = mouse_10.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [rectangle_8]:
                        if obj.contains(mouse_10):
                            gotValidClick = True
                            mouse_10.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *response1disk_10* updates
        if response1disk_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response1disk_10.frameNStart = frameN  # exact frame index
            response1disk_10.tStart = t  # local t and not account for scr refresh
            response1disk_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response1disk_10, 'tStartRefresh')  # time at next scr refresh
            response1disk_10.setAutoDraw(True)
        
        # *response3disk_10* updates
        if response3disk_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response3disk_10.frameNStart = frameN  # exact frame index
            response3disk_10.tStart = t  # local t and not account for scr refresh
            response3disk_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response3disk_10, 'tStartRefresh')  # time at next scr refresh
            response3disk_10.setAutoDraw(True)
        
        # *response5disk_10* updates
        if response5disk_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response5disk_10.frameNStart = frameN  # exact frame index
            response5disk_10.tStart = t  # local t and not account for scr refresh
            response5disk_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response5disk_10, 'tStartRefresh')  # time at next scr refresh
            response5disk_10.setAutoDraw(True)
        
        # *response7disk_10* updates
        if response7disk_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response7disk_10.frameNStart = frameN  # exact frame index
            response7disk_10.tStart = t  # local t and not account for scr refresh
            response7disk_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response7disk_10, 'tStartRefresh')  # time at next scr refresh
            response7disk_10.setAutoDraw(True)
        
        # *rectangle_8* updates
        if rectangle_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rectangle_8.frameNStart = frameN  # exact frame index
            rectangle_8.tStart = t  # local t and not account for scr refresh
            rectangle_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rectangle_8, 'tStartRefresh')  # time at next scr refresh
            rectangle_8.setAutoDraw(True)
        
        # *text_49* updates
        if text_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_49.frameNStart = frameN  # exact frame index
            text_49.tStart = t  # local t and not account for scr refresh
            text_49.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_49, 'tStartRefresh')  # time at next scr refresh
            text_49.setAutoDraw(True)
        
        # *text_50* updates
        if text_50.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_50.frameNStart = frameN  # exact frame index
            text_50.tStart = t  # local t and not account for scr refresh
            text_50.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_50, 'tStartRefresh')  # time at next scr refresh
            text_50.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in summary_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "summary_prac"-------
    for thisComponent in summary_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for duringprac (TrialHandler)
    x, y = mouse_10.getPos()
    buttons = mouse_10.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [rectangle_8]:
            if obj.contains(mouse_10):
                gotValidClick = True
                mouse_10.clicked_name.append(obj.name)
    duringprac.addData('mouse_10.x', x)
    duringprac.addData('mouse_10.y', y)
    duringprac.addData('mouse_10.leftButton', buttons[0])
    duringprac.addData('mouse_10.midButton', buttons[1])
    duringprac.addData('mouse_10.rightButton', buttons[2])
    if len(mouse_10.clicked_name):
        duringprac.addData('mouse_10.clicked_name', mouse_10.clicked_name[0])
    duringprac.addData('mouse_10.started', mouse_10.tStartRefresh)
    duringprac.addData('mouse_10.stopped', mouse_10.tStopRefresh)
    duringprac.addData('response1disk_10.started', response1disk_10.tStartRefresh)
    duringprac.addData('response1disk_10.stopped', response1disk_10.tStopRefresh)
    duringprac.addData('response3disk_10.started', response3disk_10.tStartRefresh)
    duringprac.addData('response3disk_10.stopped', response3disk_10.tStopRefresh)
    duringprac.addData('response5disk_10.started', response5disk_10.tStartRefresh)
    duringprac.addData('response5disk_10.stopped', response5disk_10.tStopRefresh)
    duringprac.addData('response7disk_10.started', response7disk_10.tStartRefresh)
    duringprac.addData('response7disk_10.stopped', response7disk_10.tStopRefresh)
    duringprac.addData('rectangle_8.started', rectangle_8.tStartRefresh)
    duringprac.addData('rectangle_8.stopped', rectangle_8.tStopRefresh)
    duringprac.addData('text_49.started', text_49.tStartRefresh)
    duringprac.addData('text_49.stopped', text_49.tStopRefresh)
    duringprac.addData('text_50.started', text_50.tStartRefresh)
    duringprac.addData('text_50.stopped', text_50.tStopRefresh)
    # the Routine "summary_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "special_trial_prac"-------
    continueRoutine = True
    routineTimer.add(0.250000)
    # update component parameters for each repeat
    # keep track of which components have finished
    special_trial_pracComponents = [text_36]
    for thisComponent in special_trial_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    special_trial_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "special_trial_prac"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = special_trial_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=special_trial_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_36* updates
        if text_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_36.frameNStart = frameN  # exact frame index
            text_36.tStart = t  # local t and not account for scr refresh
            text_36.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_36, 'tStartRefresh')  # time at next scr refresh
            text_36.setAutoDraw(True)
        if text_36.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_36.tStartRefresh + .250-frameTolerance:
                # keep track of stop time/frame for later
                text_36.tStop = t  # not accounting for scr refresh
                text_36.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_36, 'tStopRefresh')  # time at next scr refresh
                text_36.setAutoDraw(False)
        # Run catch trials 
        if not ((pracnumber == catchtrialorderprac[0]) or (pracnumber == catchtrialorderprac[1])):
            continueRoutine=False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in special_trial_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "special_trial_prac"-------
    for thisComponent in special_trial_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    duringprac.addData('text_36.started', text_36.tStartRefresh)
    duringprac.addData('text_36.stopped', text_36.tStopRefresh)
    
    # ------Prepare to start Routine "catch_prac"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_7
    mouse_7.clicked_name = []
    gotValidClick = False  # until a click is received
    # Select random number for catch trial
    
    
    
    catchtext = f'SPECIAL TRIAL PLEASE JUST CLICK AND HOLD {catchnumberprac}'
    
    event.clearEvents()
    text_32.setText(catchtext)
    rectangle_5.setFillColor(grey)
    # keep track of which components have finished
    catch_pracComponents = [mouse_7, response1disk_7, response3disk_7, response5disk_7, response7disk_7, text_32, rectangle_5]
    for thisComponent in catch_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    catch_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "catch_prac"-------
    while continueRoutine:
        # get current time
        t = catch_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=catch_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse_7* updates
        if mouse_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_7.frameNStart = frameN  # exact frame index
            mouse_7.tStart = t  # local t and not account for scr refresh
            mouse_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_7, 'tStartRefresh')  # time at next scr refresh
            mouse_7.status = STARTED
            mouse_7.mouseClock.reset()
            prevButtonState = mouse_7.getPressed()  # if button is down already this ISN'T a new click
        if mouse_7.status == STARTED:  # only update if started and not finished!
            buttons = mouse_7.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [response1disk_7,response3disk_7,response5disk_7,response7disk_7]:
                        if obj.contains(mouse_7):
                            gotValidClick = True
                            mouse_7.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *response1disk_7* updates
        if response1disk_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response1disk_7.frameNStart = frameN  # exact frame index
            response1disk_7.tStart = t  # local t and not account for scr refresh
            response1disk_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response1disk_7, 'tStartRefresh')  # time at next scr refresh
            response1disk_7.setAutoDraw(True)
        
        # *response3disk_7* updates
        if response3disk_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response3disk_7.frameNStart = frameN  # exact frame index
            response3disk_7.tStart = t  # local t and not account for scr refresh
            response3disk_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response3disk_7, 'tStartRefresh')  # time at next scr refresh
            response3disk_7.setAutoDraw(True)
        
        # *response5disk_7* updates
        if response5disk_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response5disk_7.frameNStart = frameN  # exact frame index
            response5disk_7.tStart = t  # local t and not account for scr refresh
            response5disk_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response5disk_7, 'tStartRefresh')  # time at next scr refresh
            response5disk_7.setAutoDraw(True)
        
        # *response7disk_7* updates
        if response7disk_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response7disk_7.frameNStart = frameN  # exact frame index
            response7disk_7.tStart = t  # local t and not account for scr refresh
            response7disk_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response7disk_7, 'tStartRefresh')  # time at next scr refresh
            response7disk_7.setAutoDraw(True)
        # Run catch trials 
        if not ((pracnumber == catchtrialorderprac[0]) or (pracnumber == catchtrialorderprac[1])):
            continueRoutine=False
        
        # *text_32* updates
        if text_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_32.frameNStart = frameN  # exact frame index
            text_32.tStart = t  # local t and not account for scr refresh
            text_32.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_32, 'tStartRefresh')  # time at next scr refresh
            text_32.setAutoDraw(True)
        
        # *rectangle_5* updates
        if rectangle_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rectangle_5.frameNStart = frameN  # exact frame index
            rectangle_5.tStart = t  # local t and not account for scr refresh
            rectangle_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rectangle_5, 'tStartRefresh')  # time at next scr refresh
            rectangle_5.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in catch_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "catch_prac"-------
    for thisComponent in catch_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for duringprac (TrialHandler)
    x, y = mouse_7.getPos()
    buttons = mouse_7.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [response1disk_7,response3disk_7,response5disk_7,response7disk_7]:
            if obj.contains(mouse_7):
                gotValidClick = True
                mouse_7.clicked_name.append(obj.name)
    duringprac.addData('mouse_7.x', x)
    duringprac.addData('mouse_7.y', y)
    duringprac.addData('mouse_7.leftButton', buttons[0])
    duringprac.addData('mouse_7.midButton', buttons[1])
    duringprac.addData('mouse_7.rightButton', buttons[2])
    if len(mouse_7.clicked_name):
        duringprac.addData('mouse_7.clicked_name', mouse_7.clicked_name[0])
    duringprac.addData('mouse_7.started', mouse_7.tStartRefresh)
    duringprac.addData('mouse_7.stopped', mouse_7.tStopRefresh)
    duringprac.addData('response1disk_7.started', response1disk_7.tStartRefresh)
    duringprac.addData('response1disk_7.stopped', response1disk_7.tStopRefresh)
    duringprac.addData('response3disk_7.started', response3disk_7.tStartRefresh)
    duringprac.addData('response3disk_7.stopped', response3disk_7.tStopRefresh)
    duringprac.addData('response5disk_7.started', response5disk_7.tStartRefresh)
    duringprac.addData('response5disk_7.stopped', response5disk_7.tStopRefresh)
    duringprac.addData('response7disk_7.started', response7disk_7.tStartRefresh)
    duringprac.addData('response7disk_7.stopped', response7disk_7.tStopRefresh)
    # Save similarity rating 
    mousexpos=mouse.getPos()[0]  # get x position of mouse
    mouseypos=mouse.getPos()[1]  # get y position of mouse
    
    # Triangle 7
    x11d = a - b/2;
    y11d = a + b/2;
    x12d = a + b/2;
    y12d = a + b/2;
    x13d = a - b/2;
    y13d = a - b/2;
    a1d = ((y12d - y13d)*(mousexpos - x13d) + (x13d - x12d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
    b1d = ((y13d - y11d)*(mousexpos - x13d) + (x11d - x13d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
    c1d = 1 - a1d - b1d;
    
    # Triangle 6 
    x21d = a - b/2;
    y21d = a - b/2
    x22d = a + b/2
    y22d = a + b/2
    x23d = a + b/2
    y23d = a - b/2
    a2d = ((y22d - y23d)*(mousexpos - x23d) + (x23d - x22d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
    b2d = ((y23d - y21d)*(mousexpos - x23d) + (x21d - x23d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
    c2d = 1 - a2d - b2d
    
    # Triangle 5
    x31d = a - b/2
    y31d = -(a - b/2)
    x32d = a + b/2
    y32d = -(a - b/2) 
    x33d = a + b/2
    y33d = -(a + b/2)
    a3d = ((y32d - y33d)*(mousexpos - x33d) + (x33d - x32d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
    b3d = ((y33d - y31d)*(mousexpos - x33d) + (x31d - x33d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
    c3d = 1 - a3d - b3d
    
    
    # Triangle 4 
    x41d = a - b/2
    y41d = -(a - b/2)
    x42d = a + b/2
    y42d = -(a + b/2)
    x43d = a - b/2
    y43d = -(a + b/2)
    a4d = ((y42d - y43d)*(mousexpos - x43d) + (x43d - x42d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
    b4d = ((y43d - y41d)*(mousexpos - x43d) + (x41d - x43d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
    c4d = 1 - a4d - b4d
    
    #  Triangle 3
    x51d = -(a + b/2)
    y51d = -(a + b/2)
    x52d = -(a - b/2)
    y52d = -(a - b/2)
    x53d = -(a - b/2)
    y53d = -(a + b/2)
    a5d = ((y52d - y53d)*(mousexpos - x53d) + (x53d - x52d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
    b5d = ((y53d - y51d)*(mousexpos - x53d) + (x51d - x53d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
    c5d = 1 - a5d - b5d
    
    # Triangle 2
    x61d = -(a+b/2)
    y61d = -(a-b/2)
    x62d = -(a-b/2)
    y62d = -(a-b/2)
    x63d = -(a+b/2)
    y63d = - (a+b/2)
    a6d = ((y62d - y63d)*(mousexpos - x63d) + (x63d - x62d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
    b6d = ((y63d - y61d)*(mousexpos - x63d) + (x61d - x63d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
    c6d = 1 - a6d - b6d
    
    # Triangle 1 
    
    x71d = -(a + b/2)
    y71d = a + b/2
    x72d = -(a - b/2)
    y72d = a - b/2
    x73d = -(a + b/2)
    y73d = a - b/2
    a7d = ((y72d - y73d)*(mousexpos - x73d) + (x73d - x72d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
    b7d = ((y73d - y71d)*(mousexpos - x73d) + (x71d - x73d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
    c7d = 1 - a7d - b7d
    
    
    # Triangle 0 
    x81d = -(a + b/2)
    y81d = a + b/2
    x82d = -(a - b/2)
    y82d = a + b/2
    x83d = -(a - b/2)
    y83d = a - b/2
    a8d = ((y82d - y83d)*(mousexpos - x83d) + (x83d - x82d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
    b8d = ((y83d - y81d)*(mousexpos - x83d) + (x81d - x83d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
    c8d = 1 - a8d - b8d
    
    if (0 <= a1d <= 1) and (0 <= b1d <= 1) and (0 <= c1d <= 1):
        catchprac = 7
        thisExp.addData("catchprac", catchprac);
    elif (0 <= a2d <= 1) and (0 <= b2d <= 1) and (0 <= c2d <= 1):
        catchprac = 6
        thisExp.addData("catchprac", catchprac);
    elif (0 <= a3d <= 1) and (0 <= b3d <= 1) and (0 <= c3d <= 1):
        catchprac = 5
        thisExp.addData("catchprac", catchprac);
    elif (0 <= a4d <= 1) and (0 <= b4d <= 1) and (0 <= c4d <= 1):
        catchprac = 4
        thisExp.addData("catchprac", catchprac);
    elif (0 <= a5d <= 1) and (0 <= b5d <= 1) and (0 <= c5d <= 1):
        catchprac = 3
        thisExp.addData("catchprac", catchprac);
    elif (0 <= a6d <= 1) and (0 <= b6d <= 1) and (0 <= c6d <= 1):
        catchprac = 2
        thisExp.addData("catchprac", catchprac);
    elif (0 <= a7d <= 1) and (0 <= b7d <= 1) and (0 <= c7d <= 1):
        catchprac = 1;
        thisExp.addData("catchprac", catchprac);
    elif (0 <= a8d <= 1) and (0 <= b8d <= 1) and (0 <= c8d <= 1):
        catchprac = 0;
        thisExp.addData("catchprac", catchprac);
    
    
    
    thisExp.addData("catchnumberprac", catchnumberprac);
    
    duringprac.addData('text_32.started', text_32.tStartRefresh)
    duringprac.addData('text_32.stopped', text_32.tStopRefresh)
    duringprac.addData('rectangle_5.started', rectangle_5.tStartRefresh)
    duringprac.addData('rectangle_5.stopped', rectangle_5.tStopRefresh)
    # the Routine "catch_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "summary2_prac"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_6
    mouse_6.clicked_name = []
    gotValidClick = False  # until a click is received
    response3disk_6.setPos(a,-a)
    response3disk_6.setSize(b,b)
    response7disk_6.setPos(-a,a)
    response7disk_6.setSize(b,b)
    rectangle_4.setFillColor(grey)
    pracnumbertext = f'You have finished {pracnumber} of 7 practice questions';
    
    event.clearEvents()
    
    # Run catch trials 
    if not ((pracnumber == catchtrialorderprac[0]) or (pracnumber == catchtrialorderprac[1])):
        continueRoutine=False
    text_31.setText(pracnumbertext)
    # keep track of which components have finished
    summary2_pracComponents = [mouse_6, response1disk_6, response3disk_6, response5disk_6, response7disk_6, rectangle_4, text_30, text_31]
    for thisComponent in summary2_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    summary2_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "summary2_prac"-------
    while continueRoutine:
        # get current time
        t = summary2_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=summary2_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse_6* updates
        if mouse_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_6.frameNStart = frameN  # exact frame index
            mouse_6.tStart = t  # local t and not account for scr refresh
            mouse_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_6, 'tStartRefresh')  # time at next scr refresh
            mouse_6.status = STARTED
            mouse_6.mouseClock.reset()
            prevButtonState = mouse_6.getPressed()  # if button is down already this ISN'T a new click
        if mouse_6.status == STARTED:  # only update if started and not finished!
            buttons = mouse_6.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [rectangle_4]:
                        if obj.contains(mouse_6):
                            gotValidClick = True
                            mouse_6.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *response1disk_6* updates
        if response1disk_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response1disk_6.frameNStart = frameN  # exact frame index
            response1disk_6.tStart = t  # local t and not account for scr refresh
            response1disk_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response1disk_6, 'tStartRefresh')  # time at next scr refresh
            response1disk_6.setAutoDraw(True)
        
        # *response3disk_6* updates
        if response3disk_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response3disk_6.frameNStart = frameN  # exact frame index
            response3disk_6.tStart = t  # local t and not account for scr refresh
            response3disk_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response3disk_6, 'tStartRefresh')  # time at next scr refresh
            response3disk_6.setAutoDraw(True)
        
        # *response5disk_6* updates
        if response5disk_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response5disk_6.frameNStart = frameN  # exact frame index
            response5disk_6.tStart = t  # local t and not account for scr refresh
            response5disk_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response5disk_6, 'tStartRefresh')  # time at next scr refresh
            response5disk_6.setAutoDraw(True)
        
        # *response7disk_6* updates
        if response7disk_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response7disk_6.frameNStart = frameN  # exact frame index
            response7disk_6.tStart = t  # local t and not account for scr refresh
            response7disk_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response7disk_6, 'tStartRefresh')  # time at next scr refresh
            response7disk_6.setAutoDraw(True)
        
        # *rectangle_4* updates
        if rectangle_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rectangle_4.frameNStart = frameN  # exact frame index
            rectangle_4.tStart = t  # local t and not account for scr refresh
            rectangle_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rectangle_4, 'tStartRefresh')  # time at next scr refresh
            rectangle_4.setAutoDraw(True)
        # Run catch trials 
        if not ((pracnumber == catchtrialorderprac[0]) or (pracnumber == catchtrialorderprac[1])):
            continueRoutine=False
        
        # *text_30* updates
        if text_30.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_30.frameNStart = frameN  # exact frame index
            text_30.tStart = t  # local t and not account for scr refresh
            text_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_30, 'tStartRefresh')  # time at next scr refresh
            text_30.setAutoDraw(True)
        
        # *text_31* updates
        if text_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_31.frameNStart = frameN  # exact frame index
            text_31.tStart = t  # local t and not account for scr refresh
            text_31.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_31, 'tStartRefresh')  # time at next scr refresh
            text_31.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in summary2_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "summary2_prac"-------
    for thisComponent in summary2_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for duringprac (TrialHandler)
    x, y = mouse_6.getPos()
    buttons = mouse_6.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [rectangle_4]:
            if obj.contains(mouse_6):
                gotValidClick = True
                mouse_6.clicked_name.append(obj.name)
    duringprac.addData('mouse_6.x', x)
    duringprac.addData('mouse_6.y', y)
    duringprac.addData('mouse_6.leftButton', buttons[0])
    duringprac.addData('mouse_6.midButton', buttons[1])
    duringprac.addData('mouse_6.rightButton', buttons[2])
    if len(mouse_6.clicked_name):
        duringprac.addData('mouse_6.clicked_name', mouse_6.clicked_name[0])
    duringprac.addData('mouse_6.started', mouse_6.tStartRefresh)
    duringprac.addData('mouse_6.stopped', mouse_6.tStopRefresh)
    duringprac.addData('response1disk_6.started', response1disk_6.tStartRefresh)
    duringprac.addData('response1disk_6.stopped', response1disk_6.tStopRefresh)
    duringprac.addData('response3disk_6.started', response3disk_6.tStartRefresh)
    duringprac.addData('response3disk_6.stopped', response3disk_6.tStopRefresh)
    duringprac.addData('response5disk_6.started', response5disk_6.tStartRefresh)
    duringprac.addData('response5disk_6.stopped', response5disk_6.tStopRefresh)
    duringprac.addData('response7disk_6.started', response7disk_6.tStartRefresh)
    duringprac.addData('response7disk_6.stopped', response7disk_6.tStopRefresh)
    duringprac.addData('rectangle_4.started', rectangle_4.tStartRefresh)
    duringprac.addData('rectangle_4.stopped', rectangle_4.tStopRefresh)
    duringprac.addData('text_30.started', text_30.tStartRefresh)
    duringprac.addData('text_30.stopped', text_30.tStopRefresh)
    duringprac.addData('text_31.started', text_31.tStartRefresh)
    duringprac.addData('text_31.stopped', text_31.tStopRefresh)
    # the Routine "summary2_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 7 repeats of 'duringprac'


# ------Prepare to start Routine "begin"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_22.keys = []
key_resp_22.rt = []
_key_resp_22_allKeys = []
# keep track of which components have finished
beginComponents = [space_19, text_46, key_resp_22]
for thisComponent in beginComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
beginClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "begin"-------
while continueRoutine:
    # get current time
    t = beginClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=beginClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *space_19* updates
    if space_19.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        space_19.frameNStart = frameN  # exact frame index
        space_19.tStart = t  # local t and not account for scr refresh
        space_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_19, 'tStartRefresh')  # time at next scr refresh
        space_19.setAutoDraw(True)
    
    # *text_46* updates
    if text_46.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_46.frameNStart = frameN  # exact frame index
        text_46.tStart = t  # local t and not account for scr refresh
        text_46.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_46, 'tStartRefresh')  # time at next scr refresh
        text_46.setAutoDraw(True)
    
    # *key_resp_22* updates
    waitOnFlip = False
    if key_resp_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_22.frameNStart = frameN  # exact frame index
        key_resp_22.tStart = t  # local t and not account for scr refresh
        key_resp_22.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_22, 'tStartRefresh')  # time at next scr refresh
        key_resp_22.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_22.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_22.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_22.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_22.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_22_allKeys.extend(theseKeys)
        if len(_key_resp_22_allKeys):
            key_resp_22.keys = _key_resp_22_allKeys[-1].name  # just the last key pressed
            key_resp_22.rt = _key_resp_22_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in beginComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "begin"-------
for thisComponent in beginComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('space_19.started', space_19.tStartRefresh)
thisExp.addData('space_19.stopped', space_19.tStopRefresh)
thisExp.addData('text_46.started', text_46.tStartRefresh)
thisExp.addData('text_46.stopped', text_46.tStopRefresh)
# check responses
if key_resp_22.keys in ['', [], None]:  # No response was made
    key_resp_22.keys = None
thisExp.addData('key_resp_22.keys',key_resp_22.keys)
if key_resp_22.keys != None:  # we had a response
    thisExp.addData('key_resp_22.rt', key_resp_22.rt)
thisExp.addData('key_resp_22.started', key_resp_22.tStartRefresh)
thisExp.addData('key_resp_22.stopped', key_resp_22.tStopRefresh)
thisExp.nextEntry()
# the Routine "begin" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_3 = data.TrialHandler(nReps=2, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_3')
thisExp.addLoop(trials_3)  # add the loop to the experiment
thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
if thisTrial_3 != None:
    for paramName in thisTrial_3:
        exec('{} = thisTrial_3[paramName]'.format(paramName))

for thisTrial_3 in trials_3:
    currentLoop = trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            exec('{} = thisTrial_3[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials_2 = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('Stimconditions.xlsx', selection='0:162'),
        seed=order, name='trials_2')
    thisExp.addLoop(trials_2)  # add the loop to the experiment
    thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    for thisTrial_2 in trials_2:
        currentLoop = trials_2
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                exec('{} = thisTrial_2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Stim1_display"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        Circle1_colour =[];
        colourstrial = colPairs[Colourpair]
        print(Colourpair)
        print(Temporder)
        Ecc = stimpositions[trialnumber]
        if Ecc == 'onetwo':
            circle1posx = -100
            circle1posy = 100;
        if Ecc == 'onethree':
            circle1posx = -100
            circle1posy = 100;
        if Ecc == 'twoone':
            circle1posx = 100
            circle1posy = 100;
        if Ecc == 'twofour':
            circle1posx = 100
            circle1posy = 100;
        if Ecc == 'threeone':
            circle1posx = -100
            circle1posy = -100;
        if Ecc == 'threefour':
            circle1posx = -100
            circle1posy = -100;
        if Ecc == 'fourtwo':
            circle1posx = 100
            circle1posy = -100;
        if Ecc == 'fourthree':
            circle1posx = 100
            circle1posy = -100;
        
        # Set circle colour
        if Temporder == "first":
            Circle1_colour = colourcodesrgb[colourstrial[0]]
        if Temporder == "second":
            Circle1_colour = colourcodesrgb[colourstrial[1]]
        
        
        
        
        # Set circle colour
        
        print(Colourpair)
        print(colourstrial)
        
        
        
        
        Circle_1.setPos((circle1posx,circle1posy))
        Circle_1.setSize(100,100)
        Circle_1.setFillColor(Circle1_colour)
        Circle_1.setLineColor(Circle1_colour)
        # keep track of which components have finished
        Stim1_displayComponents = [Circle_1, centre_cross4]
        for thisComponent in Stim1_displayComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Stim1_displayClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Stim1_display"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = Stim1_displayClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Stim1_displayClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Circle_1* updates
            if Circle_1.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
                # keep track of start time/frame for later
                Circle_1.frameNStart = frameN  # exact frame index
                Circle_1.tStart = t  # local t and not account for scr refresh
                Circle_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Circle_1, 'tStartRefresh')  # time at next scr refresh
                Circle_1.setAutoDraw(True)
            if Circle_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Circle_1.tStartRefresh + 0.25-frameTolerance:
                    # keep track of stop time/frame for later
                    Circle_1.tStop = t  # not accounting for scr refresh
                    Circle_1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Circle_1, 'tStopRefresh')  # time at next scr refresh
                    Circle_1.setAutoDraw(False)
            
            # *centre_cross4* updates
            if centre_cross4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                centre_cross4.frameNStart = frameN  # exact frame index
                centre_cross4.tStart = t  # local t and not account for scr refresh
                centre_cross4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(centre_cross4, 'tStartRefresh')  # time at next scr refresh
                centre_cross4.setAutoDraw(True)
            if centre_cross4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > centre_cross4.tStartRefresh + 0.500-frameTolerance:
                    # keep track of stop time/frame for later
                    centre_cross4.tStop = t  # not accounting for scr refresh
                    centre_cross4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(centre_cross4, 'tStopRefresh')  # time at next scr refresh
                    centre_cross4.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Stim1_displayComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Stim1_display"-------
        for thisComponent in Stim1_displayComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData("Circle1_colour", Circle1_colour);
        thisExp.addData("Ecc", Ecc);
        trialnumber = trialnumber + 1 # Count trial numbers 
        trials_2.addData('Circle_1.started', Circle_1.tStartRefresh)
        trials_2.addData('Circle_1.stopped', Circle_1.tStopRefresh)
        trials_2.addData('centre_cross4.started', centre_cross4.tStartRefresh)
        trials_2.addData('centre_cross4.stopped', centre_cross4.tStopRefresh)
        
        # ------Prepare to start Routine "Stim2_display"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        Circle2_colour =[];
        colourstrial = colPairs[Colourpair]
        
        
        # Set circle colour
        if Temporder == "first":
            Circle2_colour = colourcodesrgb[colourstrial[1]]
        
        if Temporder == "second":
            Circle2_colour = colourcodesrgb[colourstrial[0]]
        
        
        
        # Circle position and size 
        
        if Ecc == 'onetwo':
            circle1posx = 100
            circle1posy = 100;
        if Ecc == 'onethree':
            circle1posx = -100
            circle1posy = -100;
        if Ecc == 'twoone':
            circle1posx = -100
            circle1posy = 100;
        if Ecc == 'twofour':
            circle1posx = 100
            circle1posy = -100;
        if Ecc == 'threeone':
            circle1posx = -100
            circle1posy = 100;
        if Ecc == 'threefour':
            circle1posx = 100
            circle1posy = -100;
        if Ecc == 'fourtwo':
            circle1posx = 100
            circle1posy = 100;
        if Ecc == 'fourthree':
            circle1posx = -100
            circle1posy = -100;
        
        # Set circle colour
        
        
        print(Circle2_colour)
        
        Circle_2.setPos((circle1posx,circle1posy))
        Circle_2.setSize(100,100)
        Circle_2.setFillColor(Circle2_colour)
        Circle_2.setLineColor(Circle2_colour)
        # keep track of which components have finished
        Stim2_displayComponents = [Circle_2, centre_cross4_4]
        for thisComponent in Stim2_displayComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Stim2_displayClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Stim2_display"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = Stim2_displayClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Stim2_displayClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Circle_2* updates
            if Circle_2.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
                # keep track of start time/frame for later
                Circle_2.frameNStart = frameN  # exact frame index
                Circle_2.tStart = t  # local t and not account for scr refresh
                Circle_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Circle_2, 'tStartRefresh')  # time at next scr refresh
                Circle_2.setAutoDraw(True)
            if Circle_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Circle_2.tStartRefresh + 0.25-frameTolerance:
                    # keep track of stop time/frame for later
                    Circle_2.tStop = t  # not accounting for scr refresh
                    Circle_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Circle_2, 'tStopRefresh')  # time at next scr refresh
                    Circle_2.setAutoDraw(False)
            
            # *centre_cross4_4* updates
            if centre_cross4_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                centre_cross4_4.frameNStart = frameN  # exact frame index
                centre_cross4_4.tStart = t  # local t and not account for scr refresh
                centre_cross4_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(centre_cross4_4, 'tStartRefresh')  # time at next scr refresh
                centre_cross4_4.setAutoDraw(True)
            if centre_cross4_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > centre_cross4_4.tStartRefresh + 0.500-frameTolerance:
                    # keep track of stop time/frame for later
                    centre_cross4_4.tStop = t  # not accounting for scr refresh
                    centre_cross4_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(centre_cross4_4, 'tStopRefresh')  # time at next scr refresh
                    centre_cross4_4.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Stim2_displayComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Stim2_display"-------
        for thisComponent in Stim2_displayComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData("Circle2_colour", Circle2_colour);
        thisExp.addData("Ecc", Ecc);
        
        trials_2.addData('Circle_2.started', Circle_2.tStartRefresh)
        trials_2.addData('Circle_2.stopped', Circle_2.tStopRefresh)
        trials_2.addData('centre_cross4_4.started', centre_cross4_4.tStartRefresh)
        trials_2.addData('centre_cross4_4.stopped', centre_cross4_4.tStopRefresh)
        
        # ------Prepare to start Routine "response"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # Count trial numbers
        event.clearEvents() 
        
        
        # keep track of which components have finished
        responseComponents = [mouse, response1disk, response3disk, response5disk, response7disk, text_23]
        for thisComponent in responseComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        responseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "response"-------
        while continueRoutine:
            # get current time
            t = responseClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=responseClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *mouse* updates
            if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [response1disk,response3disk,response5disk,response7disk]:
                            if obj.contains(mouse):
                                gotValidClick = True
                                mouse.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *response1disk* updates
            if response1disk.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response1disk.frameNStart = frameN  # exact frame index
                response1disk.tStart = t  # local t and not account for scr refresh
                response1disk.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response1disk, 'tStartRefresh')  # time at next scr refresh
                response1disk.setAutoDraw(True)
            
            # *response3disk* updates
            if response3disk.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response3disk.frameNStart = frameN  # exact frame index
                response3disk.tStart = t  # local t and not account for scr refresh
                response3disk.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response3disk, 'tStartRefresh')  # time at next scr refresh
                response3disk.setAutoDraw(True)
            
            # *response5disk* updates
            if response5disk.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response5disk.frameNStart = frameN  # exact frame index
                response5disk.tStart = t  # local t and not account for scr refresh
                response5disk.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response5disk, 'tStartRefresh')  # time at next scr refresh
                response5disk.setAutoDraw(True)
            
            # *response7disk* updates
            if response7disk.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response7disk.frameNStart = frameN  # exact frame index
                response7disk.tStart = t  # local t and not account for scr refresh
                response7disk.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response7disk, 'tStartRefresh')  # time at next scr refresh
                response7disk.setAutoDraw(True)
            
            # *text_23* updates
            if text_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_23.frameNStart = frameN  # exact frame index
                text_23.tStart = t  # local t and not account for scr refresh
                text_23.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_23, 'tStartRefresh')  # time at next scr refresh
                text_23.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in responseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "response"-------
        for thisComponent in responseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials_2 (TrialHandler)
        x, y = mouse.getPos()
        buttons = mouse.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in [response1disk,response3disk,response5disk,response7disk]:
                if obj.contains(mouse):
                    gotValidClick = True
                    mouse.clicked_name.append(obj.name)
        trials_2.addData('mouse.x', x)
        trials_2.addData('mouse.y', y)
        trials_2.addData('mouse.leftButton', buttons[0])
        trials_2.addData('mouse.midButton', buttons[1])
        trials_2.addData('mouse.rightButton', buttons[2])
        if len(mouse.clicked_name):
            trials_2.addData('mouse.clicked_name', mouse.clicked_name[0])
        trials_2.addData('mouse.started', mouse.tStart)
        trials_2.addData('mouse.stopped', mouse.tStop)
        # Save similarity rating 
        mousexpos=mouse.getPos()[0]  # get x position of mouse
        mouseypos=mouse.getPos()[1]  # get y position of mouse
        
        # Triangle 7
        x11d = a - b/2;
        y11d = a + b/2;
        x12d = a + b/2;
        y12d = a + b/2;
        x13d = a - b/2;
        y13d = a - b/2;
        a1d = ((y12d - y13d)*(mousexpos - x13d) + (x13d - x12d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
        b1d = ((y13d - y11d)*(mousexpos - x13d) + (x11d - x13d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
        c1d = 1 - a1d - b1d;
        
        # Triangle 6 
        x21d = a - b/2;
        y21d = a - b/2
        x22d = a + b/2
        y22d = a + b/2
        x23d = a + b/2
        y23d = a - b/2
        a2d = ((y22d - y23d)*(mousexpos - x23d) + (x23d - x22d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
        b2d = ((y23d - y21d)*(mousexpos - x23d) + (x21d - x23d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
        c2d = 1 - a2d - b2d
        
        # Triangle 5
        x31d = a - b/2
        y31d = -(a - b/2)
        x32d = a + b/2
        y32d = -(a - b/2) 
        x33d = a + b/2
        y33d = -(a + b/2)
        a3d = ((y32d - y33d)*(mousexpos - x33d) + (x33d - x32d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
        b3d = ((y33d - y31d)*(mousexpos - x33d) + (x31d - x33d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
        c3d = 1 - a3d - b3d
        
        
        # Triangle 4 
        x41d = a - b/2
        y41d = -(a - b/2)
        x42d = a + b/2
        y42d = -(a + b/2)
        x43d = a - b/2
        y43d = -(a + b/2)
        a4d = ((y42d - y43d)*(mousexpos - x43d) + (x43d - x42d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
        b4d = ((y43d - y41d)*(mousexpos - x43d) + (x41d - x43d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
        c4d = 1 - a4d - b4d
        
        #  Triangle 3
        x51d = -(a + b/2)
        y51d = -(a + b/2)
        x52d = -(a - b/2)
        y52d = -(a - b/2)
        x53d = -(a - b/2)
        y53d = -(a + b/2)
        a5d = ((y52d - y53d)*(mousexpos - x53d) + (x53d - x52d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
        b5d = ((y53d - y51d)*(mousexpos - x53d) + (x51d - x53d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
        c5d = 1 - a5d - b5d
        
        # Triangle 2
        x61d = -(a+b/2)
        y61d = -(a-b/2)
        x62d = -(a-b/2)
        y62d = -(a-b/2)
        x63d = -(a+b/2)
        y63d = - (a+b/2)
        a6d = ((y62d - y63d)*(mousexpos - x63d) + (x63d - x62d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
        b6d = ((y63d - y61d)*(mousexpos - x63d) + (x61d - x63d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
        c6d = 1 - a6d - b6d
        
        # Triangle 1 
        
        x71d = -(a + b/2)
        y71d = a + b/2
        x72d = -(a - b/2)
        y72d = a - b/2
        x73d = -(a + b/2)
        y73d = a - b/2
        a7d = ((y72d - y73d)*(mousexpos - x73d) + (x73d - x72d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
        b7d = ((y73d - y71d)*(mousexpos - x73d) + (x71d - x73d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
        c7d = 1 - a7d - b7d
        
        
        # Triangle 0 
        x81d = -(a + b/2)
        y81d = a + b/2
        x82d = -(a - b/2)
        y82d = a + b/2
        x83d = -(a - b/2)
        y83d = a - b/2
        a8d = ((y82d - y83d)*(mousexpos - x83d) + (x83d - x82d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
        b8d = ((y83d - y81d)*(mousexpos - x83d) + (x81d - x83d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
        c8d = 1 - a8d - b8d
        
        if (0 <= a1d <= 1) and (0 <= b1d <= 1) and (0 <= c1d <= 1):
            similarity = 7
        elif (0 <= a2d <= 1) and (0 <= b2d <= 1) and (0 <= c2d <= 1):
            similarity = 6
        elif (0 <= a3d <= 1) and (0 <= b3d <= 1) and (0 <= c3d <= 1):
            similarity = 5
        elif (0 <= a4d <= 1) and (0 <= b4d <= 1) and (0 <= c4d <= 1):
            similarity = 4
        elif (0 <= a5d <= 1) and (0 <= b5d <= 1) and (0 <= c5d <= 1):
            similarity = 3
        elif (0 <= a6d <= 1) and (0 <= b6d <= 1) and (0 <= c6d <= 1):
            similarity = 2
        elif (0 <= a7d <= 1) and (0 <= b7d <= 1) and (0 <= c7d <= 1):
            similarity = 1
        elif (0 <= a8d <= 1) and (0 <= b8d <= 1) and (0 <= c8d <= 1):
            similarity = 0
        
        thisExp.addData("similarity", similarity);
        thisExp.addData("response_time", mouse.mouseClock.getTime())  # Save time relative to start of mouse
        
        
        trials_2.addData('response1disk.started', response1disk.tStartRefresh)
        trials_2.addData('response1disk.stopped', response1disk.tStopRefresh)
        trials_2.addData('response3disk.started', response3disk.tStartRefresh)
        trials_2.addData('response3disk.stopped', response3disk.tStopRefresh)
        trials_2.addData('response5disk.started', response5disk.tStartRefresh)
        trials_2.addData('response5disk.stopped', response5disk.tStopRefresh)
        trials_2.addData('response7disk.started', response7disk.tStartRefresh)
        trials_2.addData('response7disk.stopped', response7disk.tStopRefresh)
        trials_2.addData('text_23.started', text_23.tStartRefresh)
        trials_2.addData('text_23.stopped', text_23.tStopRefresh)
        # the Routine "response" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "response_2"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse_2
        mouse_2.clicked_name = []
        gotValidClick = False  # until a click is received
        rectangle.setFillColor(grey)
        trialnumbertext = f'You have finished {trialnumber} of 324 questions';
        
        event.clearEvents()
        text_24.setText(trialnumbertext)
        # keep track of which components have finished
        response_2Components = [mouse_2, response1disk_2, response3disk_2, response5disk_2, response7disk_2, rectangle, text_25, text_24]
        for thisComponent in response_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        response_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "response_2"-------
        while continueRoutine:
            # get current time
            t = response_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=response_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *mouse_2* updates
            if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_2.frameNStart = frameN  # exact frame index
                mouse_2.tStart = t  # local t and not account for scr refresh
                mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
                mouse_2.status = STARTED
                mouse_2.mouseClock.reset()
                prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
            if mouse_2.status == STARTED:  # only update if started and not finished!
                buttons = mouse_2.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [rectangle]:
                            if obj.contains(mouse_2):
                                gotValidClick = True
                                mouse_2.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *response1disk_2* updates
            if response1disk_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response1disk_2.frameNStart = frameN  # exact frame index
                response1disk_2.tStart = t  # local t and not account for scr refresh
                response1disk_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response1disk_2, 'tStartRefresh')  # time at next scr refresh
                response1disk_2.setAutoDraw(True)
            
            # *response3disk_2* updates
            if response3disk_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response3disk_2.frameNStart = frameN  # exact frame index
                response3disk_2.tStart = t  # local t and not account for scr refresh
                response3disk_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response3disk_2, 'tStartRefresh')  # time at next scr refresh
                response3disk_2.setAutoDraw(True)
            
            # *response5disk_2* updates
            if response5disk_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response5disk_2.frameNStart = frameN  # exact frame index
                response5disk_2.tStart = t  # local t and not account for scr refresh
                response5disk_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response5disk_2, 'tStartRefresh')  # time at next scr refresh
                response5disk_2.setAutoDraw(True)
            
            # *response7disk_2* updates
            if response7disk_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response7disk_2.frameNStart = frameN  # exact frame index
                response7disk_2.tStart = t  # local t and not account for scr refresh
                response7disk_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response7disk_2, 'tStartRefresh')  # time at next scr refresh
                response7disk_2.setAutoDraw(True)
            
            # *rectangle* updates
            if rectangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rectangle.frameNStart = frameN  # exact frame index
                rectangle.tStart = t  # local t and not account for scr refresh
                rectangle.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rectangle, 'tStartRefresh')  # time at next scr refresh
                rectangle.setAutoDraw(True)
            
            # *text_25* updates
            if text_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_25.frameNStart = frameN  # exact frame index
                text_25.tStart = t  # local t and not account for scr refresh
                text_25.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_25, 'tStartRefresh')  # time at next scr refresh
                text_25.setAutoDraw(True)
            
            # *text_24* updates
            if text_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_24.frameNStart = frameN  # exact frame index
                text_24.tStart = t  # local t and not account for scr refresh
                text_24.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
                text_24.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in response_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "response_2"-------
        for thisComponent in response_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials_2 (TrialHandler)
        x, y = mouse_2.getPos()
        buttons = mouse_2.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in [rectangle]:
                if obj.contains(mouse_2):
                    gotValidClick = True
                    mouse_2.clicked_name.append(obj.name)
        trials_2.addData('mouse_2.x', x)
        trials_2.addData('mouse_2.y', y)
        trials_2.addData('mouse_2.leftButton', buttons[0])
        trials_2.addData('mouse_2.midButton', buttons[1])
        trials_2.addData('mouse_2.rightButton', buttons[2])
        if len(mouse_2.clicked_name):
            trials_2.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])
        trials_2.addData('mouse_2.started', mouse_2.tStart)
        trials_2.addData('mouse_2.stopped', mouse_2.tStop)
        trials_2.addData('response1disk_2.started', response1disk_2.tStartRefresh)
        trials_2.addData('response1disk_2.stopped', response1disk_2.tStopRefresh)
        trials_2.addData('response3disk_2.started', response3disk_2.tStartRefresh)
        trials_2.addData('response3disk_2.stopped', response3disk_2.tStopRefresh)
        trials_2.addData('response5disk_2.started', response5disk_2.tStartRefresh)
        trials_2.addData('response5disk_2.stopped', response5disk_2.tStopRefresh)
        trials_2.addData('response7disk_2.started', response7disk_2.tStartRefresh)
        trials_2.addData('response7disk_2.stopped', response7disk_2.tStopRefresh)
        trials_2.addData('rectangle.started', rectangle.tStartRefresh)
        trials_2.addData('rectangle.stopped', rectangle.tStopRefresh)
        trials_2.addData('text_25.started', text_25.tStartRefresh)
        trials_2.addData('text_25.stopped', text_25.tStopRefresh)
        trials_2.addData('text_24.started', text_24.tStartRefresh)
        trials_2.addData('text_24.stopped', text_24.tStopRefresh)
        # the Routine "response_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "special_trial"-------
        continueRoutine = True
        routineTimer.add(0.250000)
        # update component parameters for each repeat
        # keep track of which components have finished
        special_trialComponents = [text_33]
        for thisComponent in special_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        special_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "special_trial"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = special_trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=special_trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_33* updates
            if text_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_33.frameNStart = frameN  # exact frame index
                text_33.tStart = t  # local t and not account for scr refresh
                text_33.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_33, 'tStartRefresh')  # time at next scr refresh
                text_33.setAutoDraw(True)
            if text_33.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_33.tStartRefresh + .250-frameTolerance:
                    # keep track of stop time/frame for later
                    text_33.tStop = t  # not accounting for scr refresh
                    text_33.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_33, 'tStopRefresh')  # time at next scr refresh
                    text_33.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in special_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "special_trial"-------
        for thisComponent in special_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_2.addData('text_33.started', text_33.tStartRefresh)
        trials_2.addData('text_33.stopped', text_33.tStopRefresh)
        
        # ------Prepare to start Routine "catch_1"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse_3
        mouse_3.clicked_name = []
        gotValidClick = False  # until a click is received
        # Select random number for catch trial
        
        catchnumber = randint(0,7);
        
        event.clearEvents()
        
        catchtext = f'SPECIAL TRIAL PLEASE CLICK AND HOLD {catchnumber}'
        text_26.setText(catchtext)
        # keep track of which components have finished
        catch_1Components = [mouse_3, response1disk_3, response3disk_3, response5disk_3, response7disk_3, text_26, rectangle_2]
        for thisComponent in catch_1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        catch_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "catch_1"-------
        while continueRoutine:
            # get current time
            t = catch_1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=catch_1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *mouse_3* updates
            if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_3.frameNStart = frameN  # exact frame index
                mouse_3.tStart = t  # local t and not account for scr refresh
                mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
                mouse_3.status = STARTED
                mouse_3.mouseClock.reset()
                prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
            if mouse_3.status == STARTED:  # only update if started and not finished!
                buttons = mouse_3.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [response1disk_3,response3disk_3,response5disk_3,response7disk_3,]:
                            if obj.contains(mouse_3):
                                gotValidClick = True
                                mouse_3.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *response1disk_3* updates
            if response1disk_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response1disk_3.frameNStart = frameN  # exact frame index
                response1disk_3.tStart = t  # local t and not account for scr refresh
                response1disk_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response1disk_3, 'tStartRefresh')  # time at next scr refresh
                response1disk_3.setAutoDraw(True)
            
            # *response3disk_3* updates
            if response3disk_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response3disk_3.frameNStart = frameN  # exact frame index
                response3disk_3.tStart = t  # local t and not account for scr refresh
                response3disk_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response3disk_3, 'tStartRefresh')  # time at next scr refresh
                response3disk_3.setAutoDraw(True)
            
            # *response5disk_3* updates
            if response5disk_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response5disk_3.frameNStart = frameN  # exact frame index
                response5disk_3.tStart = t  # local t and not account for scr refresh
                response5disk_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response5disk_3, 'tStartRefresh')  # time at next scr refresh
                response5disk_3.setAutoDraw(True)
            
            # *response7disk_3* updates
            if response7disk_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response7disk_3.frameNStart = frameN  # exact frame index
                response7disk_3.tStart = t  # local t and not account for scr refresh
                response7disk_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response7disk_3, 'tStartRefresh')  # time at next scr refresh
                response7disk_3.setAutoDraw(True)
            # Run catch trials 
            if not ((trialnumber == catchtrialorder[0]) or (trialnumber == catchtrialorder[1]) or (trialnumber == catchtrialorder[2]) or (trialnumber == catchtrialorder[3]) or (trialnumber == catchtrialorder[4]) or (trialnumber == catchtrialorder[5]) or (trialnumber == catchtrialorder[6]) or (trialnumber == catchtrialorder[7]) or (trialnumber == catchtrialorder[8]) or (trialnumber == catchtrialorder[9]) or (trialnumber == catchtrialorder[10]) or (trialnumber == catchtrialorder[11]) or (trialnumber == catchtrialorder[12]) or (trialnumber == catchtrialorder[13]) or (trialnumber == catchtrialorder[14]) or (trialnumber == catchtrialorder[15]) or (trialnumber == catchtrialorder[16]) or (trialnumber == catchtrialorder[17]) or (trialnumber == catchtrialorder[18]) or (trialnumber == catchtrialorder[19])):
                continueRoutine=False
            
            # *text_26* updates
            if text_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_26.frameNStart = frameN  # exact frame index
                text_26.tStart = t  # local t and not account for scr refresh
                text_26.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
                text_26.setAutoDraw(True)
            
            # *rectangle_2* updates
            if rectangle_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rectangle_2.frameNStart = frameN  # exact frame index
                rectangle_2.tStart = t  # local t and not account for scr refresh
                rectangle_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rectangle_2, 'tStartRefresh')  # time at next scr refresh
                rectangle_2.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in catch_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "catch_1"-------
        for thisComponent in catch_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials_2 (TrialHandler)
        x, y = mouse_3.getPos()
        buttons = mouse_3.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in [response1disk_3,response3disk_3,response5disk_3,response7disk_3,]:
                if obj.contains(mouse_3):
                    gotValidClick = True
                    mouse_3.clicked_name.append(obj.name)
        trials_2.addData('mouse_3.x', x)
        trials_2.addData('mouse_3.y', y)
        trials_2.addData('mouse_3.leftButton', buttons[0])
        trials_2.addData('mouse_3.midButton', buttons[1])
        trials_2.addData('mouse_3.rightButton', buttons[2])
        if len(mouse_3.clicked_name):
            trials_2.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])
        trials_2.addData('mouse_3.started', mouse_3.tStart)
        trials_2.addData('mouse_3.stopped', mouse_3.tStop)
        trials_2.addData('response1disk_3.started', response1disk_3.tStartRefresh)
        trials_2.addData('response1disk_3.stopped', response1disk_3.tStopRefresh)
        trials_2.addData('response3disk_3.started', response3disk_3.tStartRefresh)
        trials_2.addData('response3disk_3.stopped', response3disk_3.tStopRefresh)
        trials_2.addData('response5disk_3.started', response5disk_3.tStartRefresh)
        trials_2.addData('response5disk_3.stopped', response5disk_3.tStopRefresh)
        trials_2.addData('response7disk_3.started', response7disk_3.tStartRefresh)
        trials_2.addData('response7disk_3.stopped', response7disk_3.tStopRefresh)
        # Save similarity rating 
        mousexpos=mouse.getPos()[0]  # get x position of mouse
        mouseypos=mouse.getPos()[1]  # get y position of mouse
        
        # Triangle 7
        x11d = a - b/2;
        y11d = a + b/2;
        x12d = a + b/2;
        y12d = a + b/2;
        x13d = a - b/2;
        y13d = a - b/2;
        a1d = ((y12d - y13d)*(mousexpos - x13d) + (x13d - x12d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
        b1d = ((y13d - y11d)*(mousexpos - x13d) + (x11d - x13d)*(mouseypos - y13d)) / ((y12d - y13d)*(x11d - x13d)+(x13d - x12d)*(y11d - y13d))
        c1d = 1 - a1d - b1d;
        
        # Triangle 6 
        x21d = a - b/2;
        y21d = a - b/2
        x22d = a + b/2
        y22d = a + b/2
        x23d = a + b/2
        y23d = a - b/2
        a2d = ((y22d - y23d)*(mousexpos - x23d) + (x23d - x22d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
        b2d = ((y23d - y21d)*(mousexpos - x23d) + (x21d - x23d)*(mouseypos - y23d)) / ((y22d - y23d)*(x21d - x23d)+(x23d - x22d)*(y21d - y23d))
        c2d = 1 - a2d - b2d
        
        # Triangle 5
        x31d = a - b/2
        y31d = -(a - b/2)
        x32d = a + b/2
        y32d = -(a - b/2) 
        x33d = a + b/2
        y33d = -(a + b/2)
        a3d = ((y32d - y33d)*(mousexpos - x33d) + (x33d - x32d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
        b3d = ((y33d - y31d)*(mousexpos - x33d) + (x31d - x33d)*(mouseypos - y33d)) / ((y32d - y33d)*(x31d - x33d)+(x33d - x32d)*(y31d - y33d))
        c3d = 1 - a3d - b3d
        
        
        # Triangle 4 
        x41d = a - b/2
        y41d = -(a - b/2)
        x42d = a + b/2
        y42d = -(a + b/2)
        x43d = a - b/2
        y43d = -(a + b/2)
        a4d = ((y42d - y43d)*(mousexpos - x43d) + (x43d - x42d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
        b4d = ((y43d - y41d)*(mousexpos - x43d) + (x41d - x43d)*(mouseypos - y43d)) / ((y42d - y43d)*(x41d - x43d)+(x43d - x42d)*(y41d - y43d))
        c4d = 1 - a4d - b4d
        
        #  Triangle 3
        x51d = -(a + b/2)
        y51d = -(a + b/2)
        x52d = -(a - b/2)
        y52d = -(a - b/2)
        x53d = -(a - b/2)
        y53d = -(a + b/2)
        a5d = ((y52d - y53d)*(mousexpos - x53d) + (x53d - x52d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
        b5d = ((y53d - y51d)*(mousexpos - x53d) + (x51d - x53d)*(mouseypos - y53d)) / ((y52d - y53d)*(x51d - x53d)+(x53d - x52d)*(y51d - y53d))
        c5d = 1 - a5d - b5d
        
        # Triangle 2
        x61d = -(a+b/2)
        y61d = -(a-b/2)
        x62d = -(a-b/2)
        y62d = -(a-b/2)
        x63d = -(a+b/2)
        y63d = - (a+b/2)
        a6d = ((y62d - y63d)*(mousexpos - x63d) + (x63d - x62d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
        b6d = ((y63d - y61d)*(mousexpos - x63d) + (x61d - x63d)*(mouseypos - y63d)) / ((y62d - y63d)*(x61d - x63d)+(x63d - x62d)*(y61d - y63d))
        c6d = 1 - a6d - b6d
        
        # Triangle 1 
        
        x71d = -(a + b/2)
        y71d = a + b/2
        x72d = -(a - b/2)
        y72d = a - b/2
        x73d = -(a + b/2)
        y73d = a - b/2
        a7d = ((y72d - y73d)*(mousexpos - x73d) + (x73d - x72d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
        b7d = ((y73d - y71d)*(mousexpos - x73d) + (x71d - x73d)*(mouseypos - y73d)) / ((y72d - y73d)*(x71d - x73d)+(x73d - x72d)*(y71d - y73d))
        c7d = 1 - a7d - b7d
        
        
        # Triangle 0 
        x81d = -(a + b/2)
        y81d = a + b/2
        x82d = -(a - b/2)
        y82d = a + b/2
        x83d = -(a - b/2)
        y83d = a - b/2
        a8d = ((y82d - y83d)*(mousexpos - x83d) + (x83d - x82d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
        b8d = ((y83d - y81d)*(mousexpos - x83d) + (x81d - x83d)*(mouseypos - y83d)) / ((y82d - y83d)*(x81d - x83d)+(x83d - x82d)*(y81d - y83d))
        c8d = 1 - a8d - b8d
        
        
        
        
        
        if (0 <= a1d <= 1) and (0 <= b1d <= 1) and (0 <= c1d <= 1):
            catchresponse  = 7
        elif (0 <= a2d <= 1) and (0 <= b2d <= 1) and (0 <= c2d <= 1):
            catchresponse  = 6
        elif (0 <= a3d <= 1) and (0 <= b3d <= 1) and (0 <= c3d <= 1):
            catchresponse  = 5
        elif (0 <= a4d <= 1) and (0 <= b4d <= 1) and (0 <= c4d <= 1):
            catchresponse  = 4
        elif (0 <= a5d <= 1) and (0 <= b5d <= 1) and (0 <= c5d <= 1):
            catchresponse  = 3
        elif (0 <= a6d <= 1) and (0 <= b6d <= 1) and (0 <= c6d <= 1):
            catchresponse  = 2
        elif (0 <= a7d <= 1) and (0 <= b7d <= 1) and (0 <= c7d <= 1):
            catchresponse  = 1
        elif (0 <= a8d <= 1) and (0 <= b8d <= 1) and (0 <= c8d <= 1):
            catchresponse = 0
        
        
        thisExp.addData("catchresponse", catchresponse);
        thisExp.addData("catchnumber", catchnumber);
        thisExp.addData("response_time_catch", mouse_3.mouseClock.getTime())  # Save time relative to start of mouse
        thisExp.addData("Catch", Catch);
        
        
        trials_2.addData('text_26.started', text_26.tStartRefresh)
        trials_2.addData('text_26.stopped', text_26.tStopRefresh)
        trials_2.addData('rectangle_2.started', rectangle_2.tStartRefresh)
        trials_2.addData('rectangle_2.stopped', rectangle_2.tStopRefresh)
        # the Routine "catch_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "response_sum"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse_11
        mouse_11.clicked_name = []
        gotValidClick = False  # until a click is received
        rectangle_9.setFillColor(grey)
        trialnumbertext = f'You have finished {trialnumber} of 324 questions';
        
        event.clearEvents()
        
        # Run catch trials 
        if not ((trialnumber == catchtrialorder[0]) or (trialnumber == catchtrialorder[1]) or (trialnumber == catchtrialorder[2]) or (trialnumber == catchtrialorder[3]) or (trialnumber == catchtrialorder[4]) or (trialnumber == catchtrialorder[5]) or (trialnumber == catchtrialorder[6]) or (trialnumber == catchtrialorder[7]) or (trialnumber == catchtrialorder[8]) or (trialnumber == catchtrialorder[9]) or (trialnumber == catchtrialorder[10]) or (trialnumber == catchtrialorder[11]) or (trialnumber == catchtrialorder[12]) or (trialnumber == catchtrialorder[13]) or (trialnumber == catchtrialorder[14]) or (trialnumber == catchtrialorder[15]) or (trialnumber == catchtrialorder[16]) or (trialnumber == catchtrialorder[17]) or (trialnumber == catchtrialorder[18]) or (trialnumber == catchtrialorder[19])):
            continueRoutine=False
        text_52.setText(trialnumbertext)
        # keep track of which components have finished
        response_sumComponents = [mouse_11, response1disk_11, response3disk_11, response5disk_11, response7disk_11, rectangle_9, text_51, text_52]
        for thisComponent in response_sumComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        response_sumClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "response_sum"-------
        while continueRoutine:
            # get current time
            t = response_sumClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=response_sumClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *mouse_11* updates
            if mouse_11.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_11.frameNStart = frameN  # exact frame index
                mouse_11.tStart = t  # local t and not account for scr refresh
                mouse_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_11, 'tStartRefresh')  # time at next scr refresh
                mouse_11.status = STARTED
                mouse_11.mouseClock.reset()
                prevButtonState = mouse_11.getPressed()  # if button is down already this ISN'T a new click
            if mouse_11.status == STARTED:  # only update if started and not finished!
                buttons = mouse_11.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [rectangle]:
                            if obj.contains(mouse_11):
                                gotValidClick = True
                                mouse_11.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *response1disk_11* updates
            if response1disk_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response1disk_11.frameNStart = frameN  # exact frame index
                response1disk_11.tStart = t  # local t and not account for scr refresh
                response1disk_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response1disk_11, 'tStartRefresh')  # time at next scr refresh
                response1disk_11.setAutoDraw(True)
            
            # *response3disk_11* updates
            if response3disk_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response3disk_11.frameNStart = frameN  # exact frame index
                response3disk_11.tStart = t  # local t and not account for scr refresh
                response3disk_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response3disk_11, 'tStartRefresh')  # time at next scr refresh
                response3disk_11.setAutoDraw(True)
            
            # *response5disk_11* updates
            if response5disk_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response5disk_11.frameNStart = frameN  # exact frame index
                response5disk_11.tStart = t  # local t and not account for scr refresh
                response5disk_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response5disk_11, 'tStartRefresh')  # time at next scr refresh
                response5disk_11.setAutoDraw(True)
            
            # *response7disk_11* updates
            if response7disk_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response7disk_11.frameNStart = frameN  # exact frame index
                response7disk_11.tStart = t  # local t and not account for scr refresh
                response7disk_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response7disk_11, 'tStartRefresh')  # time at next scr refresh
                response7disk_11.setAutoDraw(True)
            
            # *rectangle_9* updates
            if rectangle_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rectangle_9.frameNStart = frameN  # exact frame index
                rectangle_9.tStart = t  # local t and not account for scr refresh
                rectangle_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rectangle_9, 'tStartRefresh')  # time at next scr refresh
                rectangle_9.setAutoDraw(True)
            # Run catch trials 
            if not ((trialnumber == catchtrialorder[0]) or (trialnumber == catchtrialorder[1]) or (trialnumber == catchtrialorder[2]) or (trialnumber == catchtrialorder[3]) or (trialnumber == catchtrialorder[4]) or (trialnumber == catchtrialorder[5]) or (trialnumber == catchtrialorder[6]) or (trialnumber == catchtrialorder[7]) or (trialnumber == catchtrialorder[8]) or (trialnumber == catchtrialorder[9]) or (trialnumber == catchtrialorder[10]) or (trialnumber == catchtrialorder[11]) or (trialnumber == catchtrialorder[12]) or (trialnumber == catchtrialorder[13]) or (trialnumber == catchtrialorder[14]) or (trialnumber == catchtrialorder[15]) or (trialnumber == catchtrialorder[16]) or (trialnumber == catchtrialorder[17]) or (trialnumber == catchtrialorder[18]) or (trialnumber == catchtrialorder[19])):
                continueRoutine=False
            
            # *text_51* updates
            if text_51.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_51.frameNStart = frameN  # exact frame index
                text_51.tStart = t  # local t and not account for scr refresh
                text_51.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_51, 'tStartRefresh')  # time at next scr refresh
                text_51.setAutoDraw(True)
            
            # *text_52* updates
            if text_52.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_52.frameNStart = frameN  # exact frame index
                text_52.tStart = t  # local t and not account for scr refresh
                text_52.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_52, 'tStartRefresh')  # time at next scr refresh
                text_52.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in response_sumComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "response_sum"-------
        for thisComponent in response_sumComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials_2 (TrialHandler)
        x, y = mouse_11.getPos()
        buttons = mouse_11.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in [rectangle]:
                if obj.contains(mouse_11):
                    gotValidClick = True
                    mouse_11.clicked_name.append(obj.name)
        trials_2.addData('mouse_11.x', x)
        trials_2.addData('mouse_11.y', y)
        trials_2.addData('mouse_11.leftButton', buttons[0])
        trials_2.addData('mouse_11.midButton', buttons[1])
        trials_2.addData('mouse_11.rightButton', buttons[2])
        if len(mouse_11.clicked_name):
            trials_2.addData('mouse_11.clicked_name', mouse_11.clicked_name[0])
        trials_2.addData('mouse_11.started', mouse_11.tStart)
        trials_2.addData('mouse_11.stopped', mouse_11.tStop)
        trials_2.addData('response1disk_11.started', response1disk_11.tStartRefresh)
        trials_2.addData('response1disk_11.stopped', response1disk_11.tStopRefresh)
        trials_2.addData('response3disk_11.started', response3disk_11.tStartRefresh)
        trials_2.addData('response3disk_11.stopped', response3disk_11.tStopRefresh)
        trials_2.addData('response5disk_11.started', response5disk_11.tStartRefresh)
        trials_2.addData('response5disk_11.stopped', response5disk_11.tStopRefresh)
        trials_2.addData('response7disk_11.started', response7disk_11.tStartRefresh)
        trials_2.addData('response7disk_11.stopped', response7disk_11.tStopRefresh)
        trials_2.addData('rectangle_9.started', rectangle_9.tStartRefresh)
        trials_2.addData('rectangle_9.stopped', rectangle_9.tStopRefresh)
        trials_2.addData('text_51.started', text_51.tStartRefresh)
        trials_2.addData('text_51.stopped', text_51.tStopRefresh)
        trials_2.addData('text_52.started', text_52.tStartRefresh)
        trials_2.addData('text_52.stopped', text_52.tStopRefresh)
        # the Routine "response_sum" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_2'
    
    thisExp.nextEntry()
    
# completed 2 repeats of 'trials_3'


# ------Prepare to start Routine "survey1"-------
continueRoutine = True
# update component parameters for each repeat
textFill_5 = ''
# keep track of which components have finished
survey1Components = [copyText_1, question_4, submitanswer]
for thisComponent in survey1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
survey1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "survey1"-------
while continueRoutine:
    # get current time
    t = survey1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=survey1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *copyText_1* updates
    if copyText_1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        copyText_1.frameNStart = frameN  # exact frame index
        copyText_1.tStart = t  # local t and not account for scr refresh
        copyText_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(copyText_1, 'tStartRefresh')  # time at next scr refresh
        copyText_1.setAutoDraw(True)
    keys = event.getKeys()
    if 'escape' in keys:
        core.quit()  # So you can quit
    else:
        if keys:
            if keys[0] == 'space':
                textFill_1 += ' '  # Adds a space instead of 'space'
            if keys[0] == 'backspace':
                textFill_1 = textFill_1[:-1]  # Deletes 
            elif keys[0] == 'period':
                textFill_1 += '.'
            elif keys[0] in allLetters:
                textFill_1+=keys[0]  # Adds character to text if in alphabet.
            copyText_1.setText(textFill_1)  # Set new text on screen
    
    # *question_4* updates
    if question_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        question_4.frameNStart = frameN  # exact frame index
        question_4.tStart = t  # local t and not account for scr refresh
        question_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(question_4, 'tStartRefresh')  # time at next scr refresh
        question_4.setAutoDraw(True)
    
    # *submitanswer* updates
    if submitanswer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        submitanswer.frameNStart = frameN  # exact frame index
        submitanswer.tStart = t  # local t and not account for scr refresh
        submitanswer.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(submitanswer, 'tStartRefresh')  # time at next scr refresh
        submitanswer.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in survey1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "survey1"-------
for thisComponent in survey1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('copyText_1.started', copyText_1.tStartRefresh)
thisExp.addData('copyText_1.stopped', copyText_1.tStopRefresh)
thisExp.addData('answer1', textFill_1)
thisExp.nextEntry()



thisExp.addData('question_4.started', question_4.tStartRefresh)
thisExp.addData('question_4.stopped', question_4.tStopRefresh)
thisExp.addData('submitanswer.started', submitanswer.tStartRefresh)
thisExp.addData('submitanswer.stopped', submitanswer.tStopRefresh)
# the Routine "survey1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "survey2"-------
continueRoutine = True
# update component parameters for each repeat
textFill_2 = ''
# keep track of which components have finished
survey2Components = [copyText_2, question, submitanswer_2]
for thisComponent in survey2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
survey2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "survey2"-------
while continueRoutine:
    # get current time
    t = survey2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=survey2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *copyText_2* updates
    if copyText_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        copyText_2.frameNStart = frameN  # exact frame index
        copyText_2.tStart = t  # local t and not account for scr refresh
        copyText_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(copyText_2, 'tStartRefresh')  # time at next scr refresh
        copyText_2.setAutoDraw(True)
    keys = event.getKeys()
    if 'escape' in keys:
        core.quit()  # So you can quit
    else:
        if keys:
            if keys[0] == 'space':
                textFill_2 += ' '  # Adds a space instead of 'space'
            if keys[0] == 'backspace':
                textFill_2 = textFill_2[:-1]  # Deletes 
            elif keys[0] == 'period':
                textFill_2 += '.'
            elif keys[0] in allLetters:
                textFill_2+=keys[0]  # Adds character to text if in alphabet.
            copyText_2.setText(textFill_2)  # Set new text on screen
    
    # *question* updates
    if question.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        question.frameNStart = frameN  # exact frame index
        question.tStart = t  # local t and not account for scr refresh
        question.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(question, 'tStartRefresh')  # time at next scr refresh
        question.setAutoDraw(True)
    
    # *submitanswer_2* updates
    if submitanswer_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        submitanswer_2.frameNStart = frameN  # exact frame index
        submitanswer_2.tStart = t  # local t and not account for scr refresh
        submitanswer_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(submitanswer_2, 'tStartRefresh')  # time at next scr refresh
        submitanswer_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in survey2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "survey2"-------
for thisComponent in survey2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('copyText_2.started', copyText_2.tStartRefresh)
thisExp.addData('copyText_2.stopped', copyText_2.tStopRefresh)
thisExp.addData('answer2', textFill_2)
thisExp.nextEntry()



thisExp.addData('question.started', question.tStartRefresh)
thisExp.addData('question.stopped', question.tStopRefresh)
thisExp.addData('submitanswer_2.started', submitanswer_2.tStartRefresh)
thisExp.addData('submitanswer_2.stopped', submitanswer_2.tStopRefresh)
# the Routine "survey2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "survey3"-------
continueRoutine = True
# update component parameters for each repeat
textFill_3 = ''
# keep track of which components have finished
survey3Components = [copyText_3, question_2, submitanswer_3]
for thisComponent in survey3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
survey3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "survey3"-------
while continueRoutine:
    # get current time
    t = survey3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=survey3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *copyText_3* updates
    if copyText_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        copyText_3.frameNStart = frameN  # exact frame index
        copyText_3.tStart = t  # local t and not account for scr refresh
        copyText_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(copyText_3, 'tStartRefresh')  # time at next scr refresh
        copyText_3.setAutoDraw(True)
    keys = event.getKeys()
    if 'escape' in keys:
        core.quit()  # So you can quit
    else:
        if keys:
            if keys[0] == 'space':
                textFill_3 += ' '  # Adds a space instead of 'space'
            if keys[0] == 'backspace':
                textFill_3 = textFill_3[:-1]  # Deletes 
            elif keys[0] == 'period':
                textFill_3 += '.'
            elif keys[0] in allLetters:
                textFill_3+=keys[0]  # Adds character to text if in alphabet.
            copyText_3.setText(textFill_3)  # Set new text on screen
    
    # *question_2* updates
    if question_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        question_2.frameNStart = frameN  # exact frame index
        question_2.tStart = t  # local t and not account for scr refresh
        question_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(question_2, 'tStartRefresh')  # time at next scr refresh
        question_2.setAutoDraw(True)
    
    # *submitanswer_3* updates
    if submitanswer_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        submitanswer_3.frameNStart = frameN  # exact frame index
        submitanswer_3.tStart = t  # local t and not account for scr refresh
        submitanswer_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(submitanswer_3, 'tStartRefresh')  # time at next scr refresh
        submitanswer_3.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in survey3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "survey3"-------
for thisComponent in survey3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('copyText_3.started', copyText_3.tStartRefresh)
thisExp.addData('copyText_3.stopped', copyText_3.tStopRefresh)
thisExp.addData('answer3', textFill_3)
thisExp.nextEntry()



thisExp.addData('question_2.started', question_2.tStartRefresh)
thisExp.addData('question_2.stopped', question_2.tStopRefresh)
thisExp.addData('submitanswer_3.started', submitanswer_3.tStartRefresh)
thisExp.addData('submitanswer_3.stopped', submitanswer_3.tStopRefresh)
# the Routine "survey3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "survey_4"-------
continueRoutine = True
# update component parameters for each repeat
textFill_4 = ''
# keep track of which components have finished
survey_4Components = [copyText_4, question_3, submitanswer_4]
for thisComponent in survey_4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
survey_4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "survey_4"-------
while continueRoutine:
    # get current time
    t = survey_4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=survey_4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *copyText_4* updates
    if copyText_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        copyText_4.frameNStart = frameN  # exact frame index
        copyText_4.tStart = t  # local t and not account for scr refresh
        copyText_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(copyText_4, 'tStartRefresh')  # time at next scr refresh
        copyText_4.setAutoDraw(True)
    keys = event.getKeys()
    if 'escape' in keys:
        core.quit()  # So you can quit
    else:
        if keys:
            if keys[0] == 'space':
                textFill_4 += ' '  # Adds a space instead of 'space'
            if keys[0] == 'backspace':
                textFill_4 = textFill_4[:-1]  # Deletes 
            elif keys[0] == 'period':
                textFill_4 += '.'
            elif keys[0] in allLetters:
                textFill_4+=keys[0]  # Adds character to text if in alphabet.
            copyText_4.setText(textFill_4)  # Set new text on screen
    
    # *question_3* updates
    if question_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        question_3.frameNStart = frameN  # exact frame index
        question_3.tStart = t  # local t and not account for scr refresh
        question_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(question_3, 'tStartRefresh')  # time at next scr refresh
        question_3.setAutoDraw(True)
    
    # *submitanswer_4* updates
    if submitanswer_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        submitanswer_4.frameNStart = frameN  # exact frame index
        submitanswer_4.tStart = t  # local t and not account for scr refresh
        submitanswer_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(submitanswer_4, 'tStartRefresh')  # time at next scr refresh
        submitanswer_4.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in survey_4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "survey_4"-------
for thisComponent in survey_4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('copyText_4.started', copyText_4.tStartRefresh)
thisExp.addData('copyText_4.stopped', copyText_4.tStopRefresh)
thisExp.addData('answer4', textFill_4)
thisExp.nextEntry()



thisExp.addData('question_3.started', question_3.tStartRefresh)
thisExp.addData('question_3.stopped', question_3.tStopRefresh)
thisExp.addData('submitanswer_4.started', submitanswer_4.tStartRefresh)
thisExp.addData('submitanswer_4.stopped', submitanswer_4.tStopRefresh)
# the Routine "survey_4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "survey5"-------
continueRoutine = True
# update component parameters for each repeat
textFill_5 = ''
# keep track of which components have finished
survey5Components = [copyText_5, question_5, submitanswer_5]
for thisComponent in survey5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
survey5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "survey5"-------
while continueRoutine:
    # get current time
    t = survey5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=survey5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *copyText_5* updates
    if copyText_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        copyText_5.frameNStart = frameN  # exact frame index
        copyText_5.tStart = t  # local t and not account for scr refresh
        copyText_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(copyText_5, 'tStartRefresh')  # time at next scr refresh
        copyText_5.setAutoDraw(True)
    keys = event.getKeys()
    if 'escape' in keys:
        core.quit()  # So you can quit
    else:
        if keys:
            #if keys[0] == 'space':
                #textFill_5 += ' '  # Adds a space instead of 'space'
            if keys[0] == 'backspace':
                textFill_5 = textFill_5[:-1]  # Deletes 
            elif keys[0] == 'period':
                textFill_5 += '.'
            elif keys[0] in allLetters:
                textFill_5+=keys[0]  # Adds character to text if in alphabet.
            copyText_5.setText(textFill_5)  # Set new text on screen
    
    # *question_5* updates
    if question_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        question_5.frameNStart = frameN  # exact frame index
        question_5.tStart = t  # local t and not account for scr refresh
        question_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(question_5, 'tStartRefresh')  # time at next scr refresh
        question_5.setAutoDraw(True)
    
    # *submitanswer_5* updates
    if submitanswer_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        submitanswer_5.frameNStart = frameN  # exact frame index
        submitanswer_5.tStart = t  # local t and not account for scr refresh
        submitanswer_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(submitanswer_5, 'tStartRefresh')  # time at next scr refresh
        submitanswer_5.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in survey5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "survey5"-------
for thisComponent in survey5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('copyText_5.started', copyText_5.tStartRefresh)
thisExp.addData('copyText_5.stopped', copyText_5.tStopRefresh)
thisExp.addData('answer5', textFill_5)
thisExp.nextEntry()



thisExp.addData('question_5.started', question_5.tStartRefresh)
thisExp.addData('question_5.stopped', question_5.tStopRefresh)
thisExp.addData('submitanswer_5.started', submitanswer_5.tStartRefresh)
thisExp.addData('submitanswer_5.stopped', submitanswer_5.tStopRefresh)
# the Routine "survey5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "survey6"-------
continueRoutine = True
# update component parameters for each repeat
textFill_6 = ''
# keep track of which components have finished
survey6Components = [copyText_6, question_6, submitanswer_6]
for thisComponent in survey6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
survey6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "survey6"-------
while continueRoutine:
    # get current time
    t = survey6Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=survey6Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *copyText_6* updates
    if copyText_6.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        copyText_6.frameNStart = frameN  # exact frame index
        copyText_6.tStart = t  # local t and not account for scr refresh
        copyText_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(copyText_6, 'tStartRefresh')  # time at next scr refresh
        copyText_6.setAutoDraw(True)
    keys = event.getKeys()
    if 'escape' in keys:
        core.quit()  # So you can quit
    else:
        if keys:
            if keys[0] == 'space':
                textFill_6 += ' '  # Adds a space instead of 'space'
            if keys[0] == 'backspace':
                textFill_6 = textFill_6[:-1]  # Deletes 
            elif keys[0] == 'period':
                textFill_6 += '.'
            elif keys[0] in allLetters:
                textFill_6+=keys[0]  # Adds character to text if in alphabet.
            copyText_6.setText(textFill_6)  # Set new text on screen
    
    # *question_6* updates
    if question_6.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        question_6.frameNStart = frameN  # exact frame index
        question_6.tStart = t  # local t and not account for scr refresh
        question_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(question_6, 'tStartRefresh')  # time at next scr refresh
        question_6.setAutoDraw(True)
    
    # *submitanswer_6* updates
    if submitanswer_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        submitanswer_6.frameNStart = frameN  # exact frame index
        submitanswer_6.tStart = t  # local t and not account for scr refresh
        submitanswer_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(submitanswer_6, 'tStartRefresh')  # time at next scr refresh
        submitanswer_6.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in survey6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "survey6"-------
for thisComponent in survey6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('copyText_6.started', copyText_6.tStartRefresh)
thisExp.addData('copyText_6.stopped', copyText_6.tStopRefresh)
thisExp.addData('answer6', textFill_6)
thisExp.nextEntry()



thisExp.addData('question_6.started', question_6.tStartRefresh)
thisExp.addData('question_6.stopped', question_6.tStopRefresh)
thisExp.addData('submitanswer_6.started', submitanswer_6.tStartRefresh)
thisExp.addData('submitanswer_6.stopped', submitanswer_6.tStopRefresh)
# the Routine "survey6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "survey7"-------
continueRoutine = True
# update component parameters for each repeat
textFill_7 = ''
# keep track of which components have finished
survey7Components = [copyText_7, question_7, submitanswer_7]
for thisComponent in survey7Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
survey7Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "survey7"-------
while continueRoutine:
    # get current time
    t = survey7Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=survey7Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *copyText_7* updates
    if copyText_7.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        copyText_7.frameNStart = frameN  # exact frame index
        copyText_7.tStart = t  # local t and not account for scr refresh
        copyText_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(copyText_7, 'tStartRefresh')  # time at next scr refresh
        copyText_7.setAutoDraw(True)
    keys = event.getKeys()
    if 'escape' in keys:
        core.quit()  # So you can quit
    else:
        if keys:
            if keys[0] == 'space':
                textFill_7 += ' '  # Adds a space instead of 'space'
            if keys[0] == 'backspace':
                textFill_7 = textFill_7[:-1]  # Deletes 
            elif keys[0] == 'period':
                textFill_7 += '.'
            elif keys[0] in allLetters:
                textFill_7+=keys[0]  # Adds character to text if in alphabet.
            copyText_7.setText(textFill_7)  # Set new text on screen
    
    # *question_7* updates
    if question_7.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        question_7.frameNStart = frameN  # exact frame index
        question_7.tStart = t  # local t and not account for scr refresh
        question_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(question_7, 'tStartRefresh')  # time at next scr refresh
        question_7.setAutoDraw(True)
    
    # *submitanswer_7* updates
    if submitanswer_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        submitanswer_7.frameNStart = frameN  # exact frame index
        submitanswer_7.tStart = t  # local t and not account for scr refresh
        submitanswer_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(submitanswer_7, 'tStartRefresh')  # time at next scr refresh
        submitanswer_7.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in survey7Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "survey7"-------
for thisComponent in survey7Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('copyText_7.started', copyText_7.tStartRefresh)
thisExp.addData('copyText_7.stopped', copyText_7.tStopRefresh)
thisExp.addData('answer7', textFill_7)
thisExp.nextEntry()



thisExp.addData('question_7.started', question_7.tStartRefresh)
thisExp.addData('question_7.stopped', question_7.tStopRefresh)
thisExp.addData('submitanswer_7.started', submitanswer_7.tStartRefresh)
thisExp.addData('submitanswer_7.stopped', submitanswer_7.tStopRefresh)
# the Routine "survey7" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
