const footer = document.getElementById('footer')
footer.innerHTML = `
       <footer id="site-footer" class="relative bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 py-14">
            <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div class="space-y-4" data-aos="fade-up" data-aos-duration="700">
                    <a href="/index.html"
                        class="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-zinc-900">Rahima<span
                            class="text-indigo-600">.</span></a>
                    <p class="text-sm text-zinc-600">Project Management and Data & Operations Analyst. Turning data into
                        decisions and processes into systems.</p>
                    <div class="flex items-center gap-3">
                        <a href="https://www.linkedin.com/in/rahimawaheed/" target="_blank" rel="noopener"
                            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:text-indigo-600 hover:border-indigo-200 transition"><i
                                class="fa-brands fa-linkedin"></i></a>
                        <a href="mailto:rahimarizmi.waheed@gmail.com"
                            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:text-indigo-600 hover:border-indigo-200 transition"><i
                                class="fa-regular fa-envelope"></i></a>
                    </div>
                    <div class="text-sm text-zinc-500">New York, USA • Open to PM, Ops, and Data roles</div>
                </div>

                <div class="grid grid-cols-2 gap-10 md:col-span-1 lg:col-span-2" data-aos="fade-up"
                    data-aos-duration="700" data-aos-delay="50">
                    <div class="space-y-3">
                        <h3 class="text-lg font-semibold text-zinc-900">Pages</h3>
                        <ul class="space-y-4 text-sm">
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition" href="/index.html">Home</a>
                            </li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition" href="/about.html">About</a>
                            </li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/experience.html">Experience</a></li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/projects.html">Projects</a></li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="space-y-3">
                        <h3 class="text-lg font-semibold text-zinc-900">Services</h3>
                        <ul class="space-y-4 text-sm">
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/services.html#project-management">Project Management</a></li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/services.html#operations">Operations & Process</a></li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/services.html#data-analysis">Data Analytics</a></li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/services.html#dashboards">Dashboards</a></li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/services.html#automation">Automation</a></li>
                            <li><a class="text-zinc-700 hover:text-indigo-600 transition"
                                    href="/services.html#consulting">Advisory & Training</a></li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                    <h3 class="text-lg font-semibold text-zinc-900">Get in touch</h3>
                    <p class="text-sm text-zinc-600">Have a project or a role? I’d love to hear from you.</p>
                    <div class="flex flex-col gap-2 ">
                        <a href="mailto:rahimarizmi.waheed@gmail.com"
                            class="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-indigo-600 transition"><i
                                class="fa-regular fa-envelope"></i>rahimarizmi.waheed@gmail.com</a>
                        <a href="/contact.html#hire"
                            class="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-indigo-600 transition"><i
                                class="fa-solid fa-handshake-simple"></i>Hire Me</a>
                        <a href="/resume/rahima-waheed-cv.pdf"
                            class="inline-flex items-center gap-3 text-sm text-zinc-600 hover:text-indigo-600 transition"><i
                                class="fa-solid fa-file-arrow-down"></i>Download CV</a>
                    </div>
                </div>
            </div>

            <div
                class="mt-10 border-t border-zinc-200 pt-6 flex flex-col md:flex-row items-center justify-center gap-3">
                <p class="text-sm text-zinc-500">© <span id="year"></span> Rahima Waheed. All rights reserved.</p>
            </div>
        </div>
    </footer>
`
  (function () { var y = document.getElementById('year'); if (y) { y.textContent = new Date().getFullYear(); } })();
