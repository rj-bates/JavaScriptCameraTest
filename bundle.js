/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */
    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));
    /* Global */ else {
        global.flashcontrol = factory(global.protobuf).flashcontrol;
    }
})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.flashcontrol = (function() {
    
        /**
         * Namespace flashcontrol.
         * @exports flashcontrol
         * @namespace
         */
        var flashcontrol = {};
    
        flashcontrol.FlashControl = (function() {
    
            /**
             * Constructs a new FlashControl service.
             * @memberof flashcontrol
             * @classdesc Represents a FlashControl
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function FlashControl(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (FlashControl.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FlashControl;
    
            /**
             * Creates new FlashControl service using the specified rpc implementation.
             * @function create
             * @memberof flashcontrol.FlashControl
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {FlashControl} RPC service. Useful where requests and/or responses are streamed.
             */
            FlashControl.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link flashcontrol.FlashControl#takePhoto}.
             * @memberof flashcontrol.FlashControl
             * @typedef TakePhotoCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flashcontrol.PhotoResponse} [response] PhotoResponse
             */
    
            /**
             * Calls TakePhoto.
             * @function takePhoto
             * @memberof flashcontrol.FlashControl
             * @instance
             * @param {flashcontrol.IPhotoRequest} request PhotoRequest message or plain object
             * @param {flashcontrol.FlashControl.TakePhotoCallback} callback Node-style callback called with the error, if any, and PhotoResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(FlashControl.prototype.takePhoto = function takePhoto(request, callback) {
                return this.rpcCall(takePhoto, $root.flashcontrol.PhotoRequest, $root.flashcontrol.PhotoResponse, request, callback);
            }, "name", { value: "TakePhoto" });
    
            /**
             * Calls TakePhoto.
             * @function takePhoto
             * @memberof flashcontrol.FlashControl
             * @instance
             * @param {flashcontrol.IPhotoRequest} request PhotoRequest message or plain object
             * @returns {Promise<flashcontrol.PhotoResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link flashcontrol.FlashControl#takePhotoWithNativeCamera}.
             * @memberof flashcontrol.FlashControl
             * @typedef TakePhotoWithNativeCameraCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {flashcontrol.PhotoPathResponse} [response] PhotoPathResponse
             */
    
            /**
             * Calls TakePhotoWithNativeCamera.
             * @function takePhotoWithNativeCamera
             * @memberof flashcontrol.FlashControl
             * @instance
             * @param {flashcontrol.IEmptyRequest} request EmptyRequest message or plain object
             * @param {flashcontrol.FlashControl.TakePhotoWithNativeCameraCallback} callback Node-style callback called with the error, if any, and PhotoPathResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(FlashControl.prototype.takePhotoWithNativeCamera = function takePhotoWithNativeCamera(request, callback) {
                return this.rpcCall(takePhotoWithNativeCamera, $root.flashcontrol.EmptyRequest, $root.flashcontrol.PhotoPathResponse, request, callback);
            }, "name", { value: "TakePhotoWithNativeCamera" });
    
            /**
             * Calls TakePhotoWithNativeCamera.
             * @function takePhotoWithNativeCamera
             * @memberof flashcontrol.FlashControl
             * @instance
             * @param {flashcontrol.IEmptyRequest} request EmptyRequest message or plain object
             * @returns {Promise<flashcontrol.PhotoPathResponse>} Promise
             * @variation 2
             */
    
            return FlashControl;
        })();
    
        flashcontrol.EmptyRequest = (function() {
    
            /**
             * Properties of an EmptyRequest.
             * @memberof flashcontrol
             * @interface IEmptyRequest
             */
    
            /**
             * Constructs a new EmptyRequest.
             * @memberof flashcontrol
             * @classdesc Represents an EmptyRequest.
             * @implements IEmptyRequest
             * @constructor
             * @param {flashcontrol.IEmptyRequest=} [properties] Properties to set
             */
            function EmptyRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new EmptyRequest instance using the specified properties.
             * @function create
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {flashcontrol.IEmptyRequest=} [properties] Properties to set
             * @returns {flashcontrol.EmptyRequest} EmptyRequest instance
             */
            EmptyRequest.create = function create(properties) {
                return new EmptyRequest(properties);
            };
    
            /**
             * Encodes the specified EmptyRequest message. Does not implicitly {@link flashcontrol.EmptyRequest.verify|verify} messages.
             * @function encode
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {flashcontrol.IEmptyRequest} message EmptyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified EmptyRequest message, length delimited. Does not implicitly {@link flashcontrol.EmptyRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {flashcontrol.IEmptyRequest} message EmptyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmptyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an EmptyRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flashcontrol.EmptyRequest} EmptyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmptyRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flashcontrol.EmptyRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an EmptyRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flashcontrol.EmptyRequest} EmptyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmptyRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an EmptyRequest message.
             * @function verify
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EmptyRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flashcontrol.EmptyRequest} EmptyRequest
             */
            EmptyRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.flashcontrol.EmptyRequest)
                    return object;
                return new $root.flashcontrol.EmptyRequest();
            };
    
            /**
             * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {flashcontrol.EmptyRequest} message EmptyRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EmptyRequest.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this EmptyRequest to JSON.
             * @function toJSON
             * @memberof flashcontrol.EmptyRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EmptyRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for EmptyRequest
             * @function getTypeUrl
             * @memberof flashcontrol.EmptyRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EmptyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/flashcontrol.EmptyRequest";
            };
    
            return EmptyRequest;
        })();
    
        flashcontrol.PhotoPathResponse = (function() {
    
            /**
             * Properties of a PhotoPathResponse.
             * @memberof flashcontrol
             * @interface IPhotoPathResponse
             * @property {string|null} [filePath] PhotoPathResponse filePath
             * @property {string|null} [errorMsg] PhotoPathResponse errorMsg
             */
    
            /**
             * Constructs a new PhotoPathResponse.
             * @memberof flashcontrol
             * @classdesc Represents a PhotoPathResponse.
             * @implements IPhotoPathResponse
             * @constructor
             * @param {flashcontrol.IPhotoPathResponse=} [properties] Properties to set
             */
            function PhotoPathResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PhotoPathResponse filePath.
             * @member {string} filePath
             * @memberof flashcontrol.PhotoPathResponse
             * @instance
             */
            PhotoPathResponse.prototype.filePath = "";
    
            /**
             * PhotoPathResponse errorMsg.
             * @member {string} errorMsg
             * @memberof flashcontrol.PhotoPathResponse
             * @instance
             */
            PhotoPathResponse.prototype.errorMsg = "";
    
            /**
             * Creates a new PhotoPathResponse instance using the specified properties.
             * @function create
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {flashcontrol.IPhotoPathResponse=} [properties] Properties to set
             * @returns {flashcontrol.PhotoPathResponse} PhotoPathResponse instance
             */
            PhotoPathResponse.create = function create(properties) {
                return new PhotoPathResponse(properties);
            };
    
            /**
             * Encodes the specified PhotoPathResponse message. Does not implicitly {@link flashcontrol.PhotoPathResponse.verify|verify} messages.
             * @function encode
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {flashcontrol.IPhotoPathResponse} message PhotoPathResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhotoPathResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filePath != null && Object.hasOwnProperty.call(message, "filePath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filePath);
                if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMsg);
                return writer;
            };
    
            /**
             * Encodes the specified PhotoPathResponse message, length delimited. Does not implicitly {@link flashcontrol.PhotoPathResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {flashcontrol.IPhotoPathResponse} message PhotoPathResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhotoPathResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PhotoPathResponse message from the specified reader or buffer.
             * @function decode
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flashcontrol.PhotoPathResponse} PhotoPathResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhotoPathResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flashcontrol.PhotoPathResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filePath = reader.string();
                            break;
                        }
                    case 2: {
                            message.errorMsg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PhotoPathResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flashcontrol.PhotoPathResponse} PhotoPathResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhotoPathResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PhotoPathResponse message.
             * @function verify
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhotoPathResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    if (!$util.isString(message.filePath))
                        return "filePath: string expected";
                if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                    if (!$util.isString(message.errorMsg))
                        return "errorMsg: string expected";
                return null;
            };
    
            /**
             * Creates a PhotoPathResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flashcontrol.PhotoPathResponse} PhotoPathResponse
             */
            PhotoPathResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.flashcontrol.PhotoPathResponse)
                    return object;
                var message = new $root.flashcontrol.PhotoPathResponse();
                if (object.filePath != null)
                    message.filePath = String(object.filePath);
                if (object.errorMsg != null)
                    message.errorMsg = String(object.errorMsg);
                return message;
            };
    
            /**
             * Creates a plain object from a PhotoPathResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {flashcontrol.PhotoPathResponse} message PhotoPathResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhotoPathResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.filePath = "";
                    object.errorMsg = "";
                }
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    object.filePath = message.filePath;
                if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                    object.errorMsg = message.errorMsg;
                return object;
            };
    
            /**
             * Converts this PhotoPathResponse to JSON.
             * @function toJSON
             * @memberof flashcontrol.PhotoPathResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhotoPathResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for PhotoPathResponse
             * @function getTypeUrl
             * @memberof flashcontrol.PhotoPathResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PhotoPathResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/flashcontrol.PhotoPathResponse";
            };
    
            return PhotoPathResponse;
        })();
    
        flashcontrol.PhotoRequest = (function() {
    
            /**
             * Properties of a PhotoRequest.
             * @memberof flashcontrol
             * @interface IPhotoRequest
             * @property {flashcontrol.FlashMode|null} [flashMode] PhotoRequest flashMode
             * @property {flashcontrol.CameraType|null} [cameraType] PhotoRequest cameraType
             * @property {number|null} [imageWidth] PhotoRequest imageWidth
             * @property {number|null} [imageHeight] PhotoRequest imageHeight
             */
    
            /**
             * Constructs a new PhotoRequest.
             * @memberof flashcontrol
             * @classdesc Represents a PhotoRequest.
             * @implements IPhotoRequest
             * @constructor
             * @param {flashcontrol.IPhotoRequest=} [properties] Properties to set
             */
            function PhotoRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PhotoRequest flashMode.
             * @member {flashcontrol.FlashMode} flashMode
             * @memberof flashcontrol.PhotoRequest
             * @instance
             */
            PhotoRequest.prototype.flashMode = 0;
    
            /**
             * PhotoRequest cameraType.
             * @member {flashcontrol.CameraType} cameraType
             * @memberof flashcontrol.PhotoRequest
             * @instance
             */
            PhotoRequest.prototype.cameraType = 0;
    
            /**
             * PhotoRequest imageWidth.
             * @member {number} imageWidth
             * @memberof flashcontrol.PhotoRequest
             * @instance
             */
            PhotoRequest.prototype.imageWidth = 0;
    
            /**
             * PhotoRequest imageHeight.
             * @member {number} imageHeight
             * @memberof flashcontrol.PhotoRequest
             * @instance
             */
            PhotoRequest.prototype.imageHeight = 0;
    
            /**
             * Creates a new PhotoRequest instance using the specified properties.
             * @function create
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {flashcontrol.IPhotoRequest=} [properties] Properties to set
             * @returns {flashcontrol.PhotoRequest} PhotoRequest instance
             */
            PhotoRequest.create = function create(properties) {
                return new PhotoRequest(properties);
            };
    
            /**
             * Encodes the specified PhotoRequest message. Does not implicitly {@link flashcontrol.PhotoRequest.verify|verify} messages.
             * @function encode
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {flashcontrol.IPhotoRequest} message PhotoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhotoRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.flashMode != null && Object.hasOwnProperty.call(message, "flashMode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.flashMode);
                if (message.cameraType != null && Object.hasOwnProperty.call(message, "cameraType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cameraType);
                if (message.imageWidth != null && Object.hasOwnProperty.call(message, "imageWidth"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.imageWidth);
                if (message.imageHeight != null && Object.hasOwnProperty.call(message, "imageHeight"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.imageHeight);
                return writer;
            };
    
            /**
             * Encodes the specified PhotoRequest message, length delimited. Does not implicitly {@link flashcontrol.PhotoRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {flashcontrol.IPhotoRequest} message PhotoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhotoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PhotoRequest message from the specified reader or buffer.
             * @function decode
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flashcontrol.PhotoRequest} PhotoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhotoRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flashcontrol.PhotoRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.flashMode = reader.int32();
                            break;
                        }
                    case 2: {
                            message.cameraType = reader.int32();
                            break;
                        }
                    case 3: {
                            message.imageWidth = reader.int32();
                            break;
                        }
                    case 4: {
                            message.imageHeight = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PhotoRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flashcontrol.PhotoRequest} PhotoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhotoRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PhotoRequest message.
             * @function verify
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhotoRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.flashMode != null && message.hasOwnProperty("flashMode"))
                    switch (message.flashMode) {
                    default:
                        return "flashMode: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.cameraType != null && message.hasOwnProperty("cameraType"))
                    switch (message.cameraType) {
                    default:
                        return "cameraType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
                    if (!$util.isInteger(message.imageWidth))
                        return "imageWidth: integer expected";
                if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
                    if (!$util.isInteger(message.imageHeight))
                        return "imageHeight: integer expected";
                return null;
            };
    
            /**
             * Creates a PhotoRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flashcontrol.PhotoRequest} PhotoRequest
             */
            PhotoRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.flashcontrol.PhotoRequest)
                    return object;
                var message = new $root.flashcontrol.PhotoRequest();
                switch (object.flashMode) {
                default:
                    if (typeof object.flashMode === "number") {
                        message.flashMode = object.flashMode;
                        break;
                    }
                    break;
                case "AUTO":
                case 0:
                    message.flashMode = 0;
                    break;
                case "ON":
                case 1:
                    message.flashMode = 1;
                    break;
                case "OFF":
                case 2:
                    message.flashMode = 2;
                    break;
                }
                switch (object.cameraType) {
                default:
                    if (typeof object.cameraType === "number") {
                        message.cameraType = object.cameraType;
                        break;
                    }
                    break;
                case "BACK":
                case 0:
                    message.cameraType = 0;
                    break;
                case "FRONT":
                case 1:
                    message.cameraType = 1;
                    break;
                }
                if (object.imageWidth != null)
                    message.imageWidth = object.imageWidth | 0;
                if (object.imageHeight != null)
                    message.imageHeight = object.imageHeight | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a PhotoRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {flashcontrol.PhotoRequest} message PhotoRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhotoRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.flashMode = options.enums === String ? "AUTO" : 0;
                    object.cameraType = options.enums === String ? "BACK" : 0;
                    object.imageWidth = 0;
                    object.imageHeight = 0;
                }
                if (message.flashMode != null && message.hasOwnProperty("flashMode"))
                    object.flashMode = options.enums === String ? $root.flashcontrol.FlashMode[message.flashMode] === undefined ? message.flashMode : $root.flashcontrol.FlashMode[message.flashMode] : message.flashMode;
                if (message.cameraType != null && message.hasOwnProperty("cameraType"))
                    object.cameraType = options.enums === String ? $root.flashcontrol.CameraType[message.cameraType] === undefined ? message.cameraType : $root.flashcontrol.CameraType[message.cameraType] : message.cameraType;
                if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
                    object.imageWidth = message.imageWidth;
                if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
                    object.imageHeight = message.imageHeight;
                return object;
            };
    
            /**
             * Converts this PhotoRequest to JSON.
             * @function toJSON
             * @memberof flashcontrol.PhotoRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhotoRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for PhotoRequest
             * @function getTypeUrl
             * @memberof flashcontrol.PhotoRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PhotoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/flashcontrol.PhotoRequest";
            };
    
            return PhotoRequest;
        })();
    
        flashcontrol.PhotoResponse = (function() {
    
            /**
             * Properties of a PhotoResponse.
             * @memberof flashcontrol
             * @interface IPhotoResponse
             * @property {Uint8Array|null} [imageData] PhotoResponse imageData
             * @property {string|null} [filePath] PhotoResponse filePath
             * @property {string|null} [imageFormat] PhotoResponse imageFormat
             */
    
            /**
             * Constructs a new PhotoResponse.
             * @memberof flashcontrol
             * @classdesc Represents a PhotoResponse.
             * @implements IPhotoResponse
             * @constructor
             * @param {flashcontrol.IPhotoResponse=} [properties] Properties to set
             */
            function PhotoResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PhotoResponse imageData.
             * @member {Uint8Array} imageData
             * @memberof flashcontrol.PhotoResponse
             * @instance
             */
            PhotoResponse.prototype.imageData = $util.newBuffer([]);
    
            /**
             * PhotoResponse filePath.
             * @member {string} filePath
             * @memberof flashcontrol.PhotoResponse
             * @instance
             */
            PhotoResponse.prototype.filePath = "";
    
            /**
             * PhotoResponse imageFormat.
             * @member {string} imageFormat
             * @memberof flashcontrol.PhotoResponse
             * @instance
             */
            PhotoResponse.prototype.imageFormat = "";
    
            /**
             * Creates a new PhotoResponse instance using the specified properties.
             * @function create
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {flashcontrol.IPhotoResponse=} [properties] Properties to set
             * @returns {flashcontrol.PhotoResponse} PhotoResponse instance
             */
            PhotoResponse.create = function create(properties) {
                return new PhotoResponse(properties);
            };
    
            /**
             * Encodes the specified PhotoResponse message. Does not implicitly {@link flashcontrol.PhotoResponse.verify|verify} messages.
             * @function encode
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {flashcontrol.IPhotoResponse} message PhotoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhotoResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.imageData != null && Object.hasOwnProperty.call(message, "imageData"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.imageData);
                if (message.filePath != null && Object.hasOwnProperty.call(message, "filePath"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.filePath);
                if (message.imageFormat != null && Object.hasOwnProperty.call(message, "imageFormat"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.imageFormat);
                return writer;
            };
    
            /**
             * Encodes the specified PhotoResponse message, length delimited. Does not implicitly {@link flashcontrol.PhotoResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {flashcontrol.IPhotoResponse} message PhotoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhotoResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PhotoResponse message from the specified reader or buffer.
             * @function decode
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {flashcontrol.PhotoResponse} PhotoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhotoResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.flashcontrol.PhotoResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.imageData = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.filePath = reader.string();
                            break;
                        }
                    case 3: {
                            message.imageFormat = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PhotoResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {flashcontrol.PhotoResponse} PhotoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhotoResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PhotoResponse message.
             * @function verify
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhotoResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.imageData != null && message.hasOwnProperty("imageData"))
                    if (!(message.imageData && typeof message.imageData.length === "number" || $util.isString(message.imageData)))
                        return "imageData: buffer expected";
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    if (!$util.isString(message.filePath))
                        return "filePath: string expected";
                if (message.imageFormat != null && message.hasOwnProperty("imageFormat"))
                    if (!$util.isString(message.imageFormat))
                        return "imageFormat: string expected";
                return null;
            };
    
            /**
             * Creates a PhotoResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {flashcontrol.PhotoResponse} PhotoResponse
             */
            PhotoResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.flashcontrol.PhotoResponse)
                    return object;
                var message = new $root.flashcontrol.PhotoResponse();
                if (object.imageData != null)
                    if (typeof object.imageData === "string")
                        $util.base64.decode(object.imageData, message.imageData = $util.newBuffer($util.base64.length(object.imageData)), 0);
                    else if (object.imageData.length >= 0)
                        message.imageData = object.imageData;
                if (object.filePath != null)
                    message.filePath = String(object.filePath);
                if (object.imageFormat != null)
                    message.imageFormat = String(object.imageFormat);
                return message;
            };
    
            /**
             * Creates a plain object from a PhotoResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {flashcontrol.PhotoResponse} message PhotoResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhotoResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.imageData = "";
                    else {
                        object.imageData = [];
                        if (options.bytes !== Array)
                            object.imageData = $util.newBuffer(object.imageData);
                    }
                    object.filePath = "";
                    object.imageFormat = "";
                }
                if (message.imageData != null && message.hasOwnProperty("imageData"))
                    object.imageData = options.bytes === String ? $util.base64.encode(message.imageData, 0, message.imageData.length) : options.bytes === Array ? Array.prototype.slice.call(message.imageData) : message.imageData;
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    object.filePath = message.filePath;
                if (message.imageFormat != null && message.hasOwnProperty("imageFormat"))
                    object.imageFormat = message.imageFormat;
                return object;
            };
    
            /**
             * Converts this PhotoResponse to JSON.
             * @function toJSON
             * @memberof flashcontrol.PhotoResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhotoResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for PhotoResponse
             * @function getTypeUrl
             * @memberof flashcontrol.PhotoResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PhotoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/flashcontrol.PhotoResponse";
            };
    
            return PhotoResponse;
        })();
    
        /**
         * FlashMode enum.
         * @name flashcontrol.FlashMode
         * @enum {number}
         * @property {number} AUTO=0 AUTO value
         * @property {number} ON=1 ON value
         * @property {number} OFF=2 OFF value
         */
        flashcontrol.FlashMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AUTO"] = 0;
            values[valuesById[1] = "ON"] = 1;
            values[valuesById[2] = "OFF"] = 2;
            return values;
        })();
    
        /**
         * CameraType enum.
         * @name flashcontrol.CameraType
         * @enum {number}
         * @property {number} BACK=0 BACK value
         * @property {number} FRONT=1 FRONT value
         */
        flashcontrol.CameraType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BACK"] = 0;
            values[valuesById[1] = "FRONT"] = 1;
            return values;
        })();
    
        return flashcontrol;
    })();

    if (typeof window !== 'undefined') {
        window.flashcontrol = $root.flashcontrol;
        console.log('bundle.js: Exposed flashcontrol to window:', window.flashcontrol);
    }
    
    return $root;
});