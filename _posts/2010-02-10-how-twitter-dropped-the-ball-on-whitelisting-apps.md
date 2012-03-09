---
layout: post
title: How Twitter Dropped The Ball on Whitelisting Apps
description: If you've been wondering about whitelisting and why your app never got Approved (or Denied) then read on
tags:
 - Twitter
 - APO
 - Whitelisting
---

If you've been wondering about whitelisting and why your app never got Approved (or Denied) then read on.

Several weeks ago I posted a ticket per Twitter ordinance on getting a registered Twitter App Whitelisted. The app was for helping users manage their lists and use an intuitive drag and drop interface. To get the data for lists we only receive 20 users on a list of up to 500 twitter users (20 lists per user](. So I needed to be whitelisted to go to product launch.

The benefits include but are not limited to an increase from 350 REST calls to 20,000 per hour. Realistically a lot of apps are requesting a lot of data, and 350 calls per hour just does not cut it. See just how much Twitter cares about their developers, the very people that Drive traffic and make it what it is today. A singularity. A massive ecosystem of it's own. And it's all powered by Apps. While I waited patiently, this message thread popped up on the official TwitterAPI List. You need to read it all to get it in context. This is about a week old.

**

> How often should you send a request to be whitelisted? I am finding that in the
span of time that I'm waiting for an answer, the nature of my project has
changed drastically. So I then resend a request. Does this affect whether you
will be whitelisted or not? And should I wait for a rejection before
rerequesting in the future?

> Thank you,

> - Cassie

**

> Hi Cassie,

> We're almost always behind in processing whitelisting requests. Due to volume,
we can't respond to all requests. If the nature of your project has changed, you
should feel free to re-apply ? even if you were already granted whitelisted
status, as the nature of a project is certainly taken into account in the
decision making process. Feel free to follow up with me privately at list with
the username you?ve filed a whitelisting request under for expanded discussion.
Thanks, Taylor [Taylor Singletary, @episod] We're almost always behind in processing whitelisting requests. Due to volume,
we can't respond to all requests?

> Really? Is not responding at all to whitelisting requests an official policy? If
you mean you can't respond quickly, that makes sense. If you mean you can't
approve all requests, I agree. But is no response at all a smart, polite, or
even efficient way to deal with requests from developers? It seems like a
guaranteed way to create discouraged developers. I know you try hard to be
responsive, Taylor, and the fact that you will discuss this off-list proves
this. So I'm guessing this is a policy you are just repeating. Maybe you can go
back to management and point out the flaws in this approach?

> If a decision is made to deny a whitelist request, and at least a few minutes
are spent on that decision, wouldn't it make more sense to reply with a denial?
Otherwise the developer is left to repeat the request, which must use up more
time for Twitter HQ than sending a denial in the first place. Repeated requests
with no response leaves the developer with the opinion that Twitter doesn't want
a third-party ecosystem, which clearly isn't the case. It also fills this list
with messages from annoyed developers, which doesn't send a good message to new
developers.

> Why can't someone reply with "Sorry, we can't approve this request right now due
to insufficient resources, but we appreciate your interest in Twitter
development. Please try again in the future, as we may have more resources
available at that time" How many seconds does it take to send this type of
email?

> [Adam]

**

> Hi Adam,

> The lack of response to some requests is due more to them going unread than
being explicitly denied. I make a best effort to keep up with the volume of
requests and approve or deny each that I process (balanced with my other
responsibilities). These produce an email response. To be honest, the volume of
requests is so high that we have to take a "divide & conquer" approach,
processing recent and dated requests alike. Obviously, this is suboptimal, which
is why I welcome direct inquiries to help focus attention. I can't really
disclose the volume of requests, but it is more than you probably imagine and
the vast majority of them are not actionable due to an insufficient amount of
information. We're actively working on a better model for whitelisting as a
concept & execution, as well as providing a more actionable funnel to ensure
that the current situation of developers falling through the cracks is minified.

> Taylor [@episod]

> This is a reasonable response, and I'm not trying to give you personally a hard
time. I'm hoping that Dick, Ev, Ryan, and other managers will see this and
realize that they are turning away developers by not devoting enough resources
to this issue. I'm sure if they were asked, they?d say they devote huge
resources to developers, which they do. Do they really know that developers who
ask to build an app on Twitter aren't even responded to? Do they really believe
that will work in their favor over the long run?

> Let's flip it around a minute and view this from the developers' perspective.
Every whitelist request comes from a developer who might have a client. Do you
really want developers telling clients that Twitter is so busy they won't even
reply if I ask to build you an app. Don't bother trying to integrate Twitter
with your site. Let me build something for you with Facebook instead?

> Maybe linking to a page with an explanation like you just gave would be better
than just replying with "we can't respond to all requests." Although the real
solution is for Twitter to make the whitelisting criteria more transparent, and
reasons for rejection more clear. At a minimum every developer who cares enough
to ask to create a Twitter app deserves a response. I believe it is possible to
write code that will do this for you.

> You keep plugging away at that backlog, Taylor, and I'll keep lobbying for more
resources. I have an active interest in seeing Twitter succeed as a developer
ecosystem.

I had to post the whole thread to keep it in context. Twitter is a company
without a viable revenue stream and they play favorites. I personally know
someone that is friends with several Twitter employees and has several
whitelisted apps no problem. It's a favorites game. Does Twitter care about it's
developers? Based on their managerial and personal standpoint I would say that
is a definitive no. Does Taylor care about the backlog? Does his divide and
conquer approach work? No. It hasn't worked; and I know this because I also
never received even a "declined".

**Update:**

> Beginning today, Twitter will no longer grant whitelisting requests. We will continue to allow whitelisting privileges for previously approved applications; however any unanswered requests recently submitted to Twitter will not be granted whitelist access.

> Twitter whitelisting was originally created as a way to allow developers to request large amounts of data through the REST API. It provided developers with an increase from 150 to 20,000 requests per hour, at a time when the API had few bulk request options and the Streaming API was not yet available.

> Since then, we've added new, more efficient tools for developers, including lookups, ID lists, authentication and the Streaming API. Instead of whitelisting, developers can use these tools to create applications and integrate with the Twitter platform.

> As always, we are committed to fostering an ecosystem that delivers value to Twitter users. Access to Twitter APIs scales as an application grows its userbase. With authentication, an application can make 350 GET requests on a user’s behalf every hour. This means that for every user of your service, you can request their timelines, followers, friends, lists and saved searches up to 350 times per hour. Actions such as Tweeting, Favoriting, Retweeting and Following do not count towards this 350 limit. Using authentication on every request is recommended, so that you are not affected by other developers who share an IP address with you.

> We also want to acknowledge that there are going to be some things that developers want to do that just aren’t supported by the platform. Rather than granting additional privileges to accommodate those requests, we encourage developers to focus on what's possible within the rich variety of integration options already provided. Developers interested in elevated access to the Twitter stream for the purpose of research or analytics can contact our partner Gnip for more information.

> As always, we are here to answer questions, and help you build applications and services that offer value to users.

> Ryan

> -- Ryan Sarver @rsarver 
