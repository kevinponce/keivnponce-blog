---
title: Twilio Video Chat
date: "2019-08-08T22:12:00.121Z"
tags: ["javascript", "ruby-on-rails", "react"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
---

Twilio Video in react was a lot harder than it should have been...
The tutorial they provided are out of date...
Hopefully by the time you are reading this, it is still up to date.

The first part of using twilio video is to create a token.
The code has to be written server side.
The following example is written in ruby.
You will need to set `TWILIO_SID`, `TWILIO_API_SID`, and `TWILIO_API_SECRET` in `.dot` file.
You will also need to replace `@identity`, and `@video_grant.room` to be the correct values.
You also have to make sure `@identity` is unique or else it will kick the other user that has the same `@identity`.
The tokens have to be pasted from ruby to react. This can be done many ways, so I left it out.

```ruby
@identity = "XXXXXXXX"

# Create Video grant for our token
@video_grant = Twilio::JWT::AccessToken::VideoGrant.new
@video_grant.room = 'XXXXXXX'

# Create an Access Token
@token = Twilio::JWT::AccessToken.new(
  ENV['TWILIO_SID'],
  ENV['TWILIO_API_SID'],
  ENV['TWILIO_API_SECRET'],
  [@video_grant],
  identity: @identity,
).to_jwt
```

Here goes a react component that allows user to seem them self and others in the video chat room.
```javascript
import React, { Component } from 'react';
import Video from 'twilio-video';
import PropTypes from 'prop-types';

class VideoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identity: this.props.identity,
      token: this.props.token,
      roomName: this.props.room,
      localMediaAvailable: false,
      hasJoinedRoom: false,
      activeRoom: '' // Track the current active room
    };

    this.joinRoom = this.joinRoom.bind(this);
    this.roomJoined = this.roomJoined.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.detachTrack = this.detachTrack.bind(this);
    this.attachTracks = this.attachTracks.bind(this);
    this.detachParticipantTracks = this.detachParticipantTracks.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.joinOrLeaveRoomButton = this.joinOrLeaveRoomButton.bind(this);
    this.participantConnected = this.participantConnected.bind(this);
    this.handleTrack = this.handleTrack.bind(this);

    this.remoteMedia = React.createRef();
    this.localMedia = React.createRef();
  }


  joinRoom() {
    if (!this.state.roomName.trim()) {
      alert('Invalid room name');
      return;
    }

    let connectOptions = {
      name: this.state.roomName
    };

    // Join the Room with the token from the server and the
    // LocalParticipant's Tracks.
    Video.connect(this.state.token, connectOptions).then(this.roomJoined, error => {
      alert('Could not connect to Twilio: ' + error.message);
    });
  }

  attachTracks(tracks, container) {
    tracks.forEach(track => {
      container.appendChild(track.attach());
    });
  }

  getTracks(participant) {
    return Array.from(participant.tracks.values()).filter((publication) => {
      return publication.track;
    }).map((publication) => {
      return publication.track;
    });
  }

  detachTrack(track) {
    track.detach().forEach(detachedElement => {
      detachedElement.remove();
    });
  }

  detachParticipantTracks(participant) {
    participant.tracks.forEach(publication => {
      if (publication.isSubscribed) {
        this.detachTrack(publication.track);
      }
    });
  }

  participantConnected(participant) {
    participant.tracks.forEach(publication => {
      if (publication.isSubscribed) {
        this.handleTrack(publication.track);
      }

      publication.on('subscribed', track => this.handleTrack(track));
      publication.on('unsubscribed', track => this.detachTrack(track));
    });
  }

  handleTrack(track) {
    switch (track.kind) {
      case 'audio':
        this.remoteMedia.current.appendChild(track.attach());
        break;
      case 'video':
        this.remoteMedia.current.appendChild(track.attach());
        break;
    }
  }

  roomJoined(room) {
    // Called when a participant joins a room
    this.setState({
      activeRoom: room,
      localMediaAvailable: true,
      hasJoinedRoom: true
    });

    // Attach LocalParticipant's Tracks, if not already attached.
    var previewContainer = this.localMedia.current;
    if (!previewContainer.querySelector('video')) {
      this.attachTracks(this.getTracks(room.localParticipant), previewContainer);
    }

    // Attach the Tracks of the Room's Participants.
    room.participants.forEach(this.participantConnected);

    // When a Participant joins the Room, log the event.
    room.on('participantConnected', this.participantConnected);

    // When a Participant adds a Track, attach it to the DOM.
    room.on('trackAdded', (track, participant) => {
      this.attachTracks([track], this.remoteMedia.current);
    });

    // When a Participant removes a Track, detach it from the DOM.
    room.on('trackRemoved', (track, participant) => {
      this.detachTrack(track);
    });

    // When a Participant leaves the Room, detach its Tracks.
    room.on('participantDisconnected', participant => {
      this.detachParticipantTracks(participant);
    });

    // Once the LocalParticipant leaves the room, detach the Tracks
    // of all Participants, including that of the LocalParticipant.
    room.on('disconnected', () => {
      room.localParticipant.tracks.forEach(publication => {
        if (publication.isTrackEnabled) {
          this.detachTrack(publication.track);
        }
      });

      // detach all participant tracks
      room.participants.forEach(this.detachParticipantTracks);
      this.setState({ activeRoom: null, hasJoinedRoom: false, localMediaAvailable: false });
    });
  }

  leaveRoom() {
    this.state.activeRoom.disconnect();
    this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
  }

  joinOrLeaveRoomButton () {
    if(this.state.hasJoinedRoom) {
      return (<button onClick={this.leaveRoom}>Leave Room</button>);
    }

    return(<button onClick={this.joinRoom}>Join Room</button>);
  }

  render() {
    return (
      <div className="flex-container">
        <div className="flex-item">
          <div ref={this.localMedia} />
        </div>
        <div className="flex-item">
          <br />
          {this.joinOrLeaveRoomButton()}
        </div>
        <div className="flex-item" ref={this.remoteMedia} />
      </div>
    );
  }
}

VideoComponent.propTypes = {
  identity: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
};

export default VideoComponent;
```

In order to use the code, you must use `identity`, `token`, and `room` passed from the server.
```javascript
import VideoComponent from './videoComponent'

render() {
  return (
    <VideoComponent identity="XXXXXX"
                    token="XXXXXXXX"
                    room="XXXXXXX"/>
  );
}
```