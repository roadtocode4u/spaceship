---
title: Video Tag and Audio Tag
description: "Video Tag and Audio Tag"
hide_table_of_contents: true
---

# Video Tag and Audio Tag

Video tag is used to show a video on web page in html.

**Syntax :**

```html
<video>
  <source src="<url>" type="video/mp4" />
</video>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Video Tag</title>
  </head>
  <body>
    <video>
      <source src="./sample-video.mp4" type="video/mp4" />
    </video>
  </body>
</html>
```

**Output :**

<img src="/icp/08/output-1.png" alt="output-1" width="600px"/>

### There are Some Attributes available for video tag

1. Controls
2. Height
3. Width
4. Autoplay
5. Muted
6. Poster

### Controls

Controls attributes are used to show controls on video like Play, Pause, Volume, Fullscreen toggle.

### Height and Width

Height and Width Attribute are used to provide height and width for video.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Video Tag</title>
  </head>
  <body>
    <video height="300px" controls autoplay>
      <source src="./sample-video.mp4" type="video/mp4" />
    </video>
  </body>
</html>
```

**Output :**

<img src="/icp/08/output-2.png" alt="output-2" width="600px"/>

### Auto Play

AutoPlay Attribute are used to the video will automatically start when you visit on webpage.

### Muted

The muted attribute specifies the audio of your video is muted.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Video Tag</title>
  </head>
  <body>
    <video height="300px" controls autoplay muted>
      <source src="./sample-video.mp4" type="video/mp4" />
    </video>
  </body>
</html>
```

**Output :**

<img src="/icp/08/output-3.png" alt="output-3" width="600px"/>

### Poster

The poster attribute are used to show image to your video.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Video Tag</title>
  </head>
  <body>
    <video height="300px" poster="./bulb-on.png" controls>
      <source src="./sample-video.mp4" type="video/mp4" />
    </video>
  </body>
</html>
```

**Output :**

<img src="/icp/08/output-4.png" alt="output-4" width="600px"/>

### Audio Tag

Audio tag is used to show a audio on web page in html.

**Syntax :**

```html
<audio>
  <source src="<url>" type="audio/mp3" />
</audio>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Audio Tag</title>
  </head>
  <body>
    <audio controls>
      <source src="sample-audio.mp3" type="audio/mp4" />
    </audio>
  </body>
</html>
```

**Output :**

<img src="/icp/08/output-5.png" alt="output-5" width="600px"/>

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Audio Tag</title>
  </head>
  <body>
    <audio controls muted autoplay>
      <source src="sample-audio.mp3" type="audio/mp4" />
    </audio>
  </body>
</html>
```

**Output :**

<img src="/icp/08/output-6.png" alt="output-6" width="600px"/>

### 🔊▶️ Audio and Video URLs

You can use these URLs directly for the src attribute. For example src="url"

For audio:
https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_500KB_MP3.mp3

For video:
https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
