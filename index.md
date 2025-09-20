---
layout: base.njk
title: "amcampbell"
templateEngineOverride: njk,md
---

# A. M. Campbell

I like statistics, medicine, computing, and rationality. Currently quantifying how hospitals' patterns of care change over time for cancer patients at the end of life. Interested in tools for thought and spaced repetition memory systems.

{% set publishedPosts = [] %}
{% for post in collections.writing %}
{% if not post.data.draft %}
{% set publishedPosts = (publishedPosts.push(post), publishedPosts) %}
{% endif %}
{% endfor %}

{% if publishedPosts.length > 0 %}

## Latest Writing

<div class="writings-list">
{% for post in publishedPosts | reverse %}
<article class="post-preview">

### [{{ post.data.title }}]({{ post.url }})

<time datetime="{{ post.data.date | date('YYYY-MM-DD') }}">{{ post.data.date | date('MMMM DD, YYYY') }}</time>{% if post.data.description %}, {{ post.data.description }}{% endif %}

[Read more →]({{ post.url }})

</article>
{% endfor %}
</div>
{% endif %}

---

I'm also on [GitHub](https://github.com/AM-Campbell).
