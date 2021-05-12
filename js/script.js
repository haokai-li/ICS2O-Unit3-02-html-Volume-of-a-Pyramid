// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Volume-of-a-Pyramid

"use strict"

function enterClicked() {
  // This function get L and W and h and calculate and show it back

  //input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const volume = (length * width * height) / 3

  //output
  document.getElementById('Volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + 'cm³'
}