/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import throttle from "lodash/throttle";

const contentRoot = window.document.querySelector(".rst-content");
const sideNavRoot = window.document.querySelector(".wy-nav-side-toc");
const navbarHeight = window.document.querySelector("header > nav").offsetHeight;

let currentActive = null;

const runProgressTracking = () => {
  if (!contentRoot || !sideNavRoot) return;

  let sections = Array.from(contentRoot.querySelectorAll(".section"));
  const sectionsOffsets = sections.map((element) => ({
    id: element.id,
    offset: element.offsetTop
  }));

  const handleActiveSection = () => {
    const currentActiveIndex = Math.max(
      sectionsOffsets.findIndex((section) => section.offset - window.scrollY + navbarHeight > 0) - 1,
      0
    );
    currentActive = sectionsOffsets[currentActiveIndex];


    Array.from(sideNavRoot.querySelectorAll("li")).forEach(
      (el) => el.classList.remove("current")
    );
    if (currentActive) {
      const anchor = sideNavRoot.querySelector(`[href='#${currentActive.id}']`);
      anchor && anchor.closest("li").classList.add("current");
    }
  };

  window.addEventListener("scroll", throttle(handleActiveSection, 10));
  window.addEventListener("resize", throttle(handleActiveSection, 10));
  handleActiveSection();
};

runProgressTracking();
