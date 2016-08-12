"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var chatmessage_1 = require('../../models/chatmessage');
var DynamicChatComponent = (function () {
    function DynamicChatComponent() {
        this.message = new chatmessage_1.ChatMessage();
        this.isBot = false;
    }
    DynamicChatComponent.prototype.ngOnInit = function () {
        this.isBot = this.message.isBot;
    };
    __decorate([
        core_1.Input('message'), 
        __metadata('design:type', Object)
    ], DynamicChatComponent.prototype, "message", void 0);
    DynamicChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamicchat',
            templateUrl: './dynamicchat.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicChatComponent);
    return DynamicChatComponent;
}());
exports.DynamicChatComponent = DynamicChatComponent;
//# sourceMappingURL=dynamicchat.component.js.map