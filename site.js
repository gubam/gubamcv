// Add your verified work below.
// Publication: { title, authors, venue, year, url }
// Project: { title, description, tags: ["Robotics"], url, year: "2026" }
const publications = [];
const projects = [];
const links = { linkedin: "https://www.linkedin.com/in/gyubeom-jo-557770318/" };
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function external(url, label) {
  return '<a href="' + escapeHTML(url) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(label) + ' <span aria-hidden="true">&nearr;</span></a>';
}
const email = "whrb106@hanyang.ac.kr";
const emailLink = '<a href="mailto:' + email + '">e-mail</a>';
const page = document.body.dataset.page;
const navigation = [["about", "index.html", "About"], ["publications", "publications.html", "Publications"], ["projects", "projects.html", "Projects"]];
const nav = '<header class="site-header wrapper"><a class="site-name" href="index.html">gubam</a><nav aria-label="Main navigation">' + navigation.map(([id, url, label]) => '<a href="' + url + '"' + (page === id ? ' aria-current="page"' : '') + '>' + label + '</a>').join("") + '</nav></header>';
function entry(date, title, institution, description = "") {
  return '<article class="entry"><p class="entry-date">' + date + '</p><div><h3>' + title + '</h3><p>' + institution + '</p>' + (description ? '<p class="entry-description">' + description + '</p>' : '') + '</div></article>';
}
const lab = '<a class="inline-link" href="https://bmr.hanyang.ac.kr/" target="_blank" rel="noopener noreferrer">RoCogMan Lab</a>';
const about = `
<section class="profile" aria-label="Profile">
  <div class="avatar" aria-hidden="true">GJ</div>
  <div><h1>Gyubeom Jo</h1><p>M.S. Student &middot; Robotics Researcher</p><p class="affiliation">${lab}, Hanyang University</p>
  <div class="social-links">${emailLink}${external(links.linkedin, "LinkedIn")}</div></div>
</section>
<section class="section"><h2>About</h2>
  <p>I am an M.S. student at Hanyang University, working on robotics and intelligent systems in the ${lab}.</p>
  <p>My research interests include <strong>robot learning</strong>, <strong>computer vision</strong>, and <strong>robotic manipulation</strong>. I am interested in developing robots that can perceive, learn, and interact with the physical world.</p>
</section>
<section class="section"><h2>Education</h2>
  ${entry("2026 &ndash; Present", "M.S. in Hanyang University", "Robotics Engineering", lab + " &middot; Since February 2026")}
  ${entry("2020 &ndash; 2026", "B.S. in Hanyang University ERICA", "Electronical Engineering")}
</section>
<section class="section"><h2>Research experience</h2>
  ${entry("Feb 2026 &ndash; Present", "M.S. Graduate Student", lab + " &middot; Hanyang University", "Research in robot learning, computer vision, and robotic manipulation.")}
  ${entry("Jun 2025 &ndash; Feb 2026", "Undergraduate Researcher", lab + " &middot; Hanyang University", "Undergraduate research in robot perception and learning.")}
</section>
<section class="section"><h2>Research &amp; projects</h2>
  <p>Find my research on the <a class="inline-link" href="publications.html">Publications</a> page and implementations on the <a class="inline-link" href="projects.html">Projects</a> page.</p>
</section>`;
const publicationList = publications.length
  ? publications.map(p => '<article class="entry"><p class="entry-date">' + escapeHTML(p.year) + '</p><div><h2 class="entry-title">' + escapeHTML(p.title) + '</h2><p>' + escapeHTML(p.authors) + '</p><p class="entry-description">' + escapeHTML(p.venue) + '</p><div class="entry-links">' + external(p.url, "Paper") + '</div></div></article>').join("")
  : '<p class="empty-note">Publications will be listed here as they become available.</p>';
const projectList = projects.length
  ? projects.map(p => '<article class="entry"><p class="entry-date">' + escapeHTML(p.year) + '</p><div><h2 class="entry-title">' + escapeHTML(p.title) + '</h2><p>' + escapeHTML(p.description) + '</p><p class="entry-description">' + (p.tags || []).map(escapeHTML).join(' &middot; ') + '</p><div class="entry-links">' + external(p.url, "View project") + '</div></div></article>').join("")
  : '<p class="empty-note">Project details will be added here.</p>';
const publicationsPage = '<header class="page-heading"><h1>Publications</h1><p>Research in robotics, learning, and perception.</p></header><section class="collection" aria-label="Publication list">' + publicationList + '</section>';
const projectsPage = '<header class="page-heading"><h1>Projects</h1><p>Experiments and implementations in robotics.</p></header><section class="collection" aria-label="Project list">' + projectList + '</section>';
const footer = '<footer class="site-footer wrapper"><p>&copy; ' + new Date().getFullYear() + ' Gyubeom Jo</p><div class="social-links">' + emailLink + external(links.linkedin, "LinkedIn") + '</div></footer>';
document.getElementById("site").innerHTML = nav + '<main id="main" class="wrapper">' + (page === "publications" ? publicationsPage : page === "projects" ? projectsPage : about) + '</main>' + footer;
