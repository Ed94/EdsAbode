---
title: Projects
date: 2020-04-09 22:19:27
---


# <div align="center">Contract

## VR Co-Location Prototype

*September 2019 - Present*

(Private)

Tools Used: Unreal (C++, Blueprints, VREP), Oculus Quest

The contract is set out to research and develop a prototype project that sucessfully implements use of co-location in a large scale space. There was a need to see if the Oculus Quest had the required hardware accuracy at the desired scale of the space, and if it was viable to use current software tools such as Unreal and VREP without need to develop tools inhouse. 

We fully scoped and drafted the tasks for the R & D based on what our client wanted and provided the staging with updates through trello and microsoft teams.

# <div align="center"> Florida International University

## **ICAVE**

### **Fire360 (V2)**

*May 2018 - Present*

(Private)

This is a incident command simulated developed by the ICAVE lab at FIU for the Department of Emergency Management (FIU). It allows a "hands off" immersive expereince using the ICAVE itself, while also using the head-node's monitor array to engage up to 8 Firefighters in the experience. An instructor controls the simulation using an iPad communicating via a rest server to the Fire360 instance running on the ICAVE head node. 

Unlike other firefighters simulators you see online, this was built from the ground up based on immediate feedback from departments chiefs in south florida and those instructing firefighter training at FIU. This lead to a less of a hands on expereince and it becoming more directed toward praticing proper protcol on one the scenes developed.

The project was built using Mechdyne's getReal3D api and plugin for Unity 2017. The code for the simulation is entirely C#, and the iPad web app is written using C# as well with the Blazor framework.

Version 1 was a rapidly developed prototype initially made by Fernando, Haczar, and Leo (ICAVE lab developers) before I had arrived at the ICAVE.Currently version 2 has been in development since I was hired to the ICAVE back in May 2018 and will be releasing most likely around Fall 2020. I was tasked with helping develop the simulation itself along with Haczar (co-worker). I ended up designing and implementing the majority of the simulation on the Unity side of things as well as polishing the lighting for release. The components of the simulation were design to be fully modular and scalable as with V2 it was intended to be used to make multiple scenarios rapdily once the first scenario was ready for release.

<img src="https://i.imgur.com/hD0Os4k.png" width="500">
<img src="https://i.imgur.com/VA9qigf.png" width="500">
<img src="https://i.imgur.com/Z40US7M.jpg" width="500">
<img src="https://i.imgur.com/wj87QcB.png" width="500">

### **First Year Expereince**

*February 2020 - Present*

(Private)

The ACS (Academic and Student Success) Department at FIU approached the ICAVE with the task of using HP provided hardware to produce a VR experience for the FYE (First Year Expereince) course. They wanted something done with multiplayer support for student collaboration in real-time in a virtual space.

We provided an implementation made in Unreal 4.23, that supported both lan and using the steam multiplayer for remote sessions. Since this was a prototype the implementation was essentially entirely in Blueprints using the advanced sessions plugin and virtual reality expansion plugin (VREP).

<!-- {% youtuber video YEMYDZzK74E %} -->
<!-- {% endyoutuber %} -->
<!-- {% youtuber video nmyWYVrwxC0 %} -->
<!-- {% endyoutuber %} -->


## Classes

### **DuctTapedGL**

*CAP4710 - Principles of Computer Graphics* - Spring 2020

[Github](https://github.com/Ed94/DuctTaped_GL)

This is a wrapping library I made for OpenGL, GLFW, and GLM for the purpose of learning and completeing my first and second assingment for my CG course at FIU. Its a low level wrap that avoids uses of class structures unless necesary and mostly acts as a giant rename with extra functionality for loading models and handling a set of rudimentary enitites. 

At first I did it in my non-standard C++ using my cpp alias and later translated and continued to work on it in standard c++ 17. I also made a nice little action queue for inputs to learn some advanced template for generating and handling delegates of arbitrary functions.

<img src="https://i.imgur.com/v3rBHOW.gif" width="500">

## Spark Dev

### **Infinite Whiteboard**

*September 2017 - December 2017*

[Github](https://github.com/eds-archived-projects/InfiniteWBVR)

The pilot semester for spark dev, a program at FIU that allows students to work on a team without the risk of failure impacting their performance during their degree. The VR division decided to complete a multiplayer concept of collaboration space that had scalable whiteboards.\

The project was done in Unity in 9 weeks. It was my first major project using a fully-featured game engine, before this I had only used game frameworks like Monogame for C# and SDL 2.0 for C++. We were able to get all the functionality we wanted minus the multiplayer unfortunately.



### **Multiplayer Shootout**

*Janurary 2018 - April 2028*

[Github](https://github.com/eds-archived-projects/VR_MultiPlayerShootout)

First project in Unreal Engine, used the multiplayer template provided via the unreal learn's gameplay concepts section. We attempted to port the template to VR perserving the multiplayer functionality. Unfortunately due to constraints we ended up instead making a shooting gallery with the assets during the demo presentation.

{% youtuber video r8wUAzsmNuI  %}
{% endyoutuber %}

# <div align="center"> Personal

## NE Project 

*August 2018 - Present*

(Private) - Utilities Library: [Github](https://github.com/Ed94/NE_Utilities)

STEM Workspace, my C++ playground. Written in non-standard conventions I made with my cpp aliased library to help me learn the language at a faster pace. 

Aims for MVP are to be a real-time math object manipulation engine and workspace.

I have the utilities library publicly on [github](https://github.com/Ed94/NE_Utilities).

## Phantom

*January 2018 - September 2019*

(Private)

Virtual Reality Interaction Mechanic for Unreal.

(On Hiatus)

## Trial By Fire

*October 2018 - Present*

[Github](https://github.com/Trial-By-Fire)

A conglomeration of projects attempt to do techncial learning using a different approach to traditional means.

Last tackling drafts of different series...

(On Hiatus)
