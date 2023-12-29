---
title: Video Tag and Audio Tag
description: "Video Tag and Audio Tag"
hide_table_of_contents: true
---

# Video Tag and Audio Tag

The video tag in HTML is used to **display videos** on a web page, while the audio tag is used to **play audio files**. This guide will show you how to use these tags and their attributes.

**Syntax :**

To use the video tag, follow this syntax:

```html
<video>
  <source src="<url>" type="video/mp4" />
</video>
```

**Code :**

```html showLineNumbers=true
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

<img src="/html/10/output-1.png" alt="output-1" width="600px"/>

The above code will display the video specified by the `src` attribute. In this example, the video file `sample-video.mp4` is located in the same directory as the HTML file.

## Video Tag Attributes

The video tag supports various attributes to customize its behavior:

1. `Controls`: Adds video controls such as play, pause, volume, and fullscreen toggle.
2. `Height` and `Width`: Sets the height and width of the video element.
3. `Autoplay`: Automatically starts playing the video when the web page is loaded.
4. `Muted`: Mutes the audio of the video.
5. `Poster`: Displays an image as a placeholder before the video is loaded.

### Controls

Controls attributes are used to **show controls** on video like Play, Pause, Volume, Fullscreen toggle.

### Height and Width

Height and Width Attribute are used to provide height and width for video.

**Code :**

```html showLineNumbers=true
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

<img src="/html/10/output-2.png" alt="output-2" width="600px"/>

### Auto Play

AutoPlay Attribute are used to the video will automatically start when you visit on webpage.

### Muted

The muted attribute specifies the audio of your video is muted.

**Code :**

```html showLineNumbers=true
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

<img src="/html/10/output-3.png" alt="output-3" width="600px"/>

### Poster

The poster attribute are used to show image to your video.

**Code :**

```html showLineNumbers=true
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

<img src="/html/10/output-4.png" alt="output-4" width="600px"/>

### Loop

This attribute specifies that the video should automatically restart from the beginning once it reaches the end.

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Video Tag</title>
  </head>
  <body>
    <video height="300px" controls loop>
      <source src="./sample-video.mp4" type="video/mp4" />
    </video>
  </body>
</html>
```

### Audio Tag

Audio tag is used to show a audio on web page in html.

**Syntax :**

```html
<audio>
  <source src="<url>" type="audio/mp3" />
</audio>
```

## Audio Tag Attributes

The audio tag also supports some attributes:

1. `Controls`: Adds audio controls like play, pause, and volume.
2. `Muted`: Mutes the audio playback by default.
3. `Autoplay`: Automatically starts playing the audio when the web page is loaded.

**Code :**

```html showLineNumbers=true
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

<img src="/html/10/output-5.png" alt="output-5" width="600px"/>

The above code will display an audio player with controls, and the audio specified by the `src` attribute will be played. In this example, the audio file `sample-audio.mp3` is located in the same directory as the HTML file.

**Code :**

```html showLineNumbers="true"
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

In the above code, Line 7 `<audio controls muted autoplay>`: This is the `<audio>` element that embeds an audio file and provides attributes to control its behavior.

**controls**: This attribute adds playback controls (play, pause, volume, etc.) to the audio player, allowing users to interact with it.

**muted**: This attribute mutes the audio. However, the `muted` attribute might be unnecessary here since you also have the `autoplay` attribute. When the `autoplay` attribute is present, most modern browsers will automatically mute the audio to prevent unexpected loud sounds.

`autoplay`: This attribute makes the audio start playing as soon as the page is loaded.

`<source src="sample-audio.mp3" type="audio/mp4" />`: This line specifies the audio source using the `<source>` element. The `src` attribute points to the location of the audio file ("sample-audio.mp3").

**Output :**

<img src="/html/10/output-6.png" alt="output-6" width="600px"/>

:::tip
It doesn't make sense to play audio in a muted format, so you can omit the `muted` attribute from the` <audio>` element. When using the `autoplay` attribute, modern browsers usually initiate audio playback in a muted state by default to prevent sudden loud sounds. Users can easily unmute the audio if they wish.
:::

### 🔊▶️ Audio and Video URLs

You can use these URLs directly for the src attribute. For example src="url"

For audio:
https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_500KB_MP3.mp3

For video:
https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
