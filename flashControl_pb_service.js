// package: flashcontrol
// file: flashControl.proto
(function(){
  var exports = {};

var flashControl_pb = require("./flashControl_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FlashControl = (function () {
  function FlashControl() {}
  FlashControl.serviceName = "flashcontrol.FlashControl";
  return FlashControl;
}());

FlashControl.TakePhoto = {
  methodName: "TakePhoto",
  service: FlashControl,
  requestStream: false,
  responseStream: false,
  requestType: flashControl_pb.PhotoRequest,
  responseType: flashControl_pb.PhotoResponse
};

FlashControl.TakePhotoWithNativeCamera = {
  methodName: "TakePhotoWithNativeCamera",
  service: FlashControl,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: flashControl_pb.PhotoPathResponse
};

exports.FlashControl = FlashControl;

function FlashControlClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FlashControlClient.prototype.takePhoto = function takePhoto(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FlashControl.TakePhoto, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FlashControlClient.prototype.takePhotoWithNativeCamera = function takePhotoWithNativeCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FlashControl.TakePhotoWithNativeCamera, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.FlashControlClient = FlashControlClient;

window.PROTO_BUNDLE.flashControl_pb_service = exports;
})();