---
title: "Contact"
description: "Get in touch with The Global Edit."
layout: layouts/base.njk
---

<div style="max-width: 720px; margin: 4rem auto; padding: 0 1.5rem;">

  <div style="margin-bottom: 2rem;">
    <span class="tag">Contact</span>
  </div>

  <h1 style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 600; line-height: 1.2; margin-bottom: 1rem;">Get in Touch</h1>

  <p style="font-size: 17px; line-height: 1.85; color: #2d3748; margin-bottom: 2.5rem;">Have a question, story idea, collaboration proposal, or just want to say hello? We'd love to hear from you. Fill out the form below and we'll get back to you within 48 hours.</p>

  <form name="contact" method="POST" data-netlify="true" style="display:flex; flex-direction:column; gap:1.25rem;">
    <input type="hidden" name="form-name" value="contact">

    <div>
      <label style="display:block; font-size:12px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; color:var(--navy); margin-bottom:.5rem;">Your Name</label>
      <input type="text" name="name" required style="width:100%; padding:10px 14px; border:1px solid var(--border); border-radius:2px; font-family:var(--font-body); font-size:15px; color:var(--navy); background:var(--warm-white); outline:none;">
    </div>

    <div>
      <label style="display:block; font-size:12px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; color:var(--navy); margin-bottom:.5rem;">Email Address</label>
      <input type="email" name="email" required style="width:100%; padding:10px 14px; border:1px solid var(--border); border-radius:2px; font-family:var(--font-body); font-size:15px; color:var(--navy); background:var(--warm-white); outline:none;">
    </div>

    <div>
      <label style="display:block; font-size:12px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; color:var(--navy); margin-bottom:.5rem;">Subject</label>
      <select name="subject" style="width:100%; padding:10px 14px; border:1px solid var(--border); border-radius:2px; font-family:var(--font-body); font-size:15px; color:var(--navy); background:var(--warm-white); outline:none;">
        <option value="">Select a topic...</option>
        <option value="general">General Inquiry</option>
        <option value="collaboration">Collaboration / Partnership</option>
        <option value="advertising">Advertising</option>
        <option value="press">Press</option>
        <option value="tip">Story Tip</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div>
      <label style="display:block; font-size:12px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; color:var(--navy); margin-bottom:.5rem;">Message</label>
      <textarea name="message" required rows="6" style="width:100%; padding:10px 14px; border:1px solid var(--border); border-radius:2px; font-family:var(--font-body); font-size:15px; color:var(--navy); background:var(--warm-white); outline:none; resize:vertical;"></textarea>
    </div>

    <button type="submit" style="align-self:flex-start