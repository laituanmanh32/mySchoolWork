import auth from "libs/auth";
import socketManager from "sockets/socket_manager";
import {ResponseCode} from "enums/response-code";

var controller = require("sockets/controllers");
var eventEmitter = require("events/event-emitter");


var fn = function (socket) {

  console.log("Socket connected", socket.id);

  socket.use(async function (s, next) {
    console.log(s);
    try {
      s[1] = JSON.parse(s[1]);
    } catch (e) {
    }
    let token = socket.token || s[1].token || null;
    let response = {};
    let result = await auth.verify(token);
    if (result && !(result as any).error) {
      socket.jwt = result;
      socket.token = token;
      s[1].jwt = result;
      response = {
        success: true,
        data: null
      };
      socket.uid = (result as any).id;
      socketManager.registerClient((result as any).id, socket);
      next();
    } else {
      socketManager.removeClient(socket.uid);
      response = {
        success: false,
        error: {
          code: ResponseCode.SESSION_TIMEOUT,
          message: "Token is expired",
          data: {
            token: token
          }
        }
      };
      if (s[2]) {
        s[2](response);
      } else {

      }
    }
  });

  socket.on('login', async function (data, cb) {
    let token = data.token;
    let response = {};
    let result = await auth.verify(token);
    if (result && !(result as any).error) {
      socket.jwt = result;
      socket.uid = (result as any).id;
      socket.token = token;
      socketManager.registerClient((result as any).id, socket);
      response = {
        success: true,
        data: null
      }
    } else {
      response = {
        success: false,
        error: {
          code: ResponseCode.SESSION_TIMEOUT,
          message: "Token is expired",
          data: {
            token
          }
        }
      }
    }
    cb(response);
  });
  socket.on('connection', function () {
    console.log("on connection");
  });
  socket.on('disconnect', function () {
    socketManager.removeClient(socket.uid);
  });

  socket.on("test", function (data, cb) {
    console.log(data, cb);
    cb({
      success: true,
      message: "connect successful"
    });
  });

  socket.on("GET order/current", controller.order.retrieveCurrentOrder);
  socket.on("GET order/id", controller.order.retrieve);
  socket.on("GET order", controller.order.list);
  socket.on("POST order", controller.order.create);
  socket.on("PUT order/id", controller.order.update);
  socket.on("POST order/order-line-request", controller.order.requestOrderLine);
  socket.on("PUT order/order-line-request/id", controller.order.updateRequestOrderLine);
  socket.on("PUT order/coupon", controller.order.updateCoupon);

  socket.on("GET invoice", controller.invoice.list);
  // socket.on("GET invoice/id", controller.invoice.retrieve);
  socket.on("POST invoice", controller.invoice.create);
  socket.on("PUT invoice/id", controller.invoice.update);

  socket.on("GET group", controller.group.list);
  socket.on("POST group", controller.group.create);
  socket.on("PUT group/id", controller.group.update);
  socket.on("DELETE group/id", controller.group.destroy);
  socket.on("GET group/invite", controller.group.currentGroupInvite);
  socket.on("POST group/invite", controller.group.inviteUser);
  socket.on("PUT group/invite", controller.group.updateInvitation);
  socket.on("PUT group/quit", controller.group.quit);
  socket.on("DELETE group/invite", controller.group.removeUser);
  socket.on("GET group/current", controller.group.current);

  socket.on('disconnect', function () {
    socketManager.removeClient(socket.uid);
  });
};

export = fn;
