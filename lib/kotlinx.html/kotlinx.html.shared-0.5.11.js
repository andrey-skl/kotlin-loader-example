this['kotlinx.html.shared'] = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    kotlinx: Kotlin.definePackage(null, /** @lends _.kotlinx */ {
      html: Kotlin.definePackage(function () {
        this.emptyMap = Kotlin.kotlin.collections.emptyMap();
        this.attributeStringString = new _.kotlinx.html.attributes.StringAttribute();
        this.attributeSetStringStringSet = new _.kotlinx.html.attributes.StringSetAttribute();
        this.attributeBooleanBoolean = new _.kotlinx.html.attributes.BooleanAttribute();
        this.attributeBooleanBooleanOnOff = new _.kotlinx.html.attributes.BooleanAttribute('on', 'off');
        this.attributeBooleanTicker = new _.kotlinx.html.attributes.TickerAttribute();
        this.attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.buttonFormEncTypeValues);
        this.attributeButtonFormMethodEnumButtonFormMethodValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.buttonFormMethodValues);
        this.attributeButtonTypeEnumButtonTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.buttonTypeValues);
        this.attributeCommandTypeEnumCommandTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.commandTypeValues);
        this.attributeDirEnumDirValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.dirValues);
        this.attributeDraggableEnumDraggableValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.draggableValues);
        this.attributeFormEncTypeEnumFormEncTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.formEncTypeValues);
        this.attributeFormMethodEnumFormMethodValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.formMethodValues);
        this.attributeIframeSandboxEnumIframeSandboxValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.iframeSandboxValues);
        this.attributeInputFormEncTypeEnumInputFormEncTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.inputFormEncTypeValues);
        this.attributeInputFormMethodEnumInputFormMethodValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.inputFormMethodValues);
        this.attributeInputTypeEnumInputTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.inputTypeValues);
        this.attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.keyGenKeyTypeValues);
        this.attributeRunAtEnumRunAtValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.runAtValues);
        this.attributeScriptTypeEnumScriptTypeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.scriptTypeValues);
        this.attributeTextAreaWrapEnumTextAreaWrapValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.textAreaWrapValues);
        this.attributeThScopeEnumThScopeValues = new _.kotlinx.html.attributes.EnumAttribute(_.kotlinx.html.thScopeValues);
        var $receiver = _.kotlinx.html.Dir.values();
        var capacity = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver.length), 16);
        var destination = new Kotlin.LinkedHashMap(capacity);
        var tmp$20, tmp$18, tmp$19;
        tmp$20 = $receiver, tmp$18 = tmp$20.length;
        for (var tmp$19 = 0; tmp$19 !== tmp$18; ++tmp$19) {
          var element = tmp$20[tmp$19];
          destination.put_wn2jw4$(element.realValue, element);
        }
        this.dirValues = destination;
        var $receiver_0 = _.kotlinx.html.Draggable.values();
        var capacity_0 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_0.length), 16);
        var destination_0 = new Kotlin.LinkedHashMap(capacity_0);
        var tmp$25, tmp$23, tmp$24;
        tmp$25 = $receiver_0, tmp$23 = tmp$25.length;
        for (var tmp$24 = 0; tmp$24 !== tmp$23; ++tmp$24) {
          var element_0 = tmp$25[tmp$24];
          destination_0.put_wn2jw4$(element_0.realValue, element_0);
        }
        this.draggableValues = destination_0;
        var $receiver_1 = _.kotlinx.html.RunAt.values();
        var capacity_1 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_1.length), 16);
        var destination_1 = new Kotlin.LinkedHashMap(capacity_1);
        var tmp$30, tmp$28, tmp$29;
        tmp$30 = $receiver_1, tmp$28 = tmp$30.length;
        for (var tmp$29 = 0; tmp$29 !== tmp$28; ++tmp$29) {
          var element_1 = tmp$30[tmp$29];
          destination_1.put_wn2jw4$(element_1.realValue, element_1);
        }
        this.runAtValues = destination_1;
        var $receiver_2 = _.kotlinx.html.AreaShape.values();
        var capacity_2 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_2.length), 16);
        var destination_2 = new Kotlin.LinkedHashMap(capacity_2);
        var tmp$35, tmp$33, tmp$34;
        tmp$35 = $receiver_2, tmp$33 = tmp$35.length;
        for (var tmp$34 = 0; tmp$34 !== tmp$33; ++tmp$34) {
          var element_2 = tmp$35[tmp$34];
          destination_2.put_wn2jw4$(element_2.realValue, element_2);
        }
        this.areaShapeValues = destination_2;
        var $receiver_3 = _.kotlinx.html.ButtonFormEncType.values();
        var capacity_3 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_3.length), 16);
        var destination_3 = new Kotlin.LinkedHashMap(capacity_3);
        var tmp$40, tmp$38, tmp$39;
        tmp$40 = $receiver_3, tmp$38 = tmp$40.length;
        for (var tmp$39 = 0; tmp$39 !== tmp$38; ++tmp$39) {
          var element_3 = tmp$40[tmp$39];
          destination_3.put_wn2jw4$(element_3.realValue, element_3);
        }
        this.buttonFormEncTypeValues = destination_3;
        var $receiver_4 = _.kotlinx.html.ButtonFormMethod.values();
        var capacity_4 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_4.length), 16);
        var destination_4 = new Kotlin.LinkedHashMap(capacity_4);
        var tmp$45, tmp$43, tmp$44;
        tmp$45 = $receiver_4, tmp$43 = tmp$45.length;
        for (var tmp$44 = 0; tmp$44 !== tmp$43; ++tmp$44) {
          var element_4 = tmp$45[tmp$44];
          destination_4.put_wn2jw4$(element_4.realValue, element_4);
        }
        this.buttonFormMethodValues = destination_4;
        var $receiver_5 = _.kotlinx.html.ButtonType.values();
        var capacity_5 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_5.length), 16);
        var destination_5 = new Kotlin.LinkedHashMap(capacity_5);
        var tmp$50, tmp$48, tmp$49;
        tmp$50 = $receiver_5, tmp$48 = tmp$50.length;
        for (var tmp$49 = 0; tmp$49 !== tmp$48; ++tmp$49) {
          var element_5 = tmp$50[tmp$49];
          destination_5.put_wn2jw4$(element_5.realValue, element_5);
        }
        this.buttonTypeValues = destination_5;
        var $receiver_6 = _.kotlinx.html.CommandType.values();
        var capacity_6 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_6.length), 16);
        var destination_6 = new Kotlin.LinkedHashMap(capacity_6);
        var tmp$55, tmp$53, tmp$54;
        tmp$55 = $receiver_6, tmp$53 = tmp$55.length;
        for (var tmp$54 = 0; tmp$54 !== tmp$53; ++tmp$54) {
          var element_6 = tmp$55[tmp$54];
          destination_6.put_wn2jw4$(element_6.realValue, element_6);
        }
        this.commandTypeValues = destination_6;
        var $receiver_7 = _.kotlinx.html.FormEncType.values();
        var capacity_7 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_7.length), 16);
        var destination_7 = new Kotlin.LinkedHashMap(capacity_7);
        var tmp$60, tmp$58, tmp$59;
        tmp$60 = $receiver_7, tmp$58 = tmp$60.length;
        for (var tmp$59 = 0; tmp$59 !== tmp$58; ++tmp$59) {
          var element_7 = tmp$60[tmp$59];
          destination_7.put_wn2jw4$(element_7.realValue, element_7);
        }
        this.formEncTypeValues = destination_7;
        var $receiver_8 = _.kotlinx.html.FormMethod.values();
        var capacity_8 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_8.length), 16);
        var destination_8 = new Kotlin.LinkedHashMap(capacity_8);
        var tmp$65, tmp$63, tmp$64;
        tmp$65 = $receiver_8, tmp$63 = tmp$65.length;
        for (var tmp$64 = 0; tmp$64 !== tmp$63; ++tmp$64) {
          var element_8 = tmp$65[tmp$64];
          destination_8.put_wn2jw4$(element_8.realValue, element_8);
        }
        this.formMethodValues = destination_8;
        var $receiver_9 = _.kotlinx.html.IframeSandbox.values();
        var capacity_9 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_9.length), 16);
        var destination_9 = new Kotlin.LinkedHashMap(capacity_9);
        var tmp$70, tmp$68, tmp$69;
        tmp$70 = $receiver_9, tmp$68 = tmp$70.length;
        for (var tmp$69 = 0; tmp$69 !== tmp$68; ++tmp$69) {
          var element_9 = tmp$70[tmp$69];
          destination_9.put_wn2jw4$(element_9.realValue, element_9);
        }
        this.iframeSandboxValues = destination_9;
        var $receiver_10 = _.kotlinx.html.InputType.values();
        var capacity_10 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_10.length), 16);
        var destination_10 = new Kotlin.LinkedHashMap(capacity_10);
        var tmp$75, tmp$73, tmp$74;
        tmp$75 = $receiver_10, tmp$73 = tmp$75.length;
        for (var tmp$74 = 0; tmp$74 !== tmp$73; ++tmp$74) {
          var element_10 = tmp$75[tmp$74];
          destination_10.put_wn2jw4$(element_10.realValue, element_10);
        }
        this.inputTypeValues = destination_10;
        var $receiver_11 = _.kotlinx.html.InputFormEncType.values();
        var capacity_11 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_11.length), 16);
        var destination_11 = new Kotlin.LinkedHashMap(capacity_11);
        var tmp$80, tmp$78, tmp$79;
        tmp$80 = $receiver_11, tmp$78 = tmp$80.length;
        for (var tmp$79 = 0; tmp$79 !== tmp$78; ++tmp$79) {
          var element_11 = tmp$80[tmp$79];
          destination_11.put_wn2jw4$(element_11.realValue, element_11);
        }
        this.inputFormEncTypeValues = destination_11;
        var $receiver_12 = _.kotlinx.html.InputFormMethod.values();
        var capacity_12 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_12.length), 16);
        var destination_12 = new Kotlin.LinkedHashMap(capacity_12);
        var tmp$85, tmp$83, tmp$84;
        tmp$85 = $receiver_12, tmp$83 = tmp$85.length;
        for (var tmp$84 = 0; tmp$84 !== tmp$83; ++tmp$84) {
          var element_12 = tmp$85[tmp$84];
          destination_12.put_wn2jw4$(element_12.realValue, element_12);
        }
        this.inputFormMethodValues = destination_12;
        var $receiver_13 = _.kotlinx.html.KeyGenKeyType.values();
        var capacity_13 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_13.length), 16);
        var destination_13 = new Kotlin.LinkedHashMap(capacity_13);
        var tmp$90, tmp$88, tmp$89;
        tmp$90 = $receiver_13, tmp$88 = tmp$90.length;
        for (var tmp$89 = 0; tmp$89 !== tmp$88; ++tmp$89) {
          var element_13 = tmp$90[tmp$89];
          destination_13.put_wn2jw4$(element_13.realValue, element_13);
        }
        this.keyGenKeyTypeValues = destination_13;
        var $receiver_14 = _.kotlinx.html.ScriptType.values();
        var capacity_14 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_14.length), 16);
        var destination_14 = new Kotlin.LinkedHashMap(capacity_14);
        var tmp$95, tmp$93, tmp$94;
        tmp$95 = $receiver_14, tmp$93 = tmp$95.length;
        for (var tmp$94 = 0; tmp$94 !== tmp$93; ++tmp$94) {
          var element_14 = tmp$95[tmp$94];
          destination_14.put_wn2jw4$(element_14.realValue, element_14);
        }
        this.scriptTypeValues = destination_14;
        var $receiver_15 = _.kotlinx.html.TextAreaWrap.values();
        var capacity_15 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_15.length), 16);
        var destination_15 = new Kotlin.LinkedHashMap(capacity_15);
        var tmp$100, tmp$98, tmp$99;
        tmp$100 = $receiver_15, tmp$98 = tmp$100.length;
        for (var tmp$99 = 0; tmp$99 !== tmp$98; ++tmp$99) {
          var element_15 = tmp$100[tmp$99];
          destination_15.put_wn2jw4$(element_15.realValue, element_15);
        }
        this.textAreaWrapValues = destination_15;
        var $receiver_16 = _.kotlinx.html.ThScope.values();
        var capacity_16 = Kotlin.kotlin.ranges.coerceAtLeast_rksjo2$(Kotlin.kotlin.collections.mapCapacity($receiver_16.length), 16);
        var destination_16 = new Kotlin.LinkedHashMap(capacity_16);
        var tmp$105, tmp$103, tmp$104;
        tmp$105 = $receiver_16, tmp$103 = tmp$105.length;
        for (var tmp$104 = 0; tmp$104 !== tmp$103; ++tmp$104) {
          var element_16 = tmp$105[tmp$104];
          destination_16.put_wn2jw4$(element_16.realValue, element_16);
        }
        this.thScopeValues = destination_16;
      }, /** @lends _.kotlinx.html */ {
        TagConsumer: Kotlin.createTrait(null),
        Tag: Kotlin.createTrait(null, /** @lends _.kotlinx.html.Tag.prototype */ {
          unaryPlus_lvwjq7$: function ($receiver) {
            this.consumer.onTagContentEntity_ws8or7$($receiver);
          },
          unaryPlus_pdl1w0$: function ($receiver) {
            this.consumer.onTagContent_6bul2c$($receiver);
          }
        }),
        Unsafe: Kotlin.createTrait(null, /** @lends _.kotlinx.html.Unsafe.prototype */ {
          unaryPlus_lvwjq7$: function ($receiver) {
            this.unaryPlus_pdl1w0$($receiver.text);
          }
        }),
        AttributeEnum: Kotlin.createTrait(null),
        visit_smtwu9$: function ($receiver, block) {
          $receiver.consumer.onTagStart_tkgjla$($receiver);
          block.call($receiver);
          $receiver.consumer.onTagEnd_tkgjla$($receiver);
        },
        visitAndFinalize_6oj4h2$: function ($receiver, consumer, block) {
          if (!($receiver.consumer === consumer)) {
            var message = 'Failed requirement.';
            throw new Kotlin.IllegalArgumentException(message.toString());
          }
          _.kotlinx.html.visit_smtwu9$($receiver, block);
          return consumer.finalize();
        },
        attributesMapOf: function () {
          return _.kotlinx.html.emptyMap;
        },
        attributesMapOf_puj7f4$: function (key, value) {
          if (value == null)
            return _.kotlinx.html.emptyMap;
          else
            return _.kotlinx.html.singletonMapOf_puj7f4$(key, value);
        },
        attributesMapOf_kand9s$: function (pairs) {
          var tmp$0;
          var result = null;
          tmp$0 = Kotlin.kotlin.ranges.step_7isp7r$(new Kotlin.NumberRange(0, pairs.length - 1), 2).iterator();
          while (tmp$0.hasNext()) {
            var i = tmp$0.next();
            var k = pairs[i];
            var v = pairs[i + 1];
            if (k != null && v != null) {
              if (result == null) {
                result = new Kotlin.LinkedHashMap(pairs.length - i);
              }
              result.put_wn2jw4$(k, v);
            }
          }
          return result != null ? result : _.kotlinx.html.emptyMap;
        },
        singletonMapOf_puj7f4$: function (key, value) {
          var $receiver = new Kotlin.DefaultPrimitiveHashMap(2);
          $receiver.put_wn2jw4$(key, value);
          return $receiver;
        },
        unsafe_houp2m$: function ($receiver, block) {
          $receiver.consumer.onTagContentUnsafe_4yqypv$(block);
        },
        DefaultUnsafe: Kotlin.createClass(function () {
          return [_.kotlinx.html.Unsafe];
        }, function () {
          this.sb_rtuma$ = new Kotlin.StringBuilder();
        }, /** @lends _.kotlinx.html.DefaultUnsafe.prototype */ {
          unaryPlus_pdl1w0$: function ($receiver) {
            this.sb_rtuma$.append($receiver);
          },
          toString: function () {
            return this.sb_rtuma$.toString();
          }
        }),
        CommonAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.CommonAttributeGroupFacade.prototype */ {
          enableTheming: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean.get_txhc1s$(this, 'EnableTheming');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean.set_lamm2d$(this, 'EnableTheming', newValue);
            }
          },
          enableViewState: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean.get_txhc1s$(this, 'EnableViewState');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean.set_lamm2d$(this, 'EnableViewState', newValue);
            }
          },
          skinID: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'SkinID');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'SkinID', newValue);
            }
          },
          visible: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean.get_txhc1s$(this, 'Visible');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean.set_lamm2d$(this, 'Visible', newValue);
            }
          },
          accessKey: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'accesskey');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'accesskey', newValue);
            }
          },
          classes: {
            get: function () {
              return _.kotlinx.html.attributeSetStringStringSet.get_txhc1s$(this, 'class');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeSetStringStringSet.set_lamm2d$(this, 'class', newValue);
            }
          },
          contentEditable: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean.get_txhc1s$(this, 'contenteditable');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean.set_lamm2d$(this, 'contenteditable', newValue);
            }
          },
          contextMenu: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'contextmenu');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'contextmenu', newValue);
            }
          },
          dataFolderName: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'data-FolderName');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'data-FolderName', newValue);
            }
          },
          dataMsgId: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'data-MsgId');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'data-MsgId', newValue);
            }
          },
          dir: {
            get: function () {
              return _.kotlinx.html.attributeDirEnumDirValues.get_txhc1s$(this, 'dir');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeDirEnumDirValues.set_lamm2d$(this, 'dir', newValue);
            }
          },
          draggable: {
            get: function () {
              return _.kotlinx.html.attributeDraggableEnumDraggableValues.get_txhc1s$(this, 'draggable');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeDraggableEnumDraggableValues.set_lamm2d$(this, 'draggable', newValue);
            }
          },
          hidden: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'hidden');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'hidden', newValue);
            }
          },
          id: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'id');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'id', newValue);
            }
          },
          itemProp: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'itemprop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'itemprop', newValue);
            }
          },
          onAbort: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onabort');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onabort', newValue);
            }
          },
          onBlur: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onblur');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onblur', newValue);
            }
          },
          onCanPlay: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'oncanplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'oncanplay', newValue);
            }
          },
          onCanPlayThrough: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'oncanplaythrough');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'oncanplaythrough', newValue);
            }
          },
          onChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onchange', newValue);
            }
          },
          onClick: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onclick');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onclick', newValue);
            }
          },
          onContextMenu: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'oncontextmenu');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'oncontextmenu', newValue);
            }
          },
          onDoubleClick: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondblclick');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondblclick', newValue);
            }
          },
          onDrag: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondrag');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondrag', newValue);
            }
          },
          onDragEnter: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondragenter');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondragenter', newValue);
            }
          },
          onDragLeave: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondragleave');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondragleave', newValue);
            }
          },
          onDragOver: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondragover');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondragover', newValue);
            }
          },
          onDragStart: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondragstart');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondragstart', newValue);
            }
          },
          onDrop: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondrop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondrop', newValue);
            }
          },
          onDurationChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ondurationchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ondurationchange', newValue);
            }
          },
          onEmptied: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onemptied');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onemptied', newValue);
            }
          },
          onEnded: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onended');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onended', newValue);
            }
          },
          onError: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onerror');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onerror', newValue);
            }
          },
          onFocus: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onfocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onfocus', newValue);
            }
          },
          onFormChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onformchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onformchange', newValue);
            }
          },
          onFormInput: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onforminput');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onforminput', newValue);
            }
          },
          onInput: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'oninput');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'oninput', newValue);
            }
          },
          onInvalid: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'oninvalid');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'oninvalid', newValue);
            }
          },
          onKeyDown: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onkeydown');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onkeydown', newValue);
            }
          },
          onKeyPress: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onkeypress');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onkeypress', newValue);
            }
          },
          onKeyUp: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onkeyup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onkeyup', newValue);
            }
          },
          onLoad: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onload');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onload', newValue);
            }
          },
          onLoadedData: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onloadeddata');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onloadeddata', newValue);
            }
          },
          onLoadedMetaData: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onloadedmetadata');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onloadedmetadata', newValue);
            }
          },
          onLoadStart: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onloadstart');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onloadstart', newValue);
            }
          },
          onMouseDown: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onmousedown');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onmousedown', newValue);
            }
          },
          onMouseMove: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onmousemove');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onmousemove', newValue);
            }
          },
          onMouseOut: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onmouseout');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onmouseout', newValue);
            }
          },
          onMouseOver: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onmouseover');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onmouseover', newValue);
            }
          },
          onMouseUp: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onmouseup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onmouseup', newValue);
            }
          },
          onMouseWheel: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onmousewheel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onmousewheel', newValue);
            }
          },
          onPause: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onpause');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onpause', newValue);
            }
          },
          onPlay: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onplay', newValue);
            }
          },
          onPlaying: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onplaying');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onplaying', newValue);
            }
          },
          onProgress: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onprogress');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onprogress', newValue);
            }
          },
          onRateChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onratechange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onratechange', newValue);
            }
          },
          onReadyStateChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onreadystatechange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onreadystatechange', newValue);
            }
          },
          onScroll: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onscroll');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onscroll', newValue);
            }
          },
          onSeeked: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onseeked');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onseeked', newValue);
            }
          },
          onSeeking: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onseeking');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onseeking', newValue);
            }
          },
          onSelect: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onselect');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onselect', newValue);
            }
          },
          onShow: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onshow');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onshow', newValue);
            }
          },
          onStalled: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onstalled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onstalled', newValue);
            }
          },
          onSubmit: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onsubmit');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onsubmit', newValue);
            }
          },
          onSuspend: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onsuspend');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onsuspend', newValue);
            }
          },
          onTimeUpdate: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ontimeupdate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ontimeupdate', newValue);
            }
          },
          onVolumeChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onvolumechange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onvolumechange', newValue);
            }
          },
          onWaiting: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onwaiting');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onwaiting', newValue);
            }
          },
          role: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'role');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'role', newValue);
            }
          },
          runAt: {
            get: function () {
              return _.kotlinx.html.attributeRunAtEnumRunAtValues.get_txhc1s$(this, 'runat');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeRunAtEnumRunAtValues.set_lamm2d$(this, 'runat', newValue);
            }
          },
          spellCheck: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean.get_txhc1s$(this, 'spellcheck');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean.set_lamm2d$(this, 'spellcheck', newValue);
            }
          },
          style: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'style');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'style', newValue);
            }
          },
          subject: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'subject');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'subject', newValue);
            }
          },
          tabIndex: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'tabIndex');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'tabIndex', newValue);
            }
          },
          title: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'title');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'title', newValue);
            }
          }
        }),
        FormServerAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.FormServerAttributeGroupFacade.prototype */ {
          defaultButton: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'DefaultButton');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'DefaultButton', newValue);
            }
          },
          defaultFocus: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'DefaultFocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'DefaultFocus', newValue);
            }
          },
          submitDisabledControls: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean.get_txhc1s$(this, 'SubmitDisabledControls');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean.set_lamm2d$(this, 'SubmitDisabledControls', newValue);
            }
          }
        }),
        InputServerAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.InputServerAttributeGroupFacade.prototype */ {
          causesValidation: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBoolean.get_txhc1s$(this, 'CausesValidation');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBoolean.set_lamm2d$(this, 'CausesValidation', newValue);
            }
          },
          validationGroup: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ValidationGroup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ValidationGroup', newValue);
            }
          }
        }),
        SelectServerAttributeGroupFacade: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }, /** @lends _.kotlinx.html.SelectServerAttributeGroupFacade.prototype */ {
          dataSourceID: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'DataSourceID');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'DataSourceID', newValue);
            }
          },
          dataTextField: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'DataTextField');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'DataTextField', newValue);
            }
          },
          dataValueField: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'DataValueField');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'DataValueField', newValue);
            }
          }
        }),
        a_qw2zl7$f: function () {
        },
        a_qw2zl7$: function ($receiver, href, target, classes, block) {
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a_qw2zl7$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.A(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'target', target, 'class', classes]), $receiver), $receiver, block);
        },
        abbr_sswahv$f: function () {
        },
        abbr_sswahv$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.abbr_sswahv$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.ABBR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        address_ovrhac$f: function () {
        },
        address_ovrhac$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.address_ovrhac$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.ADDRESS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        area_rxebyb$f: function () {
        },
        area_rxebyb$: function ($receiver, shape, alt, classes, block) {
          if (shape === void 0)
            shape = null;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.area_rxebyb$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', shape != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(shape) : null, 'alt', alt, 'class', classes]), $receiver), $receiver, block);
        },
        article_hom30m$f: function () {
        },
        article_hom30m$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.article_hom30m$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.ARTICLE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        aside_i0945k$f: function () {
        },
        aside_i0945k$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.aside_i0945k$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.ASIDE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        audio_9712sm$f: function () {
        },
        audio_9712sm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio_9712sm$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.AUDIO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        b_9s7oum$f: function () {
        },
        b_9s7oum$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.b_9s7oum$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.B(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        base_jhs4oz$f: function () {
        },
        base_jhs4oz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.base_jhs4oz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.BASE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        bdi_xkbgtz$f: function () {
        },
        bdi_xkbgtz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdi_xkbgtz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.BDI(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        bdo_txoakj$f: function () {
        },
        bdo_txoakj$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdo_txoakj$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.BDO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        blockQuote_ymd267$f: function () {
        },
        blockQuote_ymd267$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.blockQuote_ymd267$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.BLOCKQUOTE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        body_yq0a1g$f: function () {
        },
        body_yq0a1g$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.body_yq0a1g$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.BODY(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        br_3rnbya$f: function () {
        },
        br_3rnbya$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.br_3rnbya$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.BR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        button_iugdl9$f: function () {
        },
        button_iugdl9$: function ($receiver, formEncType, formMethod, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.button_iugdl9$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver), $receiver, block);
        },
        canvas_2s9rft$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        canvas_2s9rft$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.CANVAS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.canvas_2s9rft$f(content));
        },
        canvas_9drsja$f: function () {
        },
        canvas_9drsja$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.canvas_9drsja$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.CANVAS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        caption_7prn0q$f: function () {
        },
        caption_7prn0q$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.caption_7prn0q$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.CAPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        cite_vjrrnt$f: function () {
        },
        cite_vjrrnt$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.cite_vjrrnt$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.CITE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        code_gt0li7$f: function () {
        },
        code_gt0li7$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.code_gt0li7$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.CODE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        col_x5xz1s$f: function () {
        },
        col_x5xz1s$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.col_x5xz1s$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.COL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        colGroup_2zs0zz$f: function () {
        },
        colGroup_2zs0zz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colGroup_2zs0zz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.COLGROUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        command_4apli$f: function () {
        },
        command_4apli$: function ($receiver, type, classes, block) {
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command_4apli$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver), $receiver, block);
        },
        dataList_pc62re$f: function () {
        },
        dataList_pc62re$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dataList_pc62re$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DATALIST(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        dd_70idfy$f: function () {
        },
        dd_70idfy$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dd_70idfy$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        del_2m9acb$f: function () {
        },
        del_2m9acb$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.del_2m9acb$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DEL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        details_l0fpxu$f: function () {
        },
        details_l0fpxu$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.details_l0fpxu$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DETAILS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        dfn_qzp5hg$f: function () {
        },
        dfn_qzp5hg$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dfn_qzp5hg$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DFN(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        dialog_djchbu$f: function () {
        },
        dialog_djchbu$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dialog_djchbu$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DIALOG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        div_52npup$f: function () {
        },
        div_52npup$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.div_52npup$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DIV(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        dl_kne006$f: function () {
        },
        dl_kne006$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dl_kne006$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        dt_ya9mke$f: function () {
        },
        dt_ya9mke$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dt_ya9mke$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.DT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        em_45sg9y$f: function () {
        },
        em_45sg9y$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.em_45sg9y$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.EM(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        embed_d3k8x5$f: function () {
        },
        embed_d3k8x5$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed_d3k8x5$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.EMBED(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        fieldSet_ikf44m$f: function () {
        },
        fieldSet_ikf44m$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fieldSet_ikf44m$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.FIELDSET(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        figcaption_qyrorw$f: function () {
        },
        figcaption_qyrorw$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.figcaption_qyrorw$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.FIGCAPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        figure_rbaj4m$f: function () {
        },
        figure_rbaj4m$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.figure_rbaj4m$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.FIGURE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        footer_a08bm5$f: function () {
        },
        footer_a08bm5$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.footer_a08bm5$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.FOOTER(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        form_iif6bn$f: function () {
        },
        form_iif6bn$: function ($receiver, action, encType, method, classes, block) {
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (method === void 0)
            method = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.form_iif6bn$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.FORM(_.kotlinx.html.attributesMapOf_kand9s$(['action', action, 'enctype', encType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(encType) : null, 'method', method != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(method) : null, 'class', classes]), $receiver), $receiver, block);
        },
        h1_ha5cdh$f: function () {
        },
        h1_ha5cdh$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1_ha5cdh$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.H1(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        h2_7neq1o$f: function () {
        },
        h2_7neq1o$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2_7neq1o$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.H2(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        h3_wkysgt$f: function () {
        },
        h3_wkysgt$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3_wkysgt$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.H3(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        h4_dil736$f: function () {
        },
        h4_dil736$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4_dil736$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.H4(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        h5_beyvbz$f: function () {
        },
        h5_beyvbz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5_beyvbz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.H5(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        h6_yol480$f: function () {
        },
        h6_yol480$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6_yol480$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.H6(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        head_8iwaxo$f: function () {
        },
        head_8iwaxo$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.head_8iwaxo$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.HEAD(_.kotlinx.html.emptyMap, $receiver), $receiver, block);
        },
        header_8wf0vz$f: function () {
        },
        header_8wf0vz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.header_8wf0vz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.HEADER(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        hGroup_p102pj$f: function () {
        },
        hGroup_p102pj$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hGroup_p102pj$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.HGROUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        hr_o509rw$f: function () {
        },
        hr_o509rw$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hr_o509rw$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.HR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        html_uqh1t$f: function () {
        },
        html_uqh1t$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.html_uqh1t$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.HTML(_.kotlinx.html.emptyMap, $receiver), $receiver, block);
        },
        i_mogo55$f: function () {
        },
        i_mogo55$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.i_mogo55$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.I(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        iframe_bm3sce$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        iframe_bm3sce$: function ($receiver, sandbox, classes, content) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver), $receiver, _.kotlinx.html.iframe_bm3sce$f(content));
        },
        iframe_2mbkkj$f: function () {
        },
        iframe_2mbkkj$: function ($receiver, sandbox, classes, block) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe_2mbkkj$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver), $receiver, block);
        },
        img_gf7dzd$f: function () {
        },
        img_gf7dzd$: function ($receiver, alt, src, classes, block) {
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img_gf7dzd$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.IMG(_.kotlinx.html.attributesMapOf_kand9s$(['alt', alt, 'src', src, 'class', classes]), $receiver), $receiver, block);
        },
        input_8sv0x$f: function () {
        },
        input_8sv0x$: function ($receiver, type, formEncType, formMethod, name, classes, block) {
          if (type === void 0)
            type = null;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.input_8sv0x$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver), $receiver, block);
        },
        ins_16gn6$f: function () {
        },
        ins_16gn6$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ins_16gn6$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.INS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        kbd_eu8ttv$f: function () {
        },
        kbd_eu8ttv$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.kbd_eu8ttv$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.KBD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        keyGen_9sstet$f: function () {
        },
        keyGen_9sstet$: function ($receiver, keyType, classes, block) {
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen_9sstet$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.KEYGEN(_.kotlinx.html.attributesMapOf_kand9s$(['keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(keyType) : null, 'class', classes]), $receiver), $receiver, block);
        },
        label_sjph50$f: function () {
        },
        label_sjph50$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label_sjph50$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.LABEL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        legEnd_miwhtt$f: function () {
        },
        legEnd_miwhtt$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd_miwhtt$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.LEGEND(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        li_kxi8up$f: function () {
        },
        li_kxi8up$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.li_kxi8up$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.LI(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        link_6elmrc$f: function () {
        },
        link_6elmrc$: function ($receiver, href, rel, type, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.link_6elmrc$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.LINK(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'rel', rel, 'type', type]), $receiver), $receiver, block);
        },
        map_dl6kn2$f: function () {
        },
        map_dl6kn2$: function ($receiver, name, classes, block) {
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.map_dl6kn2$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.MAP(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'class', classes]), $receiver), $receiver, block);
        },
        mark_3uuvk1$f: function () {
        },
        mark_3uuvk1$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mark_3uuvk1$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.MARK(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        math_oic286$f: function () {
        },
        math_oic286$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.math_oic286$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.MATH(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        mathml_2s9rft$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        mathml_2s9rft$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.MATHML(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.mathml_2s9rft$f(content));
        },
        mathml_g82u3d$f: function () {
        },
        mathml_g82u3d$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mathml_g82u3d$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.MATHML(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        meta_51yi5h$f: function () {
        },
        meta_51yi5h$: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta_51yi5h$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.META(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'content', content]), $receiver), $receiver, block);
        },
        meter_3v0vdl$f: function () {
        },
        meter_3v0vdl$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.meter_3v0vdl$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.METER(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        nav_cb4vxv$f: function () {
        },
        nav_cb4vxv$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.nav_cb4vxv$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.NAV(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        noScript_2eq8si$f: function () {
        },
        noScript_2eq8si$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript_2eq8si$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        object__xbqgeo$f: function () {
        },
        object__xbqgeo$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object__xbqgeo$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.OBJECT_(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        ol_sjaebz$f: function () {
        },
        ol_sjaebz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ol_sjaebz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.OL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        optGroup_dszdtg$f: function () {
        },
        optGroup_dszdtg$: function ($receiver, label, classes, block) {
          if (label === void 0)
            label = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.optGroup_dszdtg$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.OPTGROUP(_.kotlinx.html.attributesMapOf_kand9s$(['label', label, 'class', classes]), $receiver), $receiver, block);
        },
        option_2s9rft$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        option_2s9rft$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.option_2s9rft$f(content));
        },
        option_9d8bmh$f: function () {
        },
        option_9d8bmh$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option_9d8bmh$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        output_ycbwkz$f: function () {
        },
        output_ycbwkz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.output_ycbwkz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.OUTPUT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        p_fvz0u8$f: function () {
        },
        p_fvz0u8$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.p_fvz0u8$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.P(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        param_y9hjxr$f: function () {
        },
        param_y9hjxr$: function ($receiver, name, value, block) {
          if (name === void 0)
            name = null;
          if (value === void 0)
            value = null;
          if (block === void 0)
            block = _.kotlinx.html.param_y9hjxr$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.PARAM(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'value', value]), $receiver), $receiver, block);
        },
        pre_d3eg99$f: function () {
        },
        pre_d3eg99$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.pre_d3eg99$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.PRE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        progress_euj90h$f: function () {
        },
        progress_euj90h$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.progress_euj90h$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.PROGRESS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        q_91l1kx$f: function () {
        },
        q_91l1kx$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.q_91l1kx$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.Q(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        rp_vwj1yo$f: function () {
        },
        rp_vwj1yo$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rp_vwj1yo$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.RP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        rt_afgsb0$f: function () {
        },
        rt_afgsb0$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rt_afgsb0$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.RT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        ruby_6wpf5g$f: function () {
        },
        ruby_6wpf5g$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ruby_6wpf5g$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.RUBY(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        samp_6y6bod$f: function () {
        },
        samp_6y6bod$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.samp_6y6bod$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SAMP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        script_u734vm$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        script_u734vm$: function ($receiver, type, src, content) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'src', src]), $receiver), $receiver, _.kotlinx.html.script_u734vm$f(content));
        },
        script_o9zjy0$f: function () {
        },
        script_o9zjy0$: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script_o9zjy0$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'src', src]), $receiver), $receiver, block);
        },
        section_adamx7$f: function () {
        },
        section_adamx7$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.section_adamx7$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SECTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        select_fnz8nm$f: function () {
        },
        select_fnz8nm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select_fnz8nm$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SELECT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        small_6ktlnb$f: function () {
        },
        small_6ktlnb$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.small_6ktlnb$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SMALL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        source_vlshir$f: function () {
        },
        source_vlshir$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.source_vlshir$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SOURCE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        span_p2jcl8$f: function () {
        },
        span_p2jcl8$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.span_p2jcl8$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SPAN(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        strong_k25z5j$f: function () {
        },
        strong_k25z5j$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.strong_k25z5j$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.STRONG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        style_2s9rft$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        style_2s9rft$: function ($receiver, type, content) {
          if (type === void 0)
            type = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.STYLE(_.kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver), $receiver, _.kotlinx.html.style_2s9rft$f(content));
        },
        style_ucj667$f: function () {
        },
        style_ucj667$: function ($receiver, type, block) {
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.style_ucj667$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.STYLE(_.kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver), $receiver, block);
        },
        sub_oyc7ps$f: function () {
        },
        sub_oyc7ps$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sub_oyc7ps$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SUB(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        sup_iukvq6$f: function () {
        },
        sup_iukvq6$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sup_iukvq6$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        svg_2s9rft$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        svg_2s9rft$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SVG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, _.kotlinx.html.svg_2s9rft$f(content));
        },
        svg_w22to$f: function () {
        },
        svg_w22to$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.svg_w22to$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.SVG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        table_woo42q$f: function () {
        },
        table_woo42q$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.table_woo42q$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TABLE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        tbody_qmpnza$f: function () {
        },
        tbody_qmpnza$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tbody_qmpnza$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TBODY(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        td_1mkke$f: function () {
        },
        td_1mkke$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.td_1mkke$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        textArea_mmgjrl$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        textArea_mmgjrl$: function ($receiver, rows, cols, wrap, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver), $receiver, _.kotlinx.html.textArea_mmgjrl$f(content));
        },
        textArea_yhv9qc$f: function () {
        },
        textArea_yhv9qc$: function ($receiver, rows, cols, wrap, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textArea_yhv9qc$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver), $receiver, block);
        },
        tfoot_r9aycy$f: function () {
        },
        tfoot_r9aycy$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tfoot_r9aycy$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TFOOT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        th_o44qvk$f: function () {
        },
        th_o44qvk$: function ($receiver, scope, classes, block) {
          if (scope === void 0)
            scope = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.th_o44qvk$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TH(_.kotlinx.html.attributesMapOf_kand9s$(['scope', scope != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(scope) : null, 'class', classes]), $receiver), $receiver, block);
        },
        thead_d0x57g$f: function () {
        },
        thead_d0x57g$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.thead_d0x57g$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.THEAD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        time_nf3b9b$f: function () {
        },
        time_nf3b9b$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.time_nf3b9b$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TIME(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        title_7xagd3$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        title_7xagd3$: function ($receiver, content) {
          if (content === void 0)
            content = '';
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap, $receiver), $receiver, _.kotlinx.html.title_7xagd3$f(content));
        },
        title_f4ap2i$f: function () {
        },
        title_f4ap2i$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.title_f4ap2i$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap, $receiver), $receiver, block);
        },
        tr_65dwk0$f: function () {
        },
        tr_65dwk0$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_65dwk0$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.TR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        ul_m4gptj$f: function () {
        },
        ul_m4gptj$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ul_m4gptj$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.UL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        var__8ryal2$f: function () {
        },
        var__8ryal2$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.var__8ryal2$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.VAR_(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        video_il8myz$f: function () {
        },
        video_il8myz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video_il8myz$f;
          return _.kotlinx.html.visitAndFinalize_6oj4h2$(new _.kotlinx.html.VIDEO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver), $receiver, block);
        },
        Entities: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function $fun() {
          $fun.baseInitializer.call(this);
        }, function () {
          return {
            nbsp: function () {
              return new _.kotlinx.html.Entities();
            },
            lt: function () {
              return new _.kotlinx.html.Entities();
            },
            gt: function () {
              return new _.kotlinx.html.Entities();
            },
            quot: function () {
              return new _.kotlinx.html.Entities();
            },
            amp: function () {
              return new _.kotlinx.html.Entities();
            },
            apos: function () {
              return new _.kotlinx.html.Entities();
            },
            iexcl: function () {
              return new _.kotlinx.html.Entities();
            },
            cent: function () {
              return new _.kotlinx.html.Entities();
            },
            pound: function () {
              return new _.kotlinx.html.Entities();
            },
            curren: function () {
              return new _.kotlinx.html.Entities();
            },
            yen: function () {
              return new _.kotlinx.html.Entities();
            },
            brvbar: function () {
              return new _.kotlinx.html.Entities();
            },
            sect: function () {
              return new _.kotlinx.html.Entities();
            },
            uml: function () {
              return new _.kotlinx.html.Entities();
            },
            copy: function () {
              return new _.kotlinx.html.Entities();
            },
            ordf: function () {
              return new _.kotlinx.html.Entities();
            },
            laquo: function () {
              return new _.kotlinx.html.Entities();
            },
            not: function () {
              return new _.kotlinx.html.Entities();
            },
            shy: function () {
              return new _.kotlinx.html.Entities();
            },
            reg: function () {
              return new _.kotlinx.html.Entities();
            },
            macr: function () {
              return new _.kotlinx.html.Entities();
            },
            deg: function () {
              return new _.kotlinx.html.Entities();
            },
            plusmn: function () {
              return new _.kotlinx.html.Entities();
            },
            sup2: function () {
              return new _.kotlinx.html.Entities();
            },
            sup3: function () {
              return new _.kotlinx.html.Entities();
            },
            acute: function () {
              return new _.kotlinx.html.Entities();
            },
            micro: function () {
              return new _.kotlinx.html.Entities();
            },
            para: function () {
              return new _.kotlinx.html.Entities();
            },
            middot: function () {
              return new _.kotlinx.html.Entities();
            },
            cedil: function () {
              return new _.kotlinx.html.Entities();
            },
            sup1: function () {
              return new _.kotlinx.html.Entities();
            },
            ordm: function () {
              return new _.kotlinx.html.Entities();
            },
            raquo: function () {
              return new _.kotlinx.html.Entities();
            },
            frac14: function () {
              return new _.kotlinx.html.Entities();
            },
            frac12: function () {
              return new _.kotlinx.html.Entities();
            },
            frac34: function () {
              return new _.kotlinx.html.Entities();
            },
            iquest: function () {
              return new _.kotlinx.html.Entities();
            },
            Agrave: function () {
              return new _.kotlinx.html.Entities();
            },
            Aacute: function () {
              return new _.kotlinx.html.Entities();
            },
            Acirc: function () {
              return new _.kotlinx.html.Entities();
            },
            Atilde: function () {
              return new _.kotlinx.html.Entities();
            },
            Auml: function () {
              return new _.kotlinx.html.Entities();
            },
            Aring: function () {
              return new _.kotlinx.html.Entities();
            },
            AElig: function () {
              return new _.kotlinx.html.Entities();
            },
            Ccedil: function () {
              return new _.kotlinx.html.Entities();
            },
            Egrave: function () {
              return new _.kotlinx.html.Entities();
            },
            Eacute: function () {
              return new _.kotlinx.html.Entities();
            },
            Ecirc: function () {
              return new _.kotlinx.html.Entities();
            },
            Euml: function () {
              return new _.kotlinx.html.Entities();
            },
            Igrave: function () {
              return new _.kotlinx.html.Entities();
            },
            Iacute: function () {
              return new _.kotlinx.html.Entities();
            },
            Icirc: function () {
              return new _.kotlinx.html.Entities();
            },
            Iuml: function () {
              return new _.kotlinx.html.Entities();
            },
            ETH: function () {
              return new _.kotlinx.html.Entities();
            },
            Ntilde: function () {
              return new _.kotlinx.html.Entities();
            },
            Ograve: function () {
              return new _.kotlinx.html.Entities();
            },
            Oacute: function () {
              return new _.kotlinx.html.Entities();
            },
            Ocirc: function () {
              return new _.kotlinx.html.Entities();
            },
            Otilde: function () {
              return new _.kotlinx.html.Entities();
            },
            Ouml: function () {
              return new _.kotlinx.html.Entities();
            },
            times: function () {
              return new _.kotlinx.html.Entities();
            },
            Oslash: function () {
              return new _.kotlinx.html.Entities();
            },
            Ugrave: function () {
              return new _.kotlinx.html.Entities();
            },
            Uacute: function () {
              return new _.kotlinx.html.Entities();
            },
            Ucirc: function () {
              return new _.kotlinx.html.Entities();
            },
            Uuml: function () {
              return new _.kotlinx.html.Entities();
            },
            Yacute: function () {
              return new _.kotlinx.html.Entities();
            },
            THORN: function () {
              return new _.kotlinx.html.Entities();
            },
            szlig: function () {
              return new _.kotlinx.html.Entities();
            },
            agrave: function () {
              return new _.kotlinx.html.Entities();
            },
            aacute: function () {
              return new _.kotlinx.html.Entities();
            },
            acirc: function () {
              return new _.kotlinx.html.Entities();
            },
            atilde: function () {
              return new _.kotlinx.html.Entities();
            },
            auml: function () {
              return new _.kotlinx.html.Entities();
            },
            aring: function () {
              return new _.kotlinx.html.Entities();
            },
            aelig: function () {
              return new _.kotlinx.html.Entities();
            },
            ccedil: function () {
              return new _.kotlinx.html.Entities();
            },
            egrave: function () {
              return new _.kotlinx.html.Entities();
            },
            eacute: function () {
              return new _.kotlinx.html.Entities();
            },
            ecirc: function () {
              return new _.kotlinx.html.Entities();
            },
            euml: function () {
              return new _.kotlinx.html.Entities();
            },
            igrave: function () {
              return new _.kotlinx.html.Entities();
            },
            iacute: function () {
              return new _.kotlinx.html.Entities();
            },
            icirc: function () {
              return new _.kotlinx.html.Entities();
            },
            iuml: function () {
              return new _.kotlinx.html.Entities();
            },
            eth: function () {
              return new _.kotlinx.html.Entities();
            },
            ntilde: function () {
              return new _.kotlinx.html.Entities();
            },
            ograve: function () {
              return new _.kotlinx.html.Entities();
            },
            oacute: function () {
              return new _.kotlinx.html.Entities();
            },
            ocirc: function () {
              return new _.kotlinx.html.Entities();
            },
            otilde: function () {
              return new _.kotlinx.html.Entities();
            },
            ouml: function () {
              return new _.kotlinx.html.Entities();
            },
            divide: function () {
              return new _.kotlinx.html.Entities();
            },
            oslash: function () {
              return new _.kotlinx.html.Entities();
            },
            ugrave: function () {
              return new _.kotlinx.html.Entities();
            },
            uacute: function () {
              return new _.kotlinx.html.Entities();
            },
            ucirc: function () {
              return new _.kotlinx.html.Entities();
            },
            uuml: function () {
              return new _.kotlinx.html.Entities();
            },
            yacute: function () {
              return new _.kotlinx.html.Entities();
            },
            thorn: function () {
              return new _.kotlinx.html.Entities();
            },
            yuml: function () {
              return new _.kotlinx.html.Entities();
            }
          };
        }, /** @lends _.kotlinx.html.Entities.prototype */ {
          text: {
            get: function () {
              return '&' + this.toString() + ';';
            }
          }
        }),
        Dir: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_agec4m$ = realValue;
        }, function () {
          return {
            ltr: function () {
              return new _.kotlinx.html.Dir('ltr');
            },
            rtl: function () {
              return new _.kotlinx.html.Dir('rtl');
            }
          };
        }, /** @lends _.kotlinx.html.Dir.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_agec4m$;
            }
          }
        }),
        Draggable: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_b0hpeu$ = realValue;
        }, function () {
          return {
            true_: function () {
              return new _.kotlinx.html.Draggable('true');
            },
            false_: function () {
              return new _.kotlinx.html.Draggable('false');
            },
            auto: function () {
              return new _.kotlinx.html.Draggable('auto');
            }
          };
        }, /** @lends _.kotlinx.html.Draggable.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_b0hpeu$;
            }
          }
        }),
        RunAt: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_c6w72h$ = realValue;
        }, function () {
          return {
            server: function () {
              return new _.kotlinx.html.RunAt('server');
            }
          };
        }, /** @lends _.kotlinx.html.RunAt.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_c6w72h$;
            }
          }
        }),
        ATarget: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        ARel: Kotlin.createObject(null, function () {
          this.alternate = 'Alternate';
          this.appEndIx = 'Appendix';
          this.bookmark = 'Bookmark';
          this.chapter = 'Chapter';
          this.contentS = 'Contents';
          this.copyright = 'Copyright';
          this.glossary = 'Glossary';
          this.help = 'Help';
          this.index = 'Index';
          this.next = 'Next';
          this.prev = 'Prev';
          this.section = 'Section';
          this.start = 'Start';
          this.stylesheet = 'Stylesheet';
          this.subsection = 'Subsection';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
        }),
        AType: Kotlin.createObject(null, function () {
          this.textAsp = 'text/asp';
          this.textAsa = 'text/asa';
          this.textCss = 'text/css';
          this.textHtml = 'text/html';
          this.textJavaScript = 'text/javascript';
          this.textPlain = 'text/plain';
          this.textScriptLet = 'text/scriptlet';
          this.textXComponent = 'text/x-component';
          this.textXHtmlInsertion = 'text/x-html-insertion';
          this.textXml = 'text/xml';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
        }),
        AreaShape: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_4h0er1$ = realValue;
        }, function () {
          return {
            rect: function () {
              return new _.kotlinx.html.AreaShape('rect');
            },
            circle: function () {
              return new _.kotlinx.html.AreaShape('circle');
            },
            poly: function () {
              return new _.kotlinx.html.AreaShape('poly');
            },
            default: function () {
              return new _.kotlinx.html.AreaShape('default');
            }
          };
        }, /** @lends _.kotlinx.html.AreaShape.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_4h0er1$;
            }
          }
        }),
        AreaTarget: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        AreaRel: Kotlin.createObject(null, function () {
          this.alternate = 'Alternate';
          this.appEndIx = 'Appendix';
          this.bookmark = 'Bookmark';
          this.chapter = 'Chapter';
          this.contentS = 'Contents';
          this.copyright = 'Copyright';
          this.glossary = 'Glossary';
          this.help = 'Help';
          this.index = 'Index';
          this.next = 'Next';
          this.prev = 'Prev';
          this.section = 'Section';
          this.start = 'Start';
          this.stylesheet = 'Stylesheet';
          this.subsection = 'Subsection';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
        }),
        BaseTarget: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        ButtonFormEncType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_fez5ih$ = realValue;
        }, function () {
          return {
            multipartFormData: function () {
              return new _.kotlinx.html.ButtonFormEncType('multipart/form-data');
            },
            applicationXWwwFormUrlEncoded: function () {
              return new _.kotlinx.html.ButtonFormEncType('application/x-www-form-urlencoded');
            },
            textPlain: function () {
              return new _.kotlinx.html.ButtonFormEncType('text/plain');
            }
          };
        }, /** @lends _.kotlinx.html.ButtonFormEncType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_fez5ih$;
            }
          }
        }),
        ButtonFormMethod: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_6g6hbs$ = realValue;
        }, function () {
          return {
            get: function () {
              return new _.kotlinx.html.ButtonFormMethod('get');
            },
            post: function () {
              return new _.kotlinx.html.ButtonFormMethod('post');
            },
            put: function () {
              return new _.kotlinx.html.ButtonFormMethod('put');
            },
            delete: function () {
              return new _.kotlinx.html.ButtonFormMethod('delete');
            }
          };
        }, /** @lends _.kotlinx.html.ButtonFormMethod.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_6g6hbs$;
            }
          }
        }),
        ButtonFormTarget: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        ButtonType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_5rron7$ = realValue;
        }, function () {
          return {
            button: function () {
              return new _.kotlinx.html.ButtonType('button');
            },
            reset: function () {
              return new _.kotlinx.html.ButtonType('reset');
            },
            submit: function () {
              return new _.kotlinx.html.ButtonType('submit');
            }
          };
        }, /** @lends _.kotlinx.html.ButtonType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_5rron7$;
            }
          }
        }),
        CommandType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_zclhmq$ = realValue;
        }, function () {
          return {
            command: function () {
              return new _.kotlinx.html.CommandType('command');
            },
            checkBox: function () {
              return new _.kotlinx.html.CommandType('checkbox');
            },
            radio: function () {
              return new _.kotlinx.html.CommandType('radio');
            }
          };
        }, /** @lends _.kotlinx.html.CommandType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_zclhmq$;
            }
          }
        }),
        FormEncType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_z1dq3t$ = realValue;
        }, function () {
          return {
            multipartFormData: function () {
              return new _.kotlinx.html.FormEncType('multipart/form-data');
            },
            applicationXWwwFormUrlEncoded: function () {
              return new _.kotlinx.html.FormEncType('application/x-www-form-urlencoded');
            },
            textPlain: function () {
              return new _.kotlinx.html.FormEncType('text/plain');
            }
          };
        }, /** @lends _.kotlinx.html.FormEncType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_z1dq3t$;
            }
          }
        }),
        FormMethod: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_pfz43u$ = realValue;
        }, function () {
          return {
            get: function () {
              return new _.kotlinx.html.FormMethod('get');
            },
            post: function () {
              return new _.kotlinx.html.FormMethod('post');
            },
            put: function () {
              return new _.kotlinx.html.FormMethod('put');
            },
            delete: function () {
              return new _.kotlinx.html.FormMethod('delete');
            }
          };
        }, /** @lends _.kotlinx.html.FormMethod.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_pfz43u$;
            }
          }
        }),
        FormTarget: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        IframeName: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        IframeSandbox: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_215658$ = realValue;
        }, function () {
          return {
            allowSameOrigin: function () {
              return new _.kotlinx.html.IframeSandbox('allow-same-origin');
            },
            allowFormS: function () {
              return new _.kotlinx.html.IframeSandbox('allow-forms');
            },
            allowScripts: function () {
              return new _.kotlinx.html.IframeSandbox('allow-scripts');
            }
          };
        }, /** @lends _.kotlinx.html.IframeSandbox.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_215658$;
            }
          }
        }),
        InputType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_dufvwj$ = realValue;
        }, function () {
          return {
            button: function () {
              return new _.kotlinx.html.InputType('button');
            },
            checkBox: function () {
              return new _.kotlinx.html.InputType('checkbox');
            },
            color: function () {
              return new _.kotlinx.html.InputType('color');
            },
            date: function () {
              return new _.kotlinx.html.InputType('date');
            },
            dateTime: function () {
              return new _.kotlinx.html.InputType('datetime');
            },
            dateTimeLocal: function () {
              return new _.kotlinx.html.InputType('datetime-local');
            },
            email: function () {
              return new _.kotlinx.html.InputType('email');
            },
            file: function () {
              return new _.kotlinx.html.InputType('file');
            },
            hidden: function () {
              return new _.kotlinx.html.InputType('hidden');
            },
            image: function () {
              return new _.kotlinx.html.InputType('image');
            },
            month: function () {
              return new _.kotlinx.html.InputType('month');
            },
            number: function () {
              return new _.kotlinx.html.InputType('number');
            },
            password: function () {
              return new _.kotlinx.html.InputType('password');
            },
            radio: function () {
              return new _.kotlinx.html.InputType('radio');
            },
            range: function () {
              return new _.kotlinx.html.InputType('range');
            },
            reset: function () {
              return new _.kotlinx.html.InputType('reset');
            },
            search: function () {
              return new _.kotlinx.html.InputType('search');
            },
            submit: function () {
              return new _.kotlinx.html.InputType('submit');
            },
            text: function () {
              return new _.kotlinx.html.InputType('text');
            },
            tel: function () {
              return new _.kotlinx.html.InputType('tel');
            },
            time: function () {
              return new _.kotlinx.html.InputType('time');
            },
            url: function () {
              return new _.kotlinx.html.InputType('url');
            },
            week: function () {
              return new _.kotlinx.html.InputType('week');
            }
          };
        }, /** @lends _.kotlinx.html.InputType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_dufvwj$;
            }
          }
        }),
        InputFormEncType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_yc4k7$ = realValue;
        }, function () {
          return {
            multipartFormData: function () {
              return new _.kotlinx.html.InputFormEncType('multipart/form-data');
            },
            applicationXWwwFormUrlEncoded: function () {
              return new _.kotlinx.html.InputFormEncType('application/x-www-form-urlencoded');
            },
            textPlain: function () {
              return new _.kotlinx.html.InputFormEncType('text/plain');
            }
          };
        }, /** @lends _.kotlinx.html.InputFormEncType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_yc4k7$;
            }
          }
        }),
        InputFormMethod: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_f34bg8$ = realValue;
        }, function () {
          return {
            get: function () {
              return new _.kotlinx.html.InputFormMethod('get');
            },
            post: function () {
              return new _.kotlinx.html.InputFormMethod('post');
            },
            put: function () {
              return new _.kotlinx.html.InputFormMethod('put');
            },
            delete: function () {
              return new _.kotlinx.html.InputFormMethod('delete');
            }
          };
        }, /** @lends _.kotlinx.html.InputFormMethod.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_f34bg8$;
            }
          }
        }),
        InputFormTarget: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        KeyGenKeyType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_wj0a1r$ = realValue;
        }, function () {
          return {
            rsa: function () {
              return new _.kotlinx.html.KeyGenKeyType('rsa');
            }
          };
        }, /** @lends _.kotlinx.html.KeyGenKeyType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_wj0a1r$;
            }
          }
        }),
        LinkRel: Kotlin.createObject(null, function () {
          this.alternate = 'Alternate';
          this.appEndIx = 'Appendix';
          this.bookmark = 'Bookmark';
          this.chapter = 'Chapter';
          this.contentS = 'Contents';
          this.copyright = 'Copyright';
          this.glossary = 'Glossary';
          this.help = 'Help';
          this.index = 'Index';
          this.next = 'Next';
          this.prev = 'Prev';
          this.section = 'Section';
          this.start = 'Start';
          this.stylesheet = 'Stylesheet';
          this.subsection = 'Subsection';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
        }),
        LinkMedia: Kotlin.createObject(null, function () {
          this.screen = 'screen';
          this.print = 'print';
          this.tty = 'tty';
          this.tv = 'tv';
          this.projection = 'projection';
          this.handheld = 'handheld';
          this.braille = 'braille';
          this.aural = 'aural';
          this.all = 'all';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
        }),
        LinkType: Kotlin.createObject(null, function () {
          this.textAsp = 'text/asp';
          this.textAsa = 'text/asa';
          this.textCss = 'text/css';
          this.textHtml = 'text/html';
          this.textJavaScript = 'text/javascript';
          this.textPlain = 'text/plain';
          this.textScriptLet = 'text/scriptlet';
          this.textXComponent = 'text/x-component';
          this.textXHtmlInsertion = 'text/x-html-insertion';
          this.textXml = 'text/xml';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
        }),
        MetaHttpEquiv: Kotlin.createObject(null, function () {
          this.contentLanguage = 'content-language';
          this.contentType = 'content-type';
          this.defaultStyle = 'default-style';
          this.refresh = 'refresh';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['contentLanguage', 'contentType', 'defaultStyle', 'refresh']);
        }),
        ObjectName: Kotlin.createObject(null, function () {
          this.blank = '_blank';
          this.parent = '_parent';
          this.self = '_self';
          this.top = '_top';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['blank', 'parent', 'self', 'top']);
        }),
        ScriptType: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_cf3b8q$ = realValue;
        }, function () {
          return {
            textEcmaScript: function () {
              return new _.kotlinx.html.ScriptType('text/ecmascript');
            },
            textJavaScript: function () {
              return new _.kotlinx.html.ScriptType('text/javascript');
            },
            textJavaScript10: function () {
              return new _.kotlinx.html.ScriptType('text/javascript1.0');
            },
            textJavaScript11: function () {
              return new _.kotlinx.html.ScriptType('text/javascript1.1');
            },
            textJavaScript12: function () {
              return new _.kotlinx.html.ScriptType('text/javascript1.2');
            },
            textJavaScript13: function () {
              return new _.kotlinx.html.ScriptType('text/javascript1.3');
            },
            textJavaScript14: function () {
              return new _.kotlinx.html.ScriptType('text/javascript1.4');
            },
            textJavaScript15: function () {
              return new _.kotlinx.html.ScriptType('text/javascript1.5');
            },
            textJScript: function () {
              return new _.kotlinx.html.ScriptType('text/jscript');
            },
            textXJavaScript: function () {
              return new _.kotlinx.html.ScriptType('text/x-javascript');
            },
            textXEcmaScript: function () {
              return new _.kotlinx.html.ScriptType('text/x-ecmascript');
            },
            textVbScript: function () {
              return new _.kotlinx.html.ScriptType('text/vbscript');
            }
          };
        }, /** @lends _.kotlinx.html.ScriptType.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_cf3b8q$;
            }
          }
        }),
        StyleType: Kotlin.createObject(null, function () {
          this.textCss = 'text/css';
          this.values = Kotlin.kotlin.collections.listOf_za3rmp$('textCss');
        }),
        StyleMedia: Kotlin.createObject(null, function () {
          this.screen = 'screen';
          this.print = 'print';
          this.tty = 'tty';
          this.tv = 'tv';
          this.projection = 'projection';
          this.handheld = 'handheld';
          this.braille = 'braille';
          this.aural = 'aural';
          this.all = 'all';
          this.values = Kotlin.kotlin.collections.listOf_9mqe4v$(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
        }),
        TextAreaWrap: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_pww97$ = realValue;
        }, function () {
          return {
            hard: function () {
              return new _.kotlinx.html.TextAreaWrap('hard');
            },
            soft: function () {
              return new _.kotlinx.html.TextAreaWrap('soft');
            }
          };
        }, /** @lends _.kotlinx.html.TextAreaWrap.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_pww97$;
            }
          }
        }),
        ThScope: Kotlin.createEnumClass(function () {
          return [_.kotlinx.html.AttributeEnum, Kotlin.Enum];
        }, function $fun(realValue) {
          $fun.baseInitializer.call(this);
          this.$realValue_r227yx$ = realValue;
        }, function () {
          return {
            col: function () {
              return new _.kotlinx.html.ThScope('col');
            },
            colGroup: function () {
              return new _.kotlinx.html.ThScope('colgroup');
            },
            row: function () {
              return new _.kotlinx.html.ThScope('row');
            },
            rowGroup: function () {
              return new _.kotlinx.html.ThScope('rowgroup');
            }
          };
        }, /** @lends _.kotlinx.html.ThScope.prototype */ {
          realValue: {
            get: function () {
              return this.$realValue_r227yx$;
            }
          }
        }),
        HtmlBlockInlineTag: Kotlin.createTrait(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HtmlBlockTag, _.kotlinx.html.CommonAttributeGroupFacade];
        }),
        HtmlBlockTag: Kotlin.createTrait(function () {
          return [_.kotlinx.html.FlowContent, _.kotlinx.html.CommonAttributeGroupFacade];
        }),
        HtmlHeadTag: Kotlin.createTrait(function () {
          return [_.kotlinx.html.MetaDataContent, _.kotlinx.html.CommonAttributeGroupFacade];
        }),
        HtmlInlineTag: Kotlin.createTrait(function () {
          return [_.kotlinx.html.PhrasingContent, _.kotlinx.html.CommonAttributeGroupFacade];
        }),
        FlowContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        HeadingContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        InteractiveContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        MetaDataContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        PhrasingContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        SectioningContent: Kotlin.createTrait(function () {
          return [_.kotlinx.html.Tag];
        }),
        a_bbbjt9$f: function () {
        },
        a_bbbjt9$: function ($receiver, href, target, classes, block) {
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a_bbbjt9$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.A(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'target', target, 'class', classes]), $receiver.consumer), block);
        },
        abbr_q6k7l7$f: function () {
        },
        abbr_q6k7l7$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.abbr_q6k7l7$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.ABBR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        area_ntpah1$f: function () {
        },
        area_ntpah1$: function ($receiver, shape, alt, classes, block) {
          if (shape === void 0)
            shape = null;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.area_ntpah1$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', shape != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(shape) : null, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        rectArea_8cq2ph$f: function () {
        },
        rectArea_8cq2ph$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rectArea_8cq2ph$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.rect.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        circleArea_8cq2ph$f: function () {
        },
        circleArea_8cq2ph$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.circleArea_8cq2ph$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.circle.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        polyArea_8cq2ph$f: function () {
        },
        polyArea_8cq2ph$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.polyArea_8cq2ph$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.poly.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        defaultArea_8cq2ph$f: function () {
        },
        defaultArea_8cq2ph$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.defaultArea_8cq2ph$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.default.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        address_mjdtks$f: function () {
        },
        address_mjdtks$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.address_mjdtks$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.ADDRESS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        article_fc8fb2$f: function () {
        },
        article_fc8fb2$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.article_fc8fb2$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.ARTICLE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        aside_7syo00$f: function () {
        },
        aside_7syo00$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.aside_7syo00$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.ASIDE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        audio_109dcy$f: function () {
        },
        audio_109dcy$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio_109dcy$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AUDIO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        b_8347qi$f: function () {
        },
        b_8347qi$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.b_8347qi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.B(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        bdi_hfv2cv$f: function () {
        },
        bdi_hfv2cv$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdi_hfv2cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BDI(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        blockQuote_xhlcll$f: function () {
        },
        blockQuote_xhlcll$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.blockQuote_xhlcll$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BLOCKQUOTE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        bdo_oyzcxh$f: function () {
        },
        bdo_oyzcxh$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdo_oyzcxh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BDO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        br_ai01o6$f: function () {
        },
        br_ai01o6$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.br_ai01o6$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        button_xxxke3$f: function () {
        },
        button_xxxke3$: function ($receiver, formEncType, formMethod, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.button_xxxke3$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        getButton_7h4m6c$f: function () {
        },
        getButton_7h4m6c$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getButton_7h4m6c$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.get.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        postButton_7h4m6c$f: function () {
        },
        postButton_7h4m6c$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postButton_7h4m6c$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.post.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        putButton_7h4m6c$f: function () {
        },
        putButton_7h4m6c$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putButton_7h4m6c$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.put.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        deleteButton_7h4m6c$f: function () {
        },
        deleteButton_7h4m6c$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteButton_7h4m6c$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.delete.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        canvas_thskk2$f: function () {
        },
        canvas_thskk2$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.canvas_thskk2$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CANVAS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        canvas_wxforj$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        canvas_wxforj$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CANVAS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), _.kotlinx.html.canvas_wxforj$f(content));
        },
        cite_sxfor5$f: function () {
        },
        cite_sxfor5$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.cite_sxfor5$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CITE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        code_e6oilj$f: function () {
        },
        code_e6oilj$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.code_e6oilj$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CODE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        command_e87gki$f: function () {
        },
        command_e87gki$: function ($receiver, type, classes, block) {
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command_e87gki$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        commandCommand_c5wjcd$f: function () {
        },
        commandCommand_c5wjcd$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.commandCommand_c5wjcd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.command.realValue, 'class', classes]), $receiver.consumer), block);
        },
        checkBoxCommand_c5wjcd$f: function () {
        },
        checkBoxCommand_c5wjcd$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxCommand_c5wjcd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.checkBox.realValue, 'class', classes]), $receiver.consumer), block);
        },
        radioCommand_c5wjcd$f: function () {
        },
        radioCommand_c5wjcd$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioCommand_c5wjcd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.radio.realValue, 'class', classes]), $receiver.consumer), block);
        },
        dataList_npipqa$f: function () {
        },
        dataList_npipqa$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dataList_npipqa$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DATALIST(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        del_di744t$f: function () {
        },
        del_di744t$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.del_di744t$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DEL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        details_io228a$f: function () {
        },
        details_io228a$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.details_io228a$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DETAILS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        dfn_rwyi0k$f: function () {
        },
        dfn_rwyi0k$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dfn_rwyi0k$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DFN(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        dialog_im77jy$f: function () {
        },
        dialog_im77jy$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dialog_im77jy$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DIALOG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        div_b1somf$f: function () {
        },
        div_b1somf$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.div_b1somf$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DIV(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        dl_yx1dmm$f: function () {
        },
        dl_yx1dmm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dl_yx1dmm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        em_ifftwe$f: function () {
        },
        em_ifftwe$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.em_ifftwe$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.EM(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        embed_2w9srl$f: function () {
        },
        embed_2w9srl$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed_2w9srl$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.EMBED(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        fieldSet_k72h5q$f: function () {
        },
        fieldSet_k72h5q$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fieldSet_k72h5q$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FIELDSET(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        figure_4u95r6$f: function () {
        },
        figure_4u95r6$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.figure_4u95r6$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FIGURE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        figcaption_tvxbz8$f: function () {
        },
        figcaption_tvxbz8$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.figcaption_tvxbz8$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FIGCAPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        footer_m5bd9n$f: function () {
        },
        footer_m5bd9n$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.footer_m5bd9n$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FOOTER(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        form_di86t$f: function () {
        },
        form_di86t$: function ($receiver, action, encType, method, classes, block) {
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (method === void 0)
            method = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.form_di86t$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FORM(_.kotlinx.html.attributesMapOf_kand9s$(['action', action, 'enctype', encType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(encType) : null, 'method', method != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(method) : null, 'class', classes]), $receiver.consumer), block);
        },
        getForm_7mhbvq$f: function () {
        },
        getForm_7mhbvq$: function ($receiver, action, encType, classes, block) {
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getForm_7mhbvq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FORM(_.kotlinx.html.attributesMapOf_kand9s$(['action', action, 'enctype', encType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(encType) : null, 'method', _.kotlinx.html.FormMethod.get.realValue, 'class', classes]), $receiver.consumer), block);
        },
        postForm_7mhbvq$f: function () {
        },
        postForm_7mhbvq$: function ($receiver, action, encType, classes, block) {
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postForm_7mhbvq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FORM(_.kotlinx.html.attributesMapOf_kand9s$(['action', action, 'enctype', encType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(encType) : null, 'method', _.kotlinx.html.FormMethod.post.realValue, 'class', classes]), $receiver.consumer), block);
        },
        putForm_7mhbvq$f: function () {
        },
        putForm_7mhbvq$: function ($receiver, action, encType, classes, block) {
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putForm_7mhbvq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FORM(_.kotlinx.html.attributesMapOf_kand9s$(['action', action, 'enctype', encType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(encType) : null, 'method', _.kotlinx.html.FormMethod.put.realValue, 'class', classes]), $receiver.consumer), block);
        },
        deleteForm_7mhbvq$f: function () {
        },
        deleteForm_7mhbvq$: function ($receiver, action, encType, classes, block) {
          if (action === void 0)
            action = null;
          if (encType === void 0)
            encType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteForm_7mhbvq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FORM(_.kotlinx.html.attributesMapOf_kand9s$(['action', action, 'enctype', encType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(encType) : null, 'method', _.kotlinx.html.FormMethod.delete.realValue, 'class', classes]), $receiver.consumer), block);
        },
        h1_vjspzx$f: function () {
        },
        h1_vjspzx$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1_vjspzx$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H1(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h2_6m8nks$f: function () {
        },
        h2_6m8nks$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2_6m8nks$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H2(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h3_ibbeud$f: function () {
        },
        h3_ibbeud$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3_ibbeud$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H3(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h4_rs8kpm$f: function () {
        },
        h4_rs8kpm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4_rs8kpm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H4(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h5_2uoiah$f: function () {
        },
        h5_2uoiah$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5_2uoiah$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H5(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h6_m2vk4o$f: function () {
        },
        h6_m2vk4o$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6_m2vk4o$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H6(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        header_n94nzt$f: function () {
        },
        header_n94nzt$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.header_n94nzt$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.HEADER(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        hGroup_dukadt$f: function () {
        },
        hGroup_dukadt$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hGroup_dukadt$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.HGROUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        hr_9vcw5g$f: function () {
        },
        hr_9vcw5g$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hr_9vcw5g$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.HR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        i_uhbh8v$f: function () {
        },
        i_uhbh8v$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.i_uhbh8v$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.I(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        iframe_l7ajvv$f: function () {
        },
        iframe_l7ajvv$: function ($receiver, sandbox, classes, block) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe_l7ajvv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver.consumer), block);
        },
        iframe_q7sqgm$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        iframe_q7sqgm$: function ($receiver, sandbox, classes, content) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver.consumer), _.kotlinx.html.iframe_q7sqgm$f(content));
        },
        allowSameOriginIframe_1rw78i$f: function () {
        },
        allowSameOriginIframe_1rw78i$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowSameOriginIframe_1rw78i$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowSameOrigin.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowFormSIframe_1rw78i$f: function () {
        },
        allowFormSIframe_1rw78i$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowFormSIframe_1rw78i$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowFormS.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowScriptsIframe_1rw78i$f: function () {
        },
        allowScriptsIframe_1rw78i$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowScriptsIframe_1rw78i$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowScripts.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowSameOriginIframe_wxforj$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowSameOriginIframe_wxforj$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowSameOrigin.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowSameOriginIframe_wxforj$f(content));
        },
        allowFormSIframe_wxforj$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowFormSIframe_wxforj$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowFormS.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowFormSIframe_wxforj$f(content));
        },
        allowScriptsIframe_wxforj$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowScriptsIframe_wxforj$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowScripts.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowScriptsIframe_wxforj$f(content));
        },
        img_nrbump$f: function () {
        },
        img_nrbump$: function ($receiver, alt, src, classes, block) {
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img_nrbump$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IMG(_.kotlinx.html.attributesMapOf_kand9s$(['alt', alt, 'src', src, 'class', classes]), $receiver.consumer), block);
        },
        input_o2wert$f: function () {
        },
        input_o2wert$: function ($receiver, type, formEncType, formMethod, name, classes, block) {
          if (type === void 0)
            type = null;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.input_o2wert$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        buttonInput_c2s6nh$f: function () {
        },
        buttonInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.buttonInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.button.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        checkBoxInput_c2s6nh$f: function () {
        },
        checkBoxInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.checkBox.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        colorInput_c2s6nh$f: function () {
        },
        colorInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colorInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.color.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateInput_c2s6nh$f: function () {
        },
        dateInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.date.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateTimeInput_c2s6nh$f: function () {
        },
        dateTimeInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.dateTime.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateTimeLocalInput_c2s6nh$f: function () {
        },
        dateTimeLocalInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeLocalInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.dateTimeLocal.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        emailInput_c2s6nh$f: function () {
        },
        emailInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.emailInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.email.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        fileInput_c2s6nh$f: function () {
        },
        fileInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fileInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.file.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        hiddenInput_c2s6nh$f: function () {
        },
        hiddenInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hiddenInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.hidden.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        imageInput_c2s6nh$f: function () {
        },
        imageInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.imageInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.image.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        monthInput_c2s6nh$f: function () {
        },
        monthInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.monthInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.month.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        numberInput_c2s6nh$f: function () {
        },
        numberInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.numberInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.number.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        passwordInput_c2s6nh$f: function () {
        },
        passwordInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.passwordInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.password.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        radioInput_c2s6nh$f: function () {
        },
        radioInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.radio.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        rangeInput_c2s6nh$f: function () {
        },
        rangeInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rangeInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.range.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        resetInput_c2s6nh$f: function () {
        },
        resetInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.resetInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.reset.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        searchInput_c2s6nh$f: function () {
        },
        searchInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.searchInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.search.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        submitInput_c2s6nh$f: function () {
        },
        submitInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.submitInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.submit.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        textInput_c2s6nh$f: function () {
        },
        textInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.text.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        telInput_c2s6nh$f: function () {
        },
        telInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.telInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.tel.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        timeInput_c2s6nh$f: function () {
        },
        timeInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.timeInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.time.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        urlInput_c2s6nh$f: function () {
        },
        urlInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.urlInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.url.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        weekInput_c2s6nh$f: function () {
        },
        weekInput_c2s6nh$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.weekInput_c2s6nh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.week.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        ins_g5mv4a$f: function () {
        },
        ins_g5mv4a$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ins_g5mv4a$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        kbd_uyp8az$f: function () {
        },
        kbd_uyp8az$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.kbd_uyp8az$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KBD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        keyGen_8s65wj$f: function () {
        },
        keyGen_8s65wj$: function ($receiver, keyType, classes, block) {
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen_8s65wj$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KEYGEN(_.kotlinx.html.attributesMapOf_kand9s$(['keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(keyType) : null, 'class', classes]), $receiver.consumer), block);
        },
        rsaKeyGen_pc8ya3$f: function () {
        },
        rsaKeyGen_pc8ya3$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rsaKeyGen_pc8ya3$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KEYGEN(_.kotlinx.html.attributesMapOf_kand9s$(['keytype', _.kotlinx.html.KeyGenKeyType.rsa.realValue, 'class', classes]), $receiver.consumer), block);
        },
        label_icf0zg$f: function () {
        },
        label_icf0zg$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label_icf0zg$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LABEL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        link_kr3sxc$f: function () {
        },
        link_kr3sxc$: function ($receiver, href, rel, type, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.link_kr3sxc$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LINK(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'rel', rel, 'type', type]), $receiver.consumer), block);
        },
        map_jwnyve$f: function () {
        },
        map_jwnyve$: function ($receiver, name, classes, block) {
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.map_jwnyve$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.MAP(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'class', classes]), $receiver.consumer), block);
        },
        mark_6h6ygp$f: function () {
        },
        mark_6h6ygp$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mark_6h6ygp$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.MARK(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        math_r4o54u$f: function () {
        },
        math_r4o54u$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.math_r4o54u$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.MATH(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        meta_w5ciwd$f: function () {
        },
        meta_w5ciwd$: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta_w5ciwd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.META(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'content', content]), $receiver.consumer), block);
        },
        meter_6c9krz$f: function () {
        },
        meter_6c9krz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.meter_6c9krz$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.METER(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        nav_3tbij9$f: function () {
        },
        nav_3tbij9$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.nav_3tbij9$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.NAV(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        noScript_41dltm$f: function () {
        },
        noScript_41dltm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript_41dltm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        ol_e9n0pj$f: function () {
        },
        ol_e9n0pj$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ol_e9n0pj$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        object__zczxuw$f: function () {
        },
        object__zczxuw$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object__zczxuw$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OBJECT_(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        output_26s7p7$f: function () {
        },
        output_26s7p7$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.output_26s7p7$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OUTPUT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        p_1zcvqw$f: function () {
        },
        p_1zcvqw$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.p_1zcvqw$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.P(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        pre_t7uuqd$f: function () {
        },
        pre_t7uuqd$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.pre_t7uuqd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.PRE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        progress_gh6m1l$f: function () {
        },
        progress_gh6m1l$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.progress_gh6m1l$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.PROGRESS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        q_qwwy61$f: function () {
        },
        q_qwwy61$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.q_qwwy61$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.Q(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        ruby_9j1i24$f: function () {
        },
        ruby_9j1i24$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ruby_9j1i24$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.RUBY(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        samp_9kiel1$f: function () {
        },
        samp_9kiel1$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.samp_9kiel1$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SAMP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        script_14lbsw$f: function () {
        },
        script_14lbsw$: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script_14lbsw$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'src', src]), $receiver.consumer), block);
        },
        textEcmaScriptScript_2zwith$f: function () {
        },
        textEcmaScriptScript_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textEcmaScriptScript_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textEcmaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScriptScript_2zwith$f: function () {
        },
        textJavaScriptScript_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScriptScript_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript10Script_2zwith$f: function () {
        },
        textJavaScript10Script_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript10Script_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript10.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript11Script_2zwith$f: function () {
        },
        textJavaScript11Script_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript11Script_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript11.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript12Script_2zwith$f: function () {
        },
        textJavaScript12Script_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript12Script_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript12.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript13Script_2zwith$f: function () {
        },
        textJavaScript13Script_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript13Script_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript13.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript14Script_2zwith$f: function () {
        },
        textJavaScript14Script_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript14Script_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript14.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript15Script_2zwith$f: function () {
        },
        textJavaScript15Script_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript15Script_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript15.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJScriptScript_2zwith$f: function () {
        },
        textJScriptScript_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJScriptScript_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textXJavaScriptScript_2zwith$f: function () {
        },
        textXJavaScriptScript_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXJavaScriptScript_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textXJavaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textXEcmaScriptScript_2zwith$f: function () {
        },
        textXEcmaScriptScript_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXEcmaScriptScript_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textXEcmaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textVbScriptScript_2zwith$f: function () {
        },
        textVbScriptScript_2zwith$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textVbScriptScript_2zwith$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textVbScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        section_cpoamr$f: function () {
        },
        section_cpoamr$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.section_cpoamr$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SECTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        select_n7l4fq$f: function () {
        },
        select_n7l4fq$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select_n7l4fq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SELECT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        small_3mgui9$f: function () {
        },
        small_3mgui9$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.small_3mgui9$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SMALL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        span_mg79ok$f: function () {
        },
        span_mg79ok$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.span_mg79ok$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SPAN(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        strong_itedxt$f: function () {
        },
        strong_itedxt$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.strong_itedxt$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.STRONG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        style_uhafnd$f: function () {
        },
        style_uhafnd$: function ($receiver, type, block) {
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.style_uhafnd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.STYLE(_.kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver.consumer), block);
        },
        style_wxforj$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        style_wxforj$: function ($receiver, type, content) {
          if (type === void 0)
            type = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.STYLE(_.kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver.consumer), _.kotlinx.html.style_wxforj$f(content));
        },
        sub_8tvt8o$f: function () {
        },
        sub_8tvt8o$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sub_8tvt8o$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SUB(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        sup_2q4h92$f: function () {
        },
        sup_2q4h92$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sup_2q4h92$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        svg_h0ihas$f: function () {
        },
        svg_h0ihas$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.svg_h0ihas$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SVG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        svg_wxforj$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        svg_wxforj$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SVG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), _.kotlinx.html.svg_wxforj$f(content));
        },
        table_s55hqu$f: function () {
        },
        table_s55hqu$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.table_s55hqu$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TABLE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        textArea_ozzf4c$f: function () {
        },
        textArea_ozzf4c$: function ($receiver, rows, cols, wrap, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textArea_ozzf4c$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver.consumer), block);
        },
        textArea_crwds9$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        textArea_crwds9$: function ($receiver, rows, cols, wrap, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver.consumer), _.kotlinx.html.textArea_crwds9$f(content));
        },
        hardTextArea_xwb59s$f: function () {
        },
        hardTextArea_xwb59s$: function ($receiver, rows, cols, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hardTextArea_xwb59s$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.hard.realValue, 'class', classes]), $receiver.consumer), block);
        },
        softTextArea_xwb59s$f: function () {
        },
        softTextArea_xwb59s$: function ($receiver, rows, cols, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.softTextArea_xwb59s$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.soft.realValue, 'class', classes]), $receiver.consumer), block);
        },
        hardTextArea_bvv5z9$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        hardTextArea_bvv5z9$: function ($receiver, rows, cols, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.hard.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.hardTextArea_bvv5z9$f(content));
        },
        softTextArea_bvv5z9$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        softTextArea_bvv5z9$: function ($receiver, rows, cols, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.soft.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.softTextArea_bvv5z9$f(content));
        },
        time_ksr8cn$f: function () {
        },
        time_ksr8cn$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.time_ksr8cn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TIME(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        ul_ymzyj5$f: function () {
        },
        ul_ymzyj5$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ul_ymzyj5$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.UL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        var__beadhq$f: function () {
        },
        var__beadhq$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.var__beadhq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.VAR_(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        video_8dy6tf$f: function () {
        },
        video_8dy6tf$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video_8dy6tf$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.VIDEO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h1_hdnfmn$f: function () {
        },
        h1_hdnfmn$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1_hdnfmn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H1(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h2_spwjxc$f: function () {
        },
        h2_spwjxc$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2_spwjxc$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H2(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h3_3schi7$f: function () {
        },
        h3_3schi7$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3_3schi7$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H3(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h4_l57kwy$f: function () {
        },
        h4_l57kwy$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4_l57kwy$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H4(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h5_oycen1$f: function () {
        },
        h5_oycen1$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5_oycen1$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H5(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h6_sc7w$f: function () {
        },
        h6_sc7w$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6_sc7w$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H6(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        hGroup_33m2vh$f: function () {
        },
        hGroup_33m2vh$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hGroup_33m2vh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.HGROUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        a_f60oj5$f: function () {
        },
        a_f60oj5$: function ($receiver, href, target, classes, block) {
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a_f60oj5$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.A(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'target', target, 'class', classes]), $receiver.consumer), block);
        },
        audio_mg0jeq$f: function () {
        },
        audio_mg0jeq$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio_mg0jeq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AUDIO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        button_qo5y95$f: function () {
        },
        button_qo5y95$: function ($receiver, formEncType, formMethod, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.button_qo5y95$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        getButton_hhwesg$f: function () {
        },
        getButton_hhwesg$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getButton_hhwesg$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.get.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        postButton_hhwesg$f: function () {
        },
        postButton_hhwesg$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postButton_hhwesg$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.post.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        putButton_hhwesg$f: function () {
        },
        putButton_hhwesg$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putButton_hhwesg$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.put.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        deleteButton_hhwesg$f: function () {
        },
        deleteButton_hhwesg$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteButton_hhwesg$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.delete.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        details_vp7nde$f: function () {
        },
        details_vp7nde$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.details_vp7nde$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DETAILS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        embed_qcjpj9$f: function () {
        },
        embed_qcjpj9$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed_qcjpj9$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.EMBED(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        iframe_take13$f: function () {
        },
        iframe_take13$: function ($receiver, sandbox, classes, block) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe_take13$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver.consumer), block);
        },
        iframe_s43p96$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        iframe_s43p96$: function ($receiver, sandbox, classes, content) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver.consumer), _.kotlinx.html.iframe_s43p96$f(content));
        },
        allowSameOriginIframe_exigu2$f: function () {
        },
        allowSameOriginIframe_exigu2$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowSameOriginIframe_exigu2$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowSameOrigin.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowFormSIframe_exigu2$f: function () {
        },
        allowFormSIframe_exigu2$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowFormSIframe_exigu2$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowFormS.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowScriptsIframe_exigu2$f: function () {
        },
        allowScriptsIframe_exigu2$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowScriptsIframe_exigu2$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowScripts.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowSameOriginIframe_9yh33v$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowSameOriginIframe_9yh33v$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowSameOrigin.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowSameOriginIframe_9yh33v$f(content));
        },
        allowFormSIframe_9yh33v$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowFormSIframe_9yh33v$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowFormS.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowFormSIframe_9yh33v$f(content));
        },
        allowScriptsIframe_9yh33v$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowScriptsIframe_9yh33v$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowScripts.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowScriptsIframe_9yh33v$f(content));
        },
        img_ewbq99$f: function () {
        },
        img_ewbq99$: function ($receiver, alt, src, classes, block) {
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img_ewbq99$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IMG(_.kotlinx.html.attributesMapOf_kand9s$(['alt', alt, 'src', src, 'class', classes]), $receiver.consumer), block);
        },
        input_sodtkd$f: function () {
        },
        input_sodtkd$: function ($receiver, type, formEncType, formMethod, name, classes, block) {
          if (type === void 0)
            type = null;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.input_sodtkd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        buttonInput_ov26cv$f: function () {
        },
        buttonInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.buttonInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.button.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        checkBoxInput_ov26cv$f: function () {
        },
        checkBoxInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.checkBox.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        colorInput_ov26cv$f: function () {
        },
        colorInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colorInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.color.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateInput_ov26cv$f: function () {
        },
        dateInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.date.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateTimeInput_ov26cv$f: function () {
        },
        dateTimeInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.dateTime.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateTimeLocalInput_ov26cv$f: function () {
        },
        dateTimeLocalInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeLocalInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.dateTimeLocal.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        emailInput_ov26cv$f: function () {
        },
        emailInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.emailInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.email.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        fileInput_ov26cv$f: function () {
        },
        fileInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fileInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.file.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        hiddenInput_ov26cv$f: function () {
        },
        hiddenInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hiddenInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.hidden.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        imageInput_ov26cv$f: function () {
        },
        imageInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.imageInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.image.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        monthInput_ov26cv$f: function () {
        },
        monthInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.monthInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.month.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        numberInput_ov26cv$f: function () {
        },
        numberInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.numberInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.number.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        passwordInput_ov26cv$f: function () {
        },
        passwordInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.passwordInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.password.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        radioInput_ov26cv$f: function () {
        },
        radioInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.radio.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        rangeInput_ov26cv$f: function () {
        },
        rangeInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rangeInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.range.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        resetInput_ov26cv$f: function () {
        },
        resetInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.resetInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.reset.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        searchInput_ov26cv$f: function () {
        },
        searchInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.searchInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.search.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        submitInput_ov26cv$f: function () {
        },
        submitInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.submitInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.submit.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        textInput_ov26cv$f: function () {
        },
        textInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.text.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        telInput_ov26cv$f: function () {
        },
        telInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.telInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.tel.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        timeInput_ov26cv$f: function () {
        },
        timeInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.timeInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.time.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        urlInput_ov26cv$f: function () {
        },
        urlInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.urlInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.url.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        weekInput_ov26cv$f: function () {
        },
        weekInput_ov26cv$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.weekInput_ov26cv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.week.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        keyGen_gvg01r$f: function () {
        },
        keyGen_gvg01r$: function ($receiver, keyType, classes, block) {
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen_gvg01r$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KEYGEN(_.kotlinx.html.attributesMapOf_kand9s$(['keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(keyType) : null, 'class', classes]), $receiver.consumer), block);
        },
        rsaKeyGen_szgfmh$f: function () {
        },
        rsaKeyGen_szgfmh$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rsaKeyGen_szgfmh$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KEYGEN(_.kotlinx.html.attributesMapOf_kand9s$(['keytype', _.kotlinx.html.KeyGenKeyType.rsa.realValue, 'class', classes]), $receiver.consumer), block);
        },
        label_t8f480$f: function () {
        },
        label_t8f480$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label_t8f480$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LABEL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        object__f09rqs$f: function () {
        },
        object__f09rqs$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object__f09rqs$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OBJECT_(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        select_v449gu$f: function () {
        },
        select_v449gu$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select_v449gu$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SELECT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        textArea_htmnc8$f: function () {
        },
        textArea_htmnc8$: function ($receiver, rows, cols, wrap, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textArea_htmnc8$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver.consumer), block);
        },
        textArea_ls9hpp$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        textArea_ls9hpp$: function ($receiver, rows, cols, wrap, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver.consumer), _.kotlinx.html.textArea_ls9hpp$f(content));
        },
        hardTextArea_8aa7e4$f: function () {
        },
        hardTextArea_8aa7e4$: function ($receiver, rows, cols, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hardTextArea_8aa7e4$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.hard.realValue, 'class', classes]), $receiver.consumer), block);
        },
        softTextArea_8aa7e4$f: function () {
        },
        softTextArea_8aa7e4$: function ($receiver, rows, cols, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.softTextArea_8aa7e4$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.soft.realValue, 'class', classes]), $receiver.consumer), block);
        },
        hardTextArea_o3j9d5$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        hardTextArea_o3j9d5$: function ($receiver, rows, cols, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.hard.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.hardTextArea_o3j9d5$f(content));
        },
        softTextArea_o3j9d5$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        softTextArea_o3j9d5$: function ($receiver, rows, cols, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.soft.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.softTextArea_o3j9d5$f(content));
        },
        video_vu83l3$f: function () {
        },
        video_vu83l3$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video_vu83l3$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.VIDEO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        base_u2d758$f: function () {
        },
        base_u2d758$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.base_u2d758$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BASE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        command_4xwitb$f: function () {
        },
        command_4xwitb$: function ($receiver, type, classes, block) {
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command_4xwitb$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        commandCommand_g0iktq$f: function () {
        },
        commandCommand_g0iktq$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.commandCommand_g0iktq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.command.realValue, 'class', classes]), $receiver.consumer), block);
        },
        checkBoxCommand_g0iktq$f: function () {
        },
        checkBoxCommand_g0iktq$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxCommand_g0iktq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.checkBox.realValue, 'class', classes]), $receiver.consumer), block);
        },
        radioCommand_g0iktq$f: function () {
        },
        radioCommand_g0iktq$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioCommand_g0iktq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.radio.realValue, 'class', classes]), $receiver.consumer), block);
        },
        link_1kztjj$f: function () {
        },
        link_1kztjj$: function ($receiver, href, rel, type, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.link_1kztjj$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LINK(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'rel', rel, 'type', type]), $receiver.consumer), block);
        },
        meta_was0c2$f: function () {
        },
        meta_was0c2$: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta_was0c2$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.META(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'content', content]), $receiver.consumer), block);
        },
        noScript_inv86f$f: function () {
        },
        noScript_inv86f$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript_inv86f$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        script_3syvof$f: function () {
        },
        script_3syvof$: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script_3syvof$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'src', src]), $receiver.consumer), block);
        },
        textEcmaScriptScript_xsd8yi$f: function () {
        },
        textEcmaScriptScript_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textEcmaScriptScript_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textEcmaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScriptScript_xsd8yi$f: function () {
        },
        textJavaScriptScript_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScriptScript_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript10Script_xsd8yi$f: function () {
        },
        textJavaScript10Script_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript10Script_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript10.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript11Script_xsd8yi$f: function () {
        },
        textJavaScript11Script_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript11Script_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript11.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript12Script_xsd8yi$f: function () {
        },
        textJavaScript12Script_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript12Script_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript12.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript13Script_xsd8yi$f: function () {
        },
        textJavaScript13Script_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript13Script_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript13.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript14Script_xsd8yi$f: function () {
        },
        textJavaScript14Script_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript14Script_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript14.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript15Script_xsd8yi$f: function () {
        },
        textJavaScript15Script_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript15Script_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript15.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJScriptScript_xsd8yi$f: function () {
        },
        textJScriptScript_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJScriptScript_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textXJavaScriptScript_xsd8yi$f: function () {
        },
        textXJavaScriptScript_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXJavaScriptScript_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textXJavaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textXEcmaScriptScript_xsd8yi$f: function () {
        },
        textXEcmaScriptScript_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXEcmaScriptScript_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textXEcmaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textVbScriptScript_xsd8yi$f: function () {
        },
        textVbScriptScript_xsd8yi$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textVbScriptScript_xsd8yi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textVbScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        style_d95px4$f: function () {
        },
        style_d95px4$: function ($receiver, type, block) {
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.style_d95px4$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.STYLE(_.kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver.consumer), block);
        },
        style_jvtm1s$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        style_jvtm1s$: function ($receiver, type, content) {
          if (type === void 0)
            type = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.STYLE(_.kotlinx.html.attributesMapOf_puj7f4$('type', type), $receiver.consumer), _.kotlinx.html.style_jvtm1s$f(content));
        },
        title_e4mjil$f: function () {
        },
        title_e4mjil$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.title_e4mjil$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap, $receiver.consumer), block);
        },
        title_4hqcni$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        title_4hqcni$: function ($receiver, content) {
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TITLE(_.kotlinx.html.emptyMap, $receiver.consumer), _.kotlinx.html.title_4hqcni$f(content));
        },
        a_6ksbgl$f: function () {
        },
        a_6ksbgl$: function ($receiver, href, target, classes, block) {
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.a_6ksbgl$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.A(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'target', target, 'class', classes]), $receiver.consumer), block);
        },
        abbr_mblq4t$f: function () {
        },
        abbr_mblq4t$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.abbr_mblq4t$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.ABBR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        area_a9a53h$f: function () {
        },
        area_a9a53h$: function ($receiver, shape, alt, classes, block) {
          if (shape === void 0)
            shape = null;
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.area_a9a53h$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', shape != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(shape) : null, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        rectArea_jl9nwd$f: function () {
        },
        rectArea_jl9nwd$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rectArea_jl9nwd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.rect.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        circleArea_jl9nwd$f: function () {
        },
        circleArea_jl9nwd$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.circleArea_jl9nwd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.circle.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        polyArea_jl9nwd$f: function () {
        },
        polyArea_jl9nwd$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.polyArea_jl9nwd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.poly.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        defaultArea_jl9nwd$f: function () {
        },
        defaultArea_jl9nwd$: function ($receiver, alt, classes, block) {
          if (alt === void 0)
            alt = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.defaultArea_jl9nwd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AREA(_.kotlinx.html.attributesMapOf_kand9s$(['Shape', _.kotlinx.html.AreaShape.default.realValue, 'alt', alt, 'class', classes]), $receiver.consumer), block);
        },
        audio_d0099m$f: function () {
        },
        audio_d0099m$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.audio_d0099m$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.AUDIO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        b_jakhlu$f: function () {
        },
        b_jakhlu$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.b_jakhlu$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.B(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        bdi_9btsgp$f: function () {
        },
        bdi_9btsgp$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdi_9btsgp$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BDI(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        bdo_1sphw3$f: function () {
        },
        bdo_1sphw3$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.bdo_1sphw3$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BDO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        br_i8jtke$f: function () {
        },
        br_i8jtke$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.br_i8jtke$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        button_sg81a5$f: function () {
        },
        button_sg81a5$: function ($receiver, formEncType, formMethod, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.button_sg81a5$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        getButton_3zzagk$f: function () {
        },
        getButton_3zzagk$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.getButton_3zzagk$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.get.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        postButton_3zzagk$f: function () {
        },
        postButton_3zzagk$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.postButton_3zzagk$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.post.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        putButton_3zzagk$f: function () {
        },
        putButton_3zzagk$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.putButton_3zzagk$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.put.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        deleteButton_3zzagk$f: function () {
        },
        deleteButton_3zzagk$: function ($receiver, formEncType, type, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.deleteButton_3zzagk$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BUTTON(_.kotlinx.html.attributesMapOf_kand9s$(['formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', _.kotlinx.html.ButtonFormMethod.delete.realValue, 'type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        canvas_cv7day$f: function () {
        },
        canvas_cv7day$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.canvas_cv7day$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CANVAS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        canvas_s7eaef$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        canvas_s7eaef$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CANVAS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), _.kotlinx.html.canvas_s7eaef$f(content));
        },
        cite_jkq8yv$f: function () {
        },
        cite_jkq8yv$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.cite_jkq8yv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CITE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        code_ybhf4h$f: function () {
        },
        code_ybhf4h$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.code_ybhf4h$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CODE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        command_2dl6cm$f: function () {
        },
        command_2dl6cm$: function ($receiver, type, classes, block) {
          if (type === void 0)
            type = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.command_2dl6cm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'class', classes]), $receiver.consumer), block);
        },
        commandCommand_ueded1$f: function () {
        },
        commandCommand_ueded1$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.commandCommand_ueded1$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.command.realValue, 'class', classes]), $receiver.consumer), block);
        },
        checkBoxCommand_ueded1$f: function () {
        },
        checkBoxCommand_ueded1$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxCommand_ueded1$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.checkBox.realValue, 'class', classes]), $receiver.consumer), block);
        },
        radioCommand_ueded1$f: function () {
        },
        radioCommand_ueded1$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioCommand_ueded1$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COMMAND(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.CommandType.radio.realValue, 'class', classes]), $receiver.consumer), block);
        },
        dataList_qnwfyi$f: function () {
        },
        dataList_qnwfyi$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dataList_qnwfyi$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DATALIST(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        del_ur830r$f: function () {
        },
        del_ur830r$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.del_ur830r$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DEL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        dfn_159n70$f: function () {
        },
        dfn_159n70$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dfn_159n70$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DFN(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        em_q5zlsm$f: function () {
        },
        em_q5zlsm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.em_q5zlsm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.EM(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        embed_93h353$f: function () {
        },
        embed_93h353$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.embed_93h353$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.EMBED(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        i_j9v7dj$f: function () {
        },
        i_j9v7dj$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.i_j9v7dj$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.I(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        iframe_3nf777$f: function () {
        },
        iframe_3nf777$: function ($receiver, sandbox, classes, block) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.iframe_3nf777$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver.consumer), block);
        },
        iframe_dpzfu6$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        iframe_dpzfu6$: function ($receiver, sandbox, classes, content) {
          if (sandbox === void 0)
            sandbox = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', sandbox != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(sandbox) : null, 'class', classes]), $receiver.consumer), _.kotlinx.html.iframe_dpzfu6$f(content));
        },
        allowSameOriginIframe_iehehm$f: function () {
        },
        allowSameOriginIframe_iehehm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowSameOriginIframe_iehehm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowSameOrigin.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowFormSIframe_iehehm$f: function () {
        },
        allowFormSIframe_iehehm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowFormSIframe_iehehm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowFormS.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowScriptsIframe_iehehm$f: function () {
        },
        allowScriptsIframe_iehehm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.allowScriptsIframe_iehehm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowScripts.realValue, 'class', classes]), $receiver.consumer), block);
        },
        allowSameOriginIframe_s7eaef$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowSameOriginIframe_s7eaef$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowSameOrigin.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowSameOriginIframe_s7eaef$f(content));
        },
        allowFormSIframe_s7eaef$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowFormSIframe_s7eaef$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowFormS.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowFormSIframe_s7eaef$f(content));
        },
        allowScriptsIframe_s7eaef$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        allowScriptsIframe_s7eaef$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IFRAME(_.kotlinx.html.attributesMapOf_kand9s$(['sandbox', _.kotlinx.html.IframeSandbox.allowScripts.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.allowScriptsIframe_s7eaef$f(content));
        },
        img_u3iac9$f: function () {
        },
        img_u3iac9$: function ($receiver, alt, src, classes, block) {
          if (alt === void 0)
            alt = null;
          if (src === void 0)
            src = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.img_u3iac9$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.IMG(_.kotlinx.html.attributesMapOf_kand9s$(['alt', alt, 'src', src, 'class', classes]), $receiver.consumer), block);
        },
        input_s61z5r$f: function () {
        },
        input_s61z5r$: function ($receiver, type, formEncType, formMethod, name, classes, block) {
          if (type === void 0)
            type = null;
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.input_s61z5r$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        buttonInput_cndsit$f: function () {
        },
        buttonInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.buttonInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.button.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        checkBoxInput_cndsit$f: function () {
        },
        checkBoxInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.checkBoxInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.checkBox.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        colorInput_cndsit$f: function () {
        },
        colorInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colorInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.color.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateInput_cndsit$f: function () {
        },
        dateInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.date.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateTimeInput_cndsit$f: function () {
        },
        dateTimeInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.dateTime.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        dateTimeLocalInput_cndsit$f: function () {
        },
        dateTimeLocalInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dateTimeLocalInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.dateTimeLocal.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        emailInput_cndsit$f: function () {
        },
        emailInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.emailInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.email.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        fileInput_cndsit$f: function () {
        },
        fileInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.fileInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.file.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        hiddenInput_cndsit$f: function () {
        },
        hiddenInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hiddenInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.hidden.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        imageInput_cndsit$f: function () {
        },
        imageInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.imageInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.image.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        monthInput_cndsit$f: function () {
        },
        monthInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.monthInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.month.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        numberInput_cndsit$f: function () {
        },
        numberInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.numberInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.number.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        passwordInput_cndsit$f: function () {
        },
        passwordInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.passwordInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.password.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        radioInput_cndsit$f: function () {
        },
        radioInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.radioInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.radio.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        rangeInput_cndsit$f: function () {
        },
        rangeInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rangeInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.range.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        resetInput_cndsit$f: function () {
        },
        resetInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.resetInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.reset.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        searchInput_cndsit$f: function () {
        },
        searchInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.searchInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.search.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        submitInput_cndsit$f: function () {
        },
        submitInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.submitInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.submit.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        textInput_cndsit$f: function () {
        },
        textInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.text.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        telInput_cndsit$f: function () {
        },
        telInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.telInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.tel.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        timeInput_cndsit$f: function () {
        },
        timeInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.timeInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.time.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        urlInput_cndsit$f: function () {
        },
        urlInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.urlInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.url.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        weekInput_cndsit$f: function () {
        },
        weekInput_cndsit$: function ($receiver, formEncType, formMethod, name, classes, block) {
          if (formEncType === void 0)
            formEncType = null;
          if (formMethod === void 0)
            formMethod = null;
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.weekInput_cndsit$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INPUT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.InputType.week.realValue, 'formenctype', formEncType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formEncType) : null, 'formmethod', formMethod != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer), block);
        },
        ins_s3sc1a$f: function () {
        },
        ins_s3sc1a$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ins_s3sc1a$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.INS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        kbd_dapyul$f: function () {
        },
        kbd_dapyul$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.kbd_dapyul$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KBD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        keyGen_8rp6s5$f: function () {
        },
        keyGen_8rp6s5$: function ($receiver, keyType, classes, block) {
          if (keyType === void 0)
            keyType = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.keyGen_8rp6s5$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KEYGEN(_.kotlinx.html.attributesMapOf_kand9s$(['keytype', keyType != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(keyType) : null, 'class', classes]), $receiver.consumer), block);
        },
        rsaKeyGen_8pnr0z$f: function () {
        },
        rsaKeyGen_8pnr0z$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rsaKeyGen_8pnr0z$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.KEYGEN(_.kotlinx.html.attributesMapOf_kand9s$(['keytype', _.kotlinx.html.KeyGenKeyType.rsa.realValue, 'class', classes]), $receiver.consumer), block);
        },
        label_6co52s$f: function () {
        },
        label_6co52s$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.label_6co52s$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LABEL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        link_45b608$f: function () {
        },
        link_45b608$: function ($receiver, href, rel, type, block) {
          if (href === void 0)
            href = null;
          if (rel === void 0)
            rel = null;
          if (type === void 0)
            type = null;
          if (block === void 0)
            block = _.kotlinx.html.link_45b608$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LINK(_.kotlinx.html.attributesMapOf_kand9s$(['href', href, 'rel', rel, 'type', type]), $receiver.consumer), block);
        },
        map_3d9bqm$f: function () {
        },
        map_3d9bqm$: function ($receiver, name, classes, block) {
          if (name === void 0)
            name = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.map_3d9bqm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.MAP(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'class', classes]), $receiver.consumer), block);
        },
        mark_g1r5sf$f: function () {
        },
        mark_g1r5sf$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.mark_g1r5sf$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.MARK(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        math_4lq0vq$f: function () {
        },
        math_4lq0vq$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.math_4lq0vq$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.MATH(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        meta_rn7xvv$f: function () {
        },
        meta_rn7xvv$: function ($receiver, name, content, block) {
          if (name === void 0)
            name = null;
          if (content === void 0)
            content = null;
          if (block === void 0)
            block = _.kotlinx.html.meta_rn7xvv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.META(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'content', content]), $receiver.consumer), block);
        },
        meter_ic0gon$f: function () {
        },
        meter_ic0gon$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.meter_ic0gon$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.METER(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        noScript_12zvle$f: function () {
        },
        noScript_12zvle$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.noScript_12zvle$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.NOSCRIPT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        object__h4j2u8$f: function () {
        },
        object__h4j2u8$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.object__h4j2u8$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OBJECT_(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        output_efszjx$f: function () {
        },
        output_efszjx$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.output_efszjx$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OUTPUT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        progress_disvtd$f: function () {
        },
        progress_disvtd$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.progress_disvtd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.PROGRESS(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        q_wwqtxr$f: function () {
        },
        q_wwqtxr$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.q_wwqtxr$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.Q(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        ruby_czwm70$f: function () {
        },
        ruby_czwm70$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.ruby_czwm70$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.RUBY(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        samp_cyfpo3$f: function () {
        },
        samp_cyfpo3$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.samp_cyfpo3$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SAMP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        script_3nqr5k$f: function () {
        },
        script_3nqr5k$: function ($receiver, type, src, block) {
          if (type === void 0)
            type = null;
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.script_3nqr5k$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', type != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(type) : null, 'src', src]), $receiver.consumer), block);
        },
        textEcmaScriptScript_dmoofn$f: function () {
        },
        textEcmaScriptScript_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textEcmaScriptScript_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textEcmaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScriptScript_dmoofn$f: function () {
        },
        textJavaScriptScript_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScriptScript_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript10Script_dmoofn$f: function () {
        },
        textJavaScript10Script_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript10Script_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript10.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript11Script_dmoofn$f: function () {
        },
        textJavaScript11Script_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript11Script_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript11.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript12Script_dmoofn$f: function () {
        },
        textJavaScript12Script_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript12Script_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript12.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript13Script_dmoofn$f: function () {
        },
        textJavaScript13Script_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript13Script_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript13.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript14Script_dmoofn$f: function () {
        },
        textJavaScript14Script_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript14Script_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript14.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJavaScript15Script_dmoofn$f: function () {
        },
        textJavaScript15Script_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJavaScript15Script_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJavaScript15.realValue, 'src', src]), $receiver.consumer), block);
        },
        textJScriptScript_dmoofn$f: function () {
        },
        textJScriptScript_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textJScriptScript_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textJScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textXJavaScriptScript_dmoofn$f: function () {
        },
        textXJavaScriptScript_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXJavaScriptScript_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textXJavaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textXEcmaScriptScript_dmoofn$f: function () {
        },
        textXEcmaScriptScript_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textXEcmaScriptScript_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textXEcmaScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        textVbScriptScript_dmoofn$f: function () {
        },
        textVbScriptScript_dmoofn$: function ($receiver, src, block) {
          if (src === void 0)
            src = null;
          if (block === void 0)
            block = _.kotlinx.html.textVbScriptScript_dmoofn$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SCRIPT(_.kotlinx.html.attributesMapOf_kand9s$(['type', _.kotlinx.html.ScriptType.textVbScript.realValue, 'src', src]), $receiver.consumer), block);
        },
        select_6kzx6m$f: function () {
        },
        select_6kzx6m$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.select_6kzx6m$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SELECT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        small_fm7qex$f: function () {
        },
        small_fm7qex$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.small_fm7qex$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SMALL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        span_q1yo1g$f: function () {
        },
        span_q1yo1g$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.span_q1yo1g$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SPAN(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        strong_26t6op$f: function () {
        },
        strong_26t6op$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.strong_26t6op$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.STRONG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        sub_hxt1kw$f: function () {
        },
        sub_hxt1kw$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sub_hxt1kw$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SUB(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        sup_o1kdki$f: function () {
        },
        sup_o1kdki$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.sup_o1kdki$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        svg_r8wpus$f: function () {
        },
        svg_r8wpus$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.svg_r8wpus$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SVG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        svg_s7eaef$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        svg_s7eaef$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SVG(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), _.kotlinx.html.svg_s7eaef$f(content));
        },
        textArea_pks8yc$f: function () {
        },
        textArea_pks8yc$: function ($receiver, rows, cols, wrap, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.textArea_pks8yc$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver.consumer), block);
        },
        textArea_qk7sjj$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        textArea_qk7sjj$: function ($receiver, rows, cols, wrap, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (wrap === void 0)
            wrap = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', wrap != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(wrap) : null, 'class', classes]), $receiver.consumer), _.kotlinx.html.textArea_qk7sjj$f(content));
        },
        hardTextArea_1ogp60$f: function () {
        },
        hardTextArea_1ogp60$: function ($receiver, rows, cols, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.hardTextArea_1ogp60$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.hard.realValue, 'class', classes]), $receiver.consumer), block);
        },
        softTextArea_1ogp60$f: function () {
        },
        softTextArea_1ogp60$: function ($receiver, rows, cols, classes, block) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.softTextArea_1ogp60$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.soft.realValue, 'class', classes]), $receiver.consumer), block);
        },
        hardTextArea_qyl0jn$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        hardTextArea_qyl0jn$: function ($receiver, rows, cols, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.hard.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.hardTextArea_qyl0jn$f(content));
        },
        softTextArea_qyl0jn$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        softTextArea_qyl0jn$: function ($receiver, rows, cols, classes, content) {
          if (rows === void 0)
            rows = null;
          if (cols === void 0)
            cols = null;
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TEXTAREA(_.kotlinx.html.attributesMapOf_kand9s$(['rows', rows, 'cols', cols, 'wrap', _.kotlinx.html.TextAreaWrap.soft.realValue, 'class', classes]), $receiver.consumer), _.kotlinx.html.softTextArea_qyl0jn$f(content));
        },
        time_rpepdd$f: function () {
        },
        time_rpepdd$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.time_rpepdd$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TIME(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        var__b4nqre$f: function () {
        },
        var__b4nqre$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.var__b4nqre$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.VAR_(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        video_3lsp39$f: function () {
        },
        video_3lsp39$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.video_3lsp39$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.VIDEO(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        article_k9r9v3$f: function () {
        },
        article_k9r9v3$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.article_k9r9v3$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.ARTICLE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        aside_fhvofl$f: function () {
        },
        aside_fhvofl$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.aside_fhvofl$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.ASIDE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        nav_i592cc$f: function () {
        },
        nav_i592cc$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.nav_i592cc$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.NAV(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        section_7s5g2q$f: function () {
        },
        section_7s5g2q$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.section_7s5g2q$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SECTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        A: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'a', consumer, initialAttributes, null, true, false);
          this.$consumer_9cydyp$ = consumer;
        }, /** @lends _.kotlinx.html.A.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9cydyp$;
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'href', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'target', newValue);
            }
          },
          ping: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ping');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ping', newValue);
            }
          },
          rel: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'rel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'rel', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        ABBR: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'abbr', consumer, initialAttributes, null, true, false);
          this.$consumer_nnbvlz$ = consumer;
        }, /** @lends _.kotlinx.html.ABBR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nnbvlz$;
            }
          }
        }),
        ADDRESS: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'address', consumer, initialAttributes, null, false, false);
          this.$consumer_vyvh44$ = consumer;
        }, /** @lends _.kotlinx.html.ADDRESS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_vyvh44$;
            }
          }
        }),
        AREA: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'area', consumer, initialAttributes, null, true, true);
          this.$consumer_nwdn8r$ = consumer;
        }, /** @lends _.kotlinx.html.AREA.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nwdn8r$;
            }
          },
          coords: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'coords');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'coords', newValue);
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'href', newValue);
            }
          },
          alt: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'alt');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'alt', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'target', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'media', newValue);
            }
          },
          rel: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'rel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'rel', newValue);
            }
          },
          ping: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ping');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ping', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        ARTICLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'article', consumer, initialAttributes, null, false, false);
          this.$consumer_kzcnja$ = consumer;
        }, /** @lends _.kotlinx.html.ARTICLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_kzcnja$;
            }
          }
        }),
        ASIDE: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'aside', consumer, initialAttributes, null, false, false);
          this.$consumer_fgcwmg$ = consumer;
        }, /** @lends _.kotlinx.html.ASIDE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_fgcwmg$;
            }
          }
        }),
        AUDIO: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'audio', consumer, initialAttributes, null, false, false);
          this.$consumer_3txo1y$ = consumer;
        }, /** @lends _.kotlinx.html.AUDIO.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_3txo1y$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          autoBuffer: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autobuffer');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autobuffer', newValue);
            }
          },
          autoPlay: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autoplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autoplay', newValue);
            }
          },
          loop: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'loop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'loop', newValue);
            }
          },
          controls: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'controls');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'controls', newValue);
            }
          }
        }),
        source_6fl56e$f: function () {
        },
        source_6fl56e$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.source_6fl56e$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SOURCE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        B: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'b', consumer, initialAttributes, null, true, false);
          this.$consumer_clycr6$ = consumer;
        }, /** @lends _.kotlinx.html.B.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_clycr6$;
            }
          }
        }),
        BASE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'base', consumer, initialAttributes, null, true, true);
          this.$consumer_k44xjt$ = consumer;
        }, /** @lends _.kotlinx.html.BASE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_k44xjt$;
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'href', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'target', newValue);
            }
          }
        }),
        BDI: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'bdi', consumer, initialAttributes, null, true, false);
          this.$consumer_shs1op$ = consumer;
        }, /** @lends _.kotlinx.html.BDI.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_shs1op$;
            }
          }
        }),
        BDO: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'bdo', consumer, initialAttributes, null, true, false);
          this.$consumer_8zs8xv$ = consumer;
        }, /** @lends _.kotlinx.html.BDO.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8zs8xv$;
            }
          }
        }),
        BLOCKQUOTE: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'blockquote', consumer, initialAttributes, null, false, false);
          this.$consumer_ca9c2f$ = consumer;
        }, /** @lends _.kotlinx.html.BLOCKQUOTE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ca9c2f$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'cite', newValue);
            }
          }
        }),
        BODY: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'body', consumer, initialAttributes, null, false, false);
          this.$consumer_ze4oza$ = consumer;
        }, /** @lends _.kotlinx.html.BODY.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ze4oza$;
            }
          },
          onAfterprint: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onafterprint');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onafterprint', newValue);
            }
          },
          onBeforeprint: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onbeforeprint');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onbeforeprint', newValue);
            }
          },
          onBeforeunLoad: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onbeforeunload');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onbeforeunload', newValue);
            }
          },
          onHashChange: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onhashchange');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onhashchange', newValue);
            }
          },
          onMessage: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onmessage');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onmessage', newValue);
            }
          },
          onOffline: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onoffline');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onoffline', newValue);
            }
          },
          onOnline: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'ononline');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'ononline', newValue);
            }
          },
          onPopstate: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onpopstate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onpopstate', newValue);
            }
          },
          onRedo: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onredo');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onredo', newValue);
            }
          },
          onResize: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onresize');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onresize', newValue);
            }
          },
          onStorage: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onstorage');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onstorage', newValue);
            }
          },
          onUndo: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onundo');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onundo', newValue);
            }
          },
          onUnLoad: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'onunload');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'onunload', newValue);
            }
          }
        }),
        BR: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'br', consumer, initialAttributes, null, true, true);
          this.$consumer_wgz05k$ = consumer;
        }, /** @lends _.kotlinx.html.BR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_wgz05k$;
            }
          }
        }),
        BUTTON: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'button', consumer, initialAttributes, null, true, false);
          this.$consumer_4939pi$ = consumer;
        }, /** @lends _.kotlinx.html.BUTTON.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_4939pi$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          formAction: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'formaction');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'formaction', newValue);
            }
          },
          formEncType: {
            get: function () {
              return _.kotlinx.html.attributeButtonFormEncTypeEnumButtonFormEncTypeValues.get_txhc1s$(this, 'formenctype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeButtonFormEncTypeEnumButtonFormEncTypeValues.set_lamm2d$(this, 'formenctype', newValue);
            }
          },
          formMethod: {
            get: function () {
              return _.kotlinx.html.attributeButtonFormMethodEnumButtonFormMethodValues.get_txhc1s$(this, 'formmethod');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeButtonFormMethodEnumButtonFormMethodValues.set_lamm2d$(this, 'formmethod', newValue);
            }
          },
          formNovalidate: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'formnovalidate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'formnovalidate', newValue);
            }
          },
          formTarget: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'formtarget');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'formtarget', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'value', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeButtonTypeEnumButtonTypeValues.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeButtonTypeEnumButtonTypeValues.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        CANVAS: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'canvas', consumer, initialAttributes, null, false, false);
          this.$consumer_9olke8$ = consumer;
        }, /** @lends _.kotlinx.html.CANVAS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9olke8$;
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'width', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'height', newValue);
            }
          }
        }),
        CAPTION: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'caption', consumer, initialAttributes, null, false, false);
          this.$consumer_izu906$ = consumer;
        }, /** @lends _.kotlinx.html.CAPTION.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_izu906$;
            }
          }
        }),
        CITE: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'cite', consumer, initialAttributes, null, true, false);
          this.$consumer_xf93kx$ = consumer;
        }, /** @lends _.kotlinx.html.CITE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xf93kx$;
            }
          }
        }),
        CODE: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'code', consumer, initialAttributes, null, true, false);
          this.$consumer_oibbm3$ = consumer;
        }, /** @lends _.kotlinx.html.CODE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_oibbm3$;
            }
          }
        }),
        COL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'col', consumer, initialAttributes, null, false, true);
          this.$consumer_lwcvw0$ = consumer;
        }, /** @lends _.kotlinx.html.COL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_lwcvw0$;
            }
          },
          span: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'span');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'span', newValue);
            }
          }
        }),
        COLGROUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'colgroup', consumer, initialAttributes, null, false, false);
          this.$consumer_mpkqbr$ = consumer;
        }, /** @lends _.kotlinx.html.COLGROUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_mpkqbr$;
            }
          },
          span: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'span');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'span', newValue);
            }
          }
        }),
        col_lmzrjg$f: function () {
        },
        col_lmzrjg$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.col_lmzrjg$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COL(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        COMMAND: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'command', consumer, initialAttributes, null, true, true);
          this.$consumer_823jmt$ = consumer;
        }, /** @lends _.kotlinx.html.COMMAND.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_823jmt$;
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeCommandTypeEnumCommandTypeValues.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeCommandTypeEnumCommandTypeValues.set_lamm2d$(this, 'type', newValue);
            }
          },
          label: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'label');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'label', newValue);
            }
          },
          icon: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'icon');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'icon', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          checked: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'checked');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'checked', newValue);
            }
          },
          radioGroup: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'radiogroup');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'radiogroup', newValue);
            }
          }
        }),
        DATALIST: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'datalist', consumer, initialAttributes, null, true, false);
          this.$consumer_421si8$ = consumer;
        }, /** @lends _.kotlinx.html.DATALIST.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_421si8$;
            }
          }
        }),
        option_cstzp6$f: function () {
        },
        option_cstzp6$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option_cstzp6$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        option_7pbqmi$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        option_7pbqmi$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), _.kotlinx.html.option_7pbqmi$f(content));
        },
        DD: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dd', consumer, initialAttributes, null, false, false);
          this.$consumer_ij8q54$ = consumer;
        }, /** @lends _.kotlinx.html.DD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ij8q54$;
            }
          }
        }),
        DEL: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'del', consumer, initialAttributes, null, false, false);
          this.$consumer_6pddi3$ = consumer;
        }, /** @lends _.kotlinx.html.DEL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_6pddi3$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'cite', newValue);
            }
          },
          dateTime: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'datetime');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'datetime', newValue);
            }
          }
        }),
        DETAILS: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'details', consumer, initialAttributes, null, false, false);
          this.$consumer_95b1f6$ = consumer;
        }, /** @lends _.kotlinx.html.DETAILS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_95b1f6$;
            }
          },
          open: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'open');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'open', newValue);
            }
          }
        }),
        legEnd_od6wog$f: function () {
        },
        legEnd_od6wog$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd_od6wog$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LEGEND(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        DFN: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dfn', consumer, initialAttributes, null, true, false);
          this.$consumer_s3vuck$ = consumer;
        }, /** @lends _.kotlinx.html.DFN.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_s3vuck$;
            }
          }
        }),
        DIALOG: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dialog', consumer, initialAttributes, null, false, false);
          this.$consumer_vt3tdc$ = consumer;
        }, /** @lends _.kotlinx.html.DIALOG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_vt3tdc$;
            }
          }
        }),
        DIV: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'div', consumer, initialAttributes, null, false, false);
          this.$consumer_g0kjmp$ = consumer;
        }, /** @lends _.kotlinx.html.DIV.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_g0kjmp$;
            }
          }
        }),
        DL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dl', consumer, initialAttributes, null, false, false);
          this.$consumer_7gr06o$ = consumer;
        }, /** @lends _.kotlinx.html.DL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_7gr06o$;
            }
          }
        }),
        dd_56aow5$f: function () {
        },
        dd_56aow5$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dd_56aow5$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        dt_m3gk8b$f: function () {
        },
        dt_m3gk8b$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.dt_m3gk8b$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.DT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        DT: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'dt', consumer, initialAttributes, null, false, false);
          this.$consumer_xgqqig$ = consumer;
        }, /** @lends _.kotlinx.html.DT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xgqqig$;
            }
          }
        }),
        EM: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'em', consumer, initialAttributes, null, true, false);
          this.$consumer_uli6gg$ = consumer;
        }, /** @lends _.kotlinx.html.EM.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_uli6gg$;
            }
          }
        }),
        EMBED: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'embed', consumer, initialAttributes, null, true, true);
          this.$consumer_9u1qon$ = consumer;
        }, /** @lends _.kotlinx.html.EMBED.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9u1qon$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'width', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'type', newValue);
            }
          }
        }),
        FIELDSET: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'fieldset', consumer, initialAttributes, null, false, false);
          this.$consumer_8gh1e8$ = consumer;
        }, /** @lends _.kotlinx.html.FIELDSET.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8gh1e8$;
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        legEnd_lr0cdu$f: function () {
        },
        legEnd_lr0cdu$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd_lr0cdu$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LEGEND(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        FIGCAPTION: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'figcaption', consumer, initialAttributes, null, false, false);
          this.$consumer_ruksdy$ = consumer;
        }, /** @lends _.kotlinx.html.FIGCAPTION.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ruksdy$;
            }
          }
        }),
        FIGURE: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'figure', consumer, initialAttributes, null, false, false);
          this.$consumer_3gw230$ = consumer;
        }, /** @lends _.kotlinx.html.FIGURE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_3gw230$;
            }
          }
        }),
        legEnd_7ugh2u$f: function () {
        },
        legEnd_7ugh2u$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.legEnd_7ugh2u$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LEGEND(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        figcaption_9ky6ff$f: function () {
        },
        figcaption_9ky6ff$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.figcaption_9ky6ff$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.FIGCAPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        FOOTER: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'footer', consumer, initialAttributes, null, false, false);
          this.$consumer_ymh6xv$ = consumer;
        }, /** @lends _.kotlinx.html.FOOTER.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ymh6xv$;
            }
          }
        }),
        FORM: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'form', consumer, initialAttributes, null, false, false);
          this.$consumer_5x2o30$ = consumer;
        }, /** @lends _.kotlinx.html.FORM.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_5x2o30$;
            }
          },
          acceptCharset: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'accept-charset');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'accept-charset', newValue);
            }
          },
          action: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'action');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'action', newValue);
            }
          },
          autoComplete: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBooleanOnOff.get_txhc1s$(this, 'autocomplete');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBooleanOnOff.set_lamm2d$(this, 'autocomplete', newValue);
            }
          },
          encType: {
            get: function () {
              return _.kotlinx.html.attributeFormEncTypeEnumFormEncTypeValues.get_txhc1s$(this, 'enctype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeFormEncTypeEnumFormEncTypeValues.set_lamm2d$(this, 'enctype', newValue);
            }
          },
          method: {
            get: function () {
              return _.kotlinx.html.attributeFormMethodEnumFormMethodValues.get_txhc1s$(this, 'method');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeFormMethodEnumFormMethodValues.set_lamm2d$(this, 'method', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          novalidate: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'novalidate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'novalidate', newValue);
            }
          },
          target: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'target');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'target', newValue);
            }
          }
        }),
        H1: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h1', consumer, initialAttributes, null, false, false);
          this.$consumer_wfwiz3$ = consumer;
        }, /** @lends _.kotlinx.html.H1.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_wfwiz3$;
            }
          }
        }),
        H2: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h2', consumer, initialAttributes, null, false, false);
          this.$consumer_t6wk6m$ = consumer;
        }, /** @lends _.kotlinx.html.H2.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_t6wk6m$;
            }
          }
        }),
        H3: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h3', consumer, initialAttributes, null, false, false);
          this.$consumer_pxwle5$ = consumer;
        }, /** @lends _.kotlinx.html.H3.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_pxwle5$;
            }
          }
        }),
        H4: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h4', consumer, initialAttributes, null, false, false);
          this.$consumer_mowmlo$ = consumer;
        }, /** @lends _.kotlinx.html.H4.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_mowmlo$;
            }
          }
        }),
        H5: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h5', consumer, initialAttributes, null, false, false);
          this.$consumer_jfwnt7$ = consumer;
        }, /** @lends _.kotlinx.html.H5.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_jfwnt7$;
            }
          }
        }),
        H6: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'h6', consumer, initialAttributes, null, false, false);
          this.$consumer_g6wp0q$ = consumer;
        }, /** @lends _.kotlinx.html.H6.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_g6wp0q$;
            }
          }
        }),
        HEAD: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlHeadTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'head', consumer, initialAttributes, null, false, false);
          this.$consumer_9ttdk$ = consumer;
        }, /** @lends _.kotlinx.html.HEAD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9ttdk$;
            }
          }
        }),
        HEADER: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'header', consumer, initialAttributes, null, false, false);
          this.$consumer_9fofmd$ = consumer;
        }, /** @lends _.kotlinx.html.HEADER.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9fofmd$;
            }
          }
        }),
        HGROUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'hgroup', consumer, initialAttributes, null, false, false);
          this.$consumer_e38cyp$ = consumer;
        }, /** @lends _.kotlinx.html.HGROUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_e38cyp$;
            }
          }
        }),
        h1_m6wmbl$f: function () {
        },
        h1_m6wmbl$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h1_m6wmbl$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H1(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h2_2qng3k$f: function () {
        },
        h2_2qng3k$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h2_2qng3k$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H2(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h3_ro7iip$f: function () {
        },
        h3_ro7iip$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h3_ro7iip$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H3(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h4_ifch1a$f: function () {
        },
        h4_ifch1a$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h4_ifch1a$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H4(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h5_6i7ldv$f: function () {
        },
        h5_6i7ldv$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h5_6i7ldv$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H5(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        h6_vfrnt0$f: function () {
        },
        h6_vfrnt0$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.h6_vfrnt0$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.H6(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        HR: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'hr', consumer, initialAttributes, null, false, true);
          this.$consumer_3ryb5e$ = consumer;
        }, /** @lends _.kotlinx.html.HR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_3ryb5e$;
            }
          }
        }),
        HTML: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'html', consumer, initialAttributes, null, false, false);
          this.$consumer_4tvvd9$ = consumer;
        }, /** @lends _.kotlinx.html.HTML.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_4tvvd9$;
            }
          },
          manifest: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'manifest');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'manifest', newValue);
            }
          }
        }),
        body_9e9i90$f: function () {
        },
        body_9e9i90$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.body_9e9i90$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.BODY(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        head_6ldzt8$f: function () {
        },
        head_6ldzt8$: function ($receiver, block) {
          if (block === void 0)
            block = _.kotlinx.html.head_6ldzt8$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.HEAD(_.kotlinx.html.emptyMap, $receiver.consumer), block);
        },
        I: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'i', consumer, initialAttributes, null, true, false);
          this.$consumer_zcy4ah$ = consumer;
        }, /** @lends _.kotlinx.html.I.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_zcy4ah$;
            }
          }
        }),
        IFRAME: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'iframe', consumer, initialAttributes, null, true, false);
          this.$consumer_6v99ys$ = consumer;
        }, /** @lends _.kotlinx.html.IFRAME.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_6v99ys$;
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'width', newValue);
            }
          },
          sandbox: {
            get: function () {
              return _.kotlinx.html.attributeIframeSandboxEnumIframeSandboxValues.get_txhc1s$(this, 'sandbox');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeIframeSandboxEnumIframeSandboxValues.set_lamm2d$(this, 'sandbox', newValue);
            }
          },
          seamless: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'seamless');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'seamless', newValue);
            }
          }
        }),
        IMG: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'img', consumer, initialAttributes, null, true, true);
          this.$consumer_4fn5n7$ = consumer;
        }, /** @lends _.kotlinx.html.IMG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_4fn5n7$;
            }
          },
          alt: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'alt');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'alt', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'width', newValue);
            }
          },
          usemap: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'usemap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'usemap', newValue);
            }
          },
          ismap: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'ismap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'ismap', newValue);
            }
          }
        }),
        INPUT: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'input', consumer, initialAttributes, null, true, true);
          this.$consumer_suma2i$ = consumer;
        }, /** @lends _.kotlinx.html.INPUT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_suma2i$;
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeInputTypeEnumInputTypeValues.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeInputTypeEnumInputTypeValues.set_lamm2d$(this, 'type', newValue);
            }
          },
          accept: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'accept');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'accept', newValue);
            }
          },
          alt: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'alt');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'alt', newValue);
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          autoComplete: {
            get: function () {
              return _.kotlinx.html.attributeBooleanBooleanOnOff.get_txhc1s$(this, 'autocomplete');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanBooleanOnOff.set_lamm2d$(this, 'autocomplete', newValue);
            }
          },
          checked: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'checked');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'checked', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          formAction: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'formaction');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'formaction', newValue);
            }
          },
          formEncType: {
            get: function () {
              return _.kotlinx.html.attributeInputFormEncTypeEnumInputFormEncTypeValues.get_txhc1s$(this, 'formenctype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeInputFormEncTypeEnumInputFormEncTypeValues.set_lamm2d$(this, 'formenctype', newValue);
            }
          },
          formMethod: {
            get: function () {
              return _.kotlinx.html.attributeInputFormMethodEnumInputFormMethodValues.get_txhc1s$(this, 'formmethod');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeInputFormMethodEnumInputFormMethodValues.set_lamm2d$(this, 'formmethod', newValue);
            }
          },
          formNovalidate: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'formnovalidate');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'formnovalidate', newValue);
            }
          },
          formTarget: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'formtarget');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'formtarget', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'height', newValue);
            }
          },
          list: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'list');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'list', newValue);
            }
          },
          max: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'max');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'max', newValue);
            }
          },
          maxLength: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'maxlength');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'maxlength', newValue);
            }
          },
          min: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'min');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'min', newValue);
            }
          },
          multiple: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'multiple');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'multiple', newValue);
            }
          },
          pattern: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'pattern');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'pattern', newValue);
            }
          },
          placeholder: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'placeholder');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'placeholder', newValue);
            }
          },
          readonly: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'readonly');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'readonly', newValue);
            }
          },
          required: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'required');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'required', newValue);
            }
          },
          size: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'size');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'size', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          step: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'step');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'step', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'width', newValue);
            }
          },
          files: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'files');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'files', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'value', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        INS: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ins', consumer, initialAttributes, null, false, false);
          this.$consumer_24dlpa$ = consumer;
        }, /** @lends _.kotlinx.html.INS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_24dlpa$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'cite', newValue);
            }
          },
          dateTime: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'datetime');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'datetime', newValue);
            }
          }
        }),
        KBD: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'kbd', consumer, initialAttributes, null, true, false);
          this.$consumer_io27gd$ = consumer;
        }, /** @lends _.kotlinx.html.KBD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_io27gd$;
            }
          }
        }),
        KEYGEN: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'keygen', consumer, initialAttributes, null, true, true);
          this.$consumer_vovrmh$ = consumer;
        }, /** @lends _.kotlinx.html.KEYGEN.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_vovrmh$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          challenge: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'challenge');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'challenge', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          keyType: {
            get: function () {
              return _.kotlinx.html.attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues.get_txhc1s$(this, 'keytype');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues.set_lamm2d$(this, 'keytype', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        LABEL: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'label', consumer, initialAttributes, null, true, false);
          this.$consumer_ggpdus$ = consumer;
        }, /** @lends _.kotlinx.html.LABEL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ggpdus$;
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          for_: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'for');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'for', newValue);
            }
          }
        }),
        LEGEND: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'legend', consumer, initialAttributes, null, true, false);
          this.$consumer_gl7u6t$ = consumer;
        }, /** @lends _.kotlinx.html.LEGEND.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_gl7u6t$;
            }
          }
        }),
        get_asFlowContent_37l0gb$: {value: function ($receiver) {
          return $receiver;
        }},
        get_asPhrasingContent_37l0gb$: {value: function ($receiver) {
          return $receiver;
        }},
        LI: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'li', consumer, initialAttributes, null, false, false);
          this.$consumer_mda685$ = consumer;
        }, /** @lends _.kotlinx.html.LI.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_mda685$;
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'value', newValue);
            }
          }
        }),
        LINK: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'link', consumer, initialAttributes, null, false, true);
          this.$consumer_6i0t9a$ = consumer;
        }, /** @lends _.kotlinx.html.LINK.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_6i0t9a$;
            }
          },
          href: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'href');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'href', newValue);
            }
          },
          rel: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'rel');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'rel', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'media', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'type', newValue);
            }
          },
          sizes: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'sizes');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'sizes', newValue);
            }
          }
        }),
        MAP: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'map', consumer, initialAttributes, null, true, false);
          this.$consumer_nohioc$ = consumer;
        }, /** @lends _.kotlinx.html.MAP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nohioc$;
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        get_asFlowContent_6sczia$: {value: function ($receiver) {
          return $receiver;
        }},
        get_asPhrasingContent_6sczia$: {value: function ($receiver) {
          return $receiver;
        }},
        MARK: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'mark', consumer, initialAttributes, null, true, false);
          this.$consumer_7rb4x7$ = consumer;
        }, /** @lends _.kotlinx.html.MARK.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_7rb4x7$;
            }
          }
        }),
        MATH: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'math', consumer, initialAttributes, null, false, false);
          this.$consumer_t3pa6o$ = consumer;
        }, /** @lends _.kotlinx.html.MATH.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_t3pa6o$;
            }
          }
        }),
        MATHML: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'mathml', consumer, initialAttributes, null, false, false);
          this.$consumer_b65ejz$ = consumer;
        }, /** @lends _.kotlinx.html.MATHML.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_b65ejz$;
            }
          }
        }),
        META: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'meta', consumer, initialAttributes, null, false, true);
          this.$consumer_an08st$ = consumer;
        }, /** @lends _.kotlinx.html.META.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_an08st$;
            }
          },
          httpEquiv: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'http-equiv');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'http-equiv', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          content: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'content');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'content', newValue);
            }
          },
          charset: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'charset');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'charset', newValue);
            }
          }
        }),
        METER: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'meter', consumer, initialAttributes, null, true, false);
          this.$consumer_pb37fd$ = consumer;
        }, /** @lends _.kotlinx.html.METER.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_pb37fd$;
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'value', newValue);
            }
          },
          min: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'min');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'min', newValue);
            }
          },
          max: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'max');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'max', newValue);
            }
          },
          low: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'low');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'low', newValue);
            }
          },
          high: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'high');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'high', newValue);
            }
          },
          optimum: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'optimum');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'optimum', newValue);
            }
          }
        }),
        NAV: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'nav', consumer, initialAttributes, null, false, false);
          this.$consumer_tzhff1$ = consumer;
        }, /** @lends _.kotlinx.html.NAV.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_tzhff1$;
            }
          }
        }),
        NOSCRIPT: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'noscript', consumer, initialAttributes, null, false, false);
          this.$consumer_e0fbsk$ = consumer;
        }, /** @lends _.kotlinx.html.NOSCRIPT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_e0fbsk$;
            }
          }
        }),
        OBJECT_: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'object', consumer, initialAttributes, null, true, false);
          this.$consumer_o0el0w$ = consumer;
        }, /** @lends _.kotlinx.html.OBJECT_.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_o0el0w$;
            }
          },
          data: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'data');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'data', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'type', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'height', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'width', newValue);
            }
          },
          usemap: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'usemap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'usemap', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          classId: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'classid');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'classid', newValue);
            }
          }
        }),
        param_uibfmk$f: function () {
        },
        param_uibfmk$: function ($receiver, name, value, block) {
          if (name === void 0)
            name = null;
          if (value === void 0)
            value = null;
          if (block === void 0)
            block = _.kotlinx.html.param_uibfmk$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.PARAM(_.kotlinx.html.attributesMapOf_kand9s$(['name', name, 'value', value]), $receiver.consumer), block);
        },
        OL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ol', consumer, initialAttributes, null, false, false);
          this.$consumer_ksdbq3$ = consumer;
        }, /** @lends _.kotlinx.html.OL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ksdbq3$;
            }
          },
          start: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'start');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'start', newValue);
            }
          },
          reversed: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'reversed');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'reversed', newValue);
            }
          }
        }),
        li_obmgel$f: function () {
        },
        li_obmgel$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.li_obmgel$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LI(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        OPTGROUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'optgroup', consumer, initialAttributes, null, true, false);
          this.$consumer_aoyfu4$ = consumer;
        }, /** @lends _.kotlinx.html.OPTGROUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_aoyfu4$;
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          label: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'label');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'label', newValue);
            }
          }
        }),
        option_5p6i3a$f: function () {
        },
        option_5p6i3a$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option_5p6i3a$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        option_6trbxi$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        option_6trbxi$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), _.kotlinx.html.option_6trbxi$f(content));
        },
        OPTION: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'option', consumer, initialAttributes, null, true, false);
          this.$consumer_8gmcjh$ = consumer;
        }, /** @lends _.kotlinx.html.OPTION.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8gmcjh$;
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          selected: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'selected');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'selected', newValue);
            }
          },
          label: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'label');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'label', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'value', newValue);
            }
          }
        }),
        OUTPUT: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'output', consumer, initialAttributes, null, true, false);
          this.$consumer_k1fy89$ = consumer;
        }, /** @lends _.kotlinx.html.OUTPUT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_k1fy89$;
            }
          },
          for_: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'for');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'for', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          }
        }),
        P: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'p', consumer, initialAttributes, null, false, false);
          this.$consumer_cx665c$ = consumer;
        }, /** @lends _.kotlinx.html.P.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_cx665c$;
            }
          }
        }),
        PARAM: Kotlin.createClass(function () {
          return [_.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'param', consumer, initialAttributes, null, true, true);
          this.$consumer_su9r8j$ = consumer;
        }, /** @lends _.kotlinx.html.PARAM.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_su9r8j$;
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'value', newValue);
            }
          }
        }),
        PRE: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'pre', consumer, initialAttributes, null, false, false);
          this.$consumer_ah977x$ = consumer;
        }, /** @lends _.kotlinx.html.PRE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ah977x$;
            }
          }
        }),
        PROGRESS: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'progress', consumer, initialAttributes, null, true, false);
          this.$consumer_93pr5h$ = consumer;
        }, /** @lends _.kotlinx.html.PROGRESS.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_93pr5h$;
            }
          },
          value: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'value');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'value', newValue);
            }
          },
          max: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'max');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'max', newValue);
            }
          }
        }),
        Q: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'q', consumer, initialAttributes, null, true, false);
          this.$consumer_9o67cv$ = consumer;
        }, /** @lends _.kotlinx.html.Q.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_9o67cv$;
            }
          },
          cite: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'cite');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'cite', newValue);
            }
          }
        }),
        RP: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'rp', consumer, initialAttributes, null, true, false);
          this.$consumer_ac373a$ = consumer;
        }, /** @lends _.kotlinx.html.RP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_ac373a$;
            }
          }
        }),
        RT: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'rt', consumer, initialAttributes, null, true, false);
          this.$consumer_nc3296$ = consumer;
        }, /** @lends _.kotlinx.html.RT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_nc3296$;
            }
          }
        }),
        RUBY: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ruby', consumer, initialAttributes, null, true, false);
          this.$consumer_u00bwe$ = consumer;
        }, /** @lends _.kotlinx.html.RUBY.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_u00bwe$;
            }
          }
        }),
        rt_jesa0l$f: function () {
        },
        rt_jesa0l$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rt_jesa0l$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.RT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        rp_9abxov$f: function () {
        },
        rp_9abxov$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rp_9abxov$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.RP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        SAMP: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'samp', consumer, initialAttributes, null, true, false);
          this.$consumer_v2q5ix$ = consumer;
        }, /** @lends _.kotlinx.html.SAMP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_v2q5ix$;
            }
          }
        }),
        SCRIPT: Kotlin.createClass(function () {
          return [_.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'script', consumer, initialAttributes, null, false, false);
          this.$consumer_idus8d$ = consumer;
        }, /** @lends _.kotlinx.html.SCRIPT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_idus8d$;
            }
          },
          charset: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'charset');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'charset', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeScriptTypeEnumScriptTypeValues.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeScriptTypeEnumScriptTypeValues.set_lamm2d$(this, 'type', newValue);
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          defer: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'defer');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'defer', newValue);
            }
          },
          async: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'async');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'async', newValue);
            }
          }
        }),
        SECTION: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'section', consumer, initialAttributes, null, false, false);
          this.$consumer_gp3ygl$ = consumer;
        }, /** @lends _.kotlinx.html.SECTION.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_gp3ygl$;
            }
          }
        }),
        SELECT: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'select', consumer, initialAttributes, null, true, false);
          this.$consumer_hlyftw$ = consumer;
        }, /** @lends _.kotlinx.html.SELECT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_hlyftw$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          multiple: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'multiple');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'multiple', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          size: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'size');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'size', newValue);
            }
          },
          required: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'required');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'required', newValue);
            }
          }
        }),
        option_fz4wcm$f: function () {
        },
        option_fz4wcm$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.option_fz4wcm$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        option_tmqlnu$f: function (closure$content) {
          return function () {
            this.unaryPlus_pdl1w0$(closure$content);
          };
        },
        option_tmqlnu$: function ($receiver, classes, content) {
          if (classes === void 0)
            classes = null;
          if (content === void 0)
            content = '';
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), _.kotlinx.html.option_tmqlnu$f(content));
        },
        optGroup_4g05bf$f: function () {
        },
        optGroup_4g05bf$: function ($receiver, label, classes, block) {
          if (label === void 0)
            label = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.optGroup_4g05bf$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.OPTGROUP(_.kotlinx.html.attributesMapOf_kand9s$(['label', label, 'class', classes]), $receiver.consumer), block);
        },
        SMALL: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'small', consumer, initialAttributes, null, true, false);
          this.$consumer_brt04p$ = consumer;
        }, /** @lends _.kotlinx.html.SMALL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_brt04p$;
            }
          }
        }),
        SOURCE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'source', consumer, initialAttributes, null, true, true);
          this.$consumer_2n3j19$ = consumer;
        }, /** @lends _.kotlinx.html.SOURCE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_2n3j19$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'type', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'media', newValue);
            }
          }
        }),
        SPAN: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'span', consumer, initialAttributes, null, true, false);
          this.$consumer_8wspn2$ = consumer;
        }, /** @lends _.kotlinx.html.SPAN.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8wspn2$;
            }
          }
        }),
        STRONG: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'strong', consumer, initialAttributes, null, true, false);
          this.$consumer_999l9b$ = consumer;
        }, /** @lends _.kotlinx.html.STRONG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_999l9b$;
            }
          }
        }),
        STYLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'style', consumer, initialAttributes, null, false, false);
          this.$consumer_j8n81t$ = consumer;
        }, /** @lends _.kotlinx.html.STYLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_j8n81t$;
            }
          },
          type: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'type');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'type', newValue);
            }
          },
          media: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'media');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'media', newValue);
            }
          },
          scoped: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'scoped');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'scoped', newValue);
            }
          }
        }),
        SUB: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'sub', consumer, initialAttributes, null, true, false);
          this.$consumer_8icij4$ = consumer;
        }, /** @lends _.kotlinx.html.SUB.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_8icij4$;
            }
          }
        }),
        SUP: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'sup', consumer, initialAttributes, null, true, false);
          this.$consumer_y1h1fm$ = consumer;
        }, /** @lends _.kotlinx.html.SUP.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_y1h1fm$;
            }
          }
        }),
        SVG: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'svg', consumer, initialAttributes, 'http://www.w3.org/2000/svg', false, false);
          this.$consumer_xklu0c$ = consumer;
        }, /** @lends _.kotlinx.html.SVG.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xklu0c$;
            }
          }
        }),
        TABLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'table', consumer, initialAttributes, null, false, false);
          this.$consumer_fhr9j6$ = consumer;
        }, /** @lends _.kotlinx.html.TABLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_fhr9j6$;
            }
          },
          summary: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'summary');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'summary', newValue);
            }
          }
        }),
        caption_oaz1m7$f: function () {
        },
        caption_oaz1m7$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.caption_oaz1m7$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.CAPTION(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        colGroup_k1d7nu$f: function () {
        },
        colGroup_k1d7nu$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colGroup_k1d7nu$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.COLGROUP(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        thead_6beg75$f: function () {
        },
        thead_6beg75$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.thead_6beg75$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.THEAD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        tfoot_xytnd9$f: function () {
        },
        tfoot_xytnd9$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tfoot_xytnd9$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TFOOT(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        tbody_xc8czl$f: function () {
        },
        tbody_xc8czl$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tbody_xc8czl$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TBODY(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        tr_wan8ln$f: function () {
        },
        tr_wan8ln$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_wan8ln$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        TBODY: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'tbody', consumer, initialAttributes, null, false, false);
          this.$consumer_1yanuu$ = consumer;
        }, /** @lends _.kotlinx.html.TBODY.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_1yanuu$;
            }
          }
        }),
        tr_gu14kt$f: function () {
        },
        tr_gu14kt$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_gu14kt$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        TD: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlBlockTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'td', consumer, initialAttributes, null, false, false);
          this.$consumer_urteoo$ = consumer;
        }, /** @lends _.kotlinx.html.TD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_urteoo$;
            }
          },
          headers: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'headers');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'headers', newValue);
            }
          },
          rowSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'rowspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'rowspan', newValue);
            }
          },
          colSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'colspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'colspan', newValue);
            }
          }
        }),
        TEXTAREA: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'textarea', consumer, initialAttributes, null, true, false);
          this.$consumer_wq10ki$ = consumer;
        }, /** @lends _.kotlinx.html.TEXTAREA.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_wq10ki$;
            }
          },
          autoFocus: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autofocus', newValue);
            }
          },
          disabled: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'disabled');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'disabled', newValue);
            }
          },
          form: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'form');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'form', newValue);
            }
          },
          maxLength: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'maxlength');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'maxlength', newValue);
            }
          },
          name: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'name');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'name', newValue);
            }
          },
          placeholder: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'placeholder');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'placeholder', newValue);
            }
          },
          readonly: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'readonly');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'readonly', newValue);
            }
          },
          required: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'required');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'required', newValue);
            }
          },
          rows: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'rows');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'rows', newValue);
            }
          },
          cols: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'cols');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'cols', newValue);
            }
          },
          wrap: {
            get: function () {
              return _.kotlinx.html.attributeTextAreaWrapEnumTextAreaWrapValues.get_txhc1s$(this, 'wrap');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeTextAreaWrapEnumTextAreaWrapValues.set_lamm2d$(this, 'wrap', newValue);
            }
          }
        }),
        TFOOT: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'tfoot', consumer, initialAttributes, null, false, false);
          this.$consumer_n52x66$ = consumer;
        }, /** @lends _.kotlinx.html.TFOOT.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_n52x66$;
            }
          }
        }),
        tr_1k1ijl$f: function () {
        },
        tr_1k1ijl$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_1k1ijl$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        TH: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'th', consumer, initialAttributes, null, false, false);
          this.$consumer_r9as4k$ = consumer;
        }, /** @lends _.kotlinx.html.TH.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_r9as4k$;
            }
          },
          headers: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'headers');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'headers', newValue);
            }
          },
          rowSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'rowspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'rowspan', newValue);
            }
          },
          colSpan: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'colspan');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'colspan', newValue);
            }
          },
          scope: {
            get: function () {
              return _.kotlinx.html.attributeThScopeEnumThScopeValues.get_txhc1s$(this, 'scope');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeThScopeEnumThScopeValues.set_lamm2d$(this, 'scope', newValue);
            }
          }
        }),
        THEAD: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'thead', consumer, initialAttributes, null, false, false);
          this.$consumer_xyiiik$ = consumer;
        }, /** @lends _.kotlinx.html.THEAD.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_xyiiik$;
            }
          }
        }),
        tr_7ncjcf$f: function () {
        },
        tr_7ncjcf$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.tr_7ncjcf$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TR(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        TIME: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'time', consumer, initialAttributes, null, true, false);
          this.$consumer_gwecvf$ = consumer;
        }, /** @lends _.kotlinx.html.TIME.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_gwecvf$;
            }
          },
          dateTime: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'datetime');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'datetime', newValue);
            }
          }
        }),
        TITLE: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'title', consumer, initialAttributes, null, false, false);
          this.$consumer_f3mjeg$ = consumer;
        }, /** @lends _.kotlinx.html.TITLE.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_f3mjeg$;
            }
          }
        }),
        TR: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'tr', consumer, initialAttributes, null, false, false);
          this.$consumer_58ovs6$ = consumer;
        }, /** @lends _.kotlinx.html.TR.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_58ovs6$;
            }
          }
        }),
        th_nak47n$f: function () {
        },
        th_nak47n$: function ($receiver, scope, classes, block) {
          if (scope === void 0)
            scope = null;
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.th_nak47n$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TH(_.kotlinx.html.attributesMapOf_kand9s$(['scope', scope != null ? _.kotlinx.html.attributes.enumEncode_m4whrx$(scope) : null, 'class', classes]), $receiver.consumer), block);
        },
        colTh_jbi4oz$f: function () {
        },
        colTh_jbi4oz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colTh_jbi4oz$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TH(_.kotlinx.html.attributesMapOf_kand9s$(['scope', _.kotlinx.html.ThScope.col.realValue, 'class', classes]), $receiver.consumer), block);
        },
        colGroupTh_jbi4oz$f: function () {
        },
        colGroupTh_jbi4oz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.colGroupTh_jbi4oz$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TH(_.kotlinx.html.attributesMapOf_kand9s$(['scope', _.kotlinx.html.ThScope.colGroup.realValue, 'class', classes]), $receiver.consumer), block);
        },
        rowTh_jbi4oz$f: function () {
        },
        rowTh_jbi4oz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rowTh_jbi4oz$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TH(_.kotlinx.html.attributesMapOf_kand9s$(['scope', _.kotlinx.html.ThScope.row.realValue, 'class', classes]), $receiver.consumer), block);
        },
        rowGroupTh_jbi4oz$f: function () {
        },
        rowGroupTh_jbi4oz$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.rowGroupTh_jbi4oz$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TH(_.kotlinx.html.attributesMapOf_kand9s$(['scope', _.kotlinx.html.ThScope.rowGroup.realValue, 'class', classes]), $receiver.consumer), block);
        },
        td_9dm30h$f: function () {
        },
        td_9dm30h$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.td_9dm30h$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.TD(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        UL: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'ul', consumer, initialAttributes, null, false, false);
          this.$consumer_fgjzkv$ = consumer;
        }, /** @lends _.kotlinx.html.UL.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_fgjzkv$;
            }
          }
        }),
        li_3m3ok3$f: function () {
        },
        li_3m3ok3$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.li_3m3ok3$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.LI(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        VAR_: Kotlin.createClass(function () {
          return [_.kotlinx.html.HtmlInlineTag, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'var', consumer, initialAttributes, null, true, false);
          this.$consumer_tvpxsw$ = consumer;
        }, /** @lends _.kotlinx.html.VAR_.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_tvpxsw$;
            }
          }
        }),
        VIDEO: Kotlin.createClass(function () {
          return [_.kotlinx.html.CommonAttributeGroupFacade, _.kotlinx.html.HTMLTag];
        }, function $fun(initialAttributes, consumer) {
          $fun.baseInitializer.call(this, 'video', consumer, initialAttributes, null, false, false);
          this.$consumer_2b7pjf$ = consumer;
        }, /** @lends _.kotlinx.html.VIDEO.prototype */ {
          consumer: {
            get: function () {
              return this.$consumer_2b7pjf$;
            }
          },
          src: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'src');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'src', newValue);
            }
          },
          autoBuffer: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autobuffer');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autobuffer', newValue);
            }
          },
          autoPlay: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'autoplay');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'autoplay', newValue);
            }
          },
          loop: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'loop');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'loop', newValue);
            }
          },
          controls: {
            get: function () {
              return _.kotlinx.html.attributeBooleanTicker.get_txhc1s$(this, 'controls');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeBooleanTicker.set_lamm2d$(this, 'controls', newValue);
            }
          },
          width: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'width');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'width', newValue);
            }
          },
          height: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'height');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'height', newValue);
            }
          },
          poster: {
            get: function () {
              return _.kotlinx.html.attributeStringString.get_txhc1s$(this, 'poster');
            },
            set: function (newValue) {
              _.kotlinx.html.attributeStringString.set_lamm2d$(this, 'poster', newValue);
            }
          }
        }),
        source_c3rdkr$f: function () {
        },
        source_c3rdkr$: function ($receiver, classes, block) {
          if (classes === void 0)
            classes = null;
          if (block === void 0)
            block = _.kotlinx.html.source_c3rdkr$f;
          _.kotlinx.html.visit_smtwu9$(new _.kotlinx.html.SOURCE(_.kotlinx.html.attributesMapOf_puj7f4$('class', classes), $receiver.consumer), block);
        },
        HTMLTag: Kotlin.createClass(function () {
          return [_.kotlinx.html.Tag];
        }, function (tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
          if (namespace === void 0)
            namespace = null;
          this.$tagName_puewq$ = tagName;
          this.$consumer_prlhpd$ = consumer;
          this.$namespace_pxnfw0$ = namespace;
          this.$inlineTag_buxm4q$ = inlineTag;
          this.$emptyTag_g0d3wo$ = emptyTag;
          this.$attributes_in4132$ = new _.kotlinx.html.impl.DelegatingMap(initialAttributes, this, _.kotlinx.html.HTMLTag.attributes$f(this));
        }, /** @lends _.kotlinx.html.HTMLTag.prototype */ {
          tagName: {
            get: function () {
              return this.$tagName_puewq$;
            }
          },
          consumer: {
            get: function () {
              return this.$consumer_prlhpd$;
            }
          },
          namespace: {
            get: function () {
              return this.$namespace_pxnfw0$;
            }
          },
          inlineTag: {
            get: function () {
              return this.$inlineTag_buxm4q$;
            }
          },
          emptyTag: {
            get: function () {
              return this.$emptyTag_g0d3wo$;
            }
          },
          attributes: {
            get: function () {
              return this.$attributes_in4132$;
            }
          },
          attributesEntries: {
            get: function () {
              return this.attributes.immutableEntries;
            }
          }
        }, /** @lends _.kotlinx.html.HTMLTag */ {
          attributes$f: function (this$HTMLTag) {
            return function () {
              return this$HTMLTag.consumer;
            };
          }
        }),
        styleLink_98vrb8$f: function (closure$url) {
          return function () {
            this.rel = _.kotlinx.html.LinkRel.stylesheet;
            this.type = _.kotlinx.html.LinkType.textCss;
            this.href = closure$url;
          };
        },
        styleLink_98vrb8$: function ($receiver, url) {
          _.kotlinx.html.link_1kztjj$($receiver, void 0, void 0, void 0, _.kotlinx.html.styleLink_98vrb8$f(url));
        },
        get_br_6s7ubk$: {value: function ($receiver) {
          var tag = new _.kotlinx.html.BR(Kotlin.kotlin.collections.emptyMap(), $receiver.consumer);
          $receiver.consumer.onTagStart_tkgjla$(tag);
          $receiver.consumer.onTagEnd_tkgjla$(tag);
        }},
        attributes: Kotlin.definePackage(null, /** @lends _.kotlinx.html.attributes */ {
          AttributeEncoder: Kotlin.createTrait(null, /** @lends _.kotlinx.html.attributes.AttributeEncoder.prototype */ {
            empty_l5rr1g$: function (attributeName, tag) {
              throw new Kotlin.IllegalStateException('Attribute ' + attributeName + ' is not yet defined for tag ' + tag.tagName);
            }
          }),
          Attribute: Kotlin.createClass(null, function (encoder) {
            this.encoder = encoder;
          }, /** @lends _.kotlinx.html.attributes.Attribute.prototype */ {
            get_txhc1s$: function (thisRef, attributeName) {
              var tmp$0, tmp$1;
              return (tmp$1 = (tmp$0 = thisRef.attributes.get_za3rmp$(attributeName)) != null ? this.encoder.decode_puj7f4$(attributeName, tmp$0) : null) != null ? tmp$1 : this.encoder.empty_l5rr1g$(attributeName, thisRef);
            },
            set_lamm2d$: function (thisRef, attributeName, value) {
              thisRef.attributes.put_wn2jw4$(attributeName, this.encoder.encode_bm4g0d$(attributeName, value));
            }
          }, /** @lends _.kotlinx.html.attributes.Attribute */ {
          }),
          StringEncoder: Kotlin.createObject(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, null, /** @lends _.kotlinx.html.attributes.StringEncoder.prototype */ {
            encode_bm4g0d$: function (attributeName, value) {
              return value;
            },
            decode_puj7f4$: function (attributeName, value) {
              return value;
            }
          }),
          StringAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun() {
            $fun.baseInitializer.call(this, _.kotlinx.html.attributes.StringEncoder);
          }),
          booleanEncode_1v8dcd$: function ($receiver) {
            return $receiver.toString();
          },
          BooleanEncoder: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, function (trueValue, falseValue) {
            if (trueValue === void 0)
              trueValue = 'true';
            if (falseValue === void 0)
              falseValue = 'false';
            this.trueValue = trueValue;
            this.falseValue = falseValue;
          }, /** @lends _.kotlinx.html.attributes.BooleanEncoder.prototype */ {
            encode_bm4g0d$: function (attributeName, value) {
              return value ? this.trueValue : this.falseValue;
            },
            decode_puj7f4$: function (attributeName, value) {
              if (Kotlin.equals(value, this.trueValue))
                return true;
              else if (Kotlin.equals(value, this.falseValue))
                return false;
              else
                throw new Kotlin.IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
            }
          }),
          BooleanAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun(trueValue, falseValue) {
            if (trueValue === void 0)
              trueValue = 'true';
            if (falseValue === void 0)
              falseValue = 'false';
            $fun.baseInitializer.call(this, new _.kotlinx.html.attributes.BooleanEncoder(trueValue, falseValue));
          }),
          tickerEncode_85gk45$: function ($receiver, attributeName) {
            return $receiver ? attributeName : '';
          },
          TickerEncoder: Kotlin.createObject(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, null, /** @lends _.kotlinx.html.attributes.TickerEncoder.prototype */ {
            encode_bm4g0d$: function (attributeName, value) {
              return _.kotlinx.html.attributes.tickerEncode_85gk45$(value, attributeName);
            },
            decode_puj7f4$: function (attributeName, value) {
              return Kotlin.equals(value, attributeName);
            }
          }),
          TickerAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun() {
            $fun.baseInitializer.call(this, _.kotlinx.html.attributes.TickerEncoder);
          }, /** @lends _.kotlinx.html.attributes.TickerAttribute.prototype */ {
            set_lamm2d$: function (thisRef, attributeName, value) {
              if (value) {
                thisRef.attributes.put_wn2jw4$(attributeName, attributeName);
              }
               else {
                thisRef.attributes.remove_za3rmp$(attributeName);
              }
            }
          }),
          EnumEncoder: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, function (valuesMap) {
            this.valuesMap = valuesMap;
          }, /** @lends _.kotlinx.html.attributes.EnumEncoder.prototype */ {
            encode_bm4g0d$: function (attributeName, value) {
              return value.realValue;
            },
            decode_puj7f4$: function (attributeName, value) {
              var tmp$0;
              tmp$0 = this.valuesMap.get_za3rmp$(value);
              if (tmp$0 == null)
                throw new Kotlin.IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
              return tmp$0;
            }
          }),
          enumEncode_m4whrx$: function ($receiver) {
            return $receiver.realValue;
          },
          EnumAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun(values) {
            $fun.baseInitializer.call(this, new _.kotlinx.html.attributes.EnumEncoder(values));
            this.values = values;
          }),
          stringSetDecode_61zpoe$: function (value) {
            var tmp$0, tmp$1;
            var tmp$2;
            if (value != null) {
              var regex = Kotlin.kotlin.text.Regex_61zpoe$('\\s+');
              var limit;
              if (limit === void 0) {
                limit = 0;
              }
              tmp$2 = regex.split_905azu$(value, limit);
            }
             else
              tmp$2 = null;
            var tmp$5;
            if ((tmp$0 = tmp$2) != null) {
              var destination = new Kotlin.ArrayList();
              var tmp$8;
              tmp$8 = tmp$0.iterator();
              while (tmp$8.hasNext()) {
                var element = tmp$8.next();
                if (!(element.length === 0)) {
                  destination.add_za3rmp$(element);
                }
              }
              tmp$5 = destination;
            }
             else
              tmp$5 = null;
            return (tmp$1 = tmp$5) != null ? Kotlin.kotlin.collections.toSet_q5oq31$(tmp$1) : null;
          },
          stringSetEncode_lhygcy$: function ($receiver) {
            return Kotlin.kotlin.collections.joinToString_ld60a2$($receiver, ' ');
          },
          StringSetEncoder: Kotlin.createObject(function () {
            return [_.kotlinx.html.attributes.AttributeEncoder];
          }, null, /** @lends _.kotlinx.html.attributes.StringSetEncoder.prototype */ {
            encode_bm4g0d$: function (attributeName, value) {
              return Kotlin.kotlin.collections.joinToString_ld60a2$(value, ' ');
            },
            decode_puj7f4$: function (attributeName, value) {
              var tmp$0;
              return (tmp$0 = _.kotlinx.html.attributes.stringSetDecode_61zpoe$(value)) != null ? tmp$0 : Kotlin.throwNPE();
            },
            empty_l5rr1g$: function (attributeName, tag) {
              return Kotlin.kotlin.collections.emptySet();
            }
          }),
          StringSetAttribute: Kotlin.createClass(function () {
            return [_.kotlinx.html.attributes.Attribute];
          }, function $fun() {
            $fun.baseInitializer.call(this, _.kotlinx.html.attributes.StringSetEncoder);
          })
        }),
        consumers: Kotlin.definePackage(null, /** @lends _.kotlinx.html.consumers */ {
          DelayedConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream) {
            this.downstream = downstream;
            this.delayed_y0ozld$ = null;
          }, /** @lends _.kotlinx.html.consumers.DelayedConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.processDelayedTag();
              this.delayed_y0ozld$ = tag;
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              if (this.delayed_y0ozld$ == null || !Kotlin.equals(this.delayed_y0ozld$, tag)) {
                throw new Kotlin.IllegalStateException("You can't change tag attribute because it was already passed to the downstream");
              }
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              if (this.delayed_y0ozld$ == null || !Kotlin.equals(this.delayed_y0ozld$, tag)) {
                throw new Kotlin.IllegalStateException("You can't change tag attribute because it was already passed to the downstream");
              }
            },
            onTagEnd_tkgjla$: function (tag) {
              this.processDelayedTag();
              this.downstream.onTagEnd_tkgjla$(tag);
            },
            onTagContent_6bul2c$: function (content) {
              this.processDelayedTag();
              this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.processDelayedTag();
              this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            finalize: function () {
              this.processDelayedTag();
              return this.downstream.finalize();
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              this.processDelayedTag();
              return this.downstream.onTagContentUnsafe_4yqypv$(block);
            },
            processDelayedTag: function () {
              var tmp$0;
              var tmp$1;
              if ((tmp$0 = this.delayed_y0ozld$) != null) {
                var block$result;
                this.delayed_y0ozld$ = null;
                this.downstream.onTagStart_tkgjla$(tmp$0);
                tmp$1 = block$result;
              }
               else
                tmp$1 = null;
              tmp$1;
            }
          }, /** @lends _.kotlinx.html.consumers.DelayedConsumer */ {
          }),
          delayed_hbthkp$: function ($receiver) {
            return Kotlin.isType($receiver, _.kotlinx.html.consumers.DelayedConsumer) ? $receiver : new _.kotlinx.html.consumers.DelayedConsumer($receiver);
          },
          PredicateResults: Kotlin.createObject(null, function () {
            this.PASS = _.kotlinx.html.consumers.PredicateResult.PASS;
            this.SKIP = _.kotlinx.html.consumers.PredicateResult.SKIP;
            this.DROP = _.kotlinx.html.consumers.PredicateResult.DROP;
          }),
          PredicateResult: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun() {
            $fun.baseInitializer.call(this);
          }, function () {
            return {
              PASS: function () {
                return new _.kotlinx.html.consumers.PredicateResult();
              },
              SKIP: function () {
                return new _.kotlinx.html.consumers.PredicateResult();
              },
              DROP: function () {
                return new _.kotlinx.html.consumers.PredicateResult();
              }
            };
          }),
          FilterTagConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream, predicate) {
            this.downstream = downstream;
            this.predicate = predicate;
            this.currentLevel_6s7ijm$ = 0;
            this.skippedLevels_602ies$ = new Kotlin.PrimitiveNumberHashSet();
            this.dropLevel_69l90i$ = null;
          }, /** @lends _.kotlinx.html.consumers.FilterTagConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              var tmp$0;
              this.currentLevel_6s7ijm$++;
              if (this.dropLevel_69l90i$ == null) {
                tmp$0 = this.predicate(tag);
                if (Kotlin.equals(tmp$0, _.kotlinx.html.consumers.PredicateResult.PASS))
                  this.downstream.onTagStart_tkgjla$(tag);
                else if (Kotlin.equals(tmp$0, _.kotlinx.html.consumers.PredicateResult.SKIP))
                  this.skippedLevels_602ies$.add_za3rmp$(this.currentLevel_6s7ijm$);
                else if (Kotlin.equals(tmp$0, _.kotlinx.html.consumers.PredicateResult.DROP))
                  this.dropLevel_69l90i$ = this.currentLevel_6s7ijm$;
              }
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              throw new Kotlin.UnsupportedOperationException("this filter doesn't support attribute change");
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              throw new Kotlin.UnsupportedOperationException("this filter doesn't support attribute change");
            },
            onTagEnd_tkgjla$: function (tag) {
              if (this.canPassCurrentLevel()) {
                this.downstream.onTagEnd_tkgjla$(tag);
              }
              this.skippedLevels_602ies$.remove_za3rmp$(this.currentLevel_6s7ijm$);
              if (this.dropLevel_69l90i$ === this.currentLevel_6s7ijm$) {
                this.dropLevel_69l90i$ = null;
              }
              this.currentLevel_6s7ijm$--;
            },
            onTagContent_6bul2c$: function (content) {
              if (this.canPassCurrentLevel()) {
                this.downstream.onTagContent_6bul2c$(content);
              }
            },
            onTagContentEntity_ws8or7$: function (entity) {
              if (this.canPassCurrentLevel()) {
                this.downstream.onTagContentEntity_ws8or7$(entity);
              }
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              if (this.canPassCurrentLevel()) {
                this.downstream.onTagContentUnsafe_4yqypv$(block);
              }
            },
            canPassCurrentLevel: function () {
              return this.dropLevel_69l90i$ == null && !this.skippedLevels_602ies$.contains_za3rmp$(this.currentLevel_6s7ijm$);
            },
            finalize: function () {
              return this.downstream.finalize();
            }
          }),
          filter_tw2sm5$f: function (closure$predicate) {
            return function (it) {
              return closure$predicate.call(_.kotlinx.html.consumers.PredicateResults, it);
            };
          },
          filter_tw2sm5$: function ($receiver, predicate) {
            return _.kotlinx.html.consumers.delayed_hbthkp$(new _.kotlinx.html.consumers.FilterTagConsumer($receiver, _.kotlinx.html.consumers.filter_tw2sm5$f(predicate)));
          },
          FinalizeConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream, block) {
            this.downstream = downstream;
            this.block = block;
            this.level_iudat5$ = 0;
          }, /** @lends _.kotlinx.html.consumers.FinalizeConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.downstream.onTagStart_tkgjla$(tag);
              this.level_iudat5$++;
            },
            onTagEnd_tkgjla$: function (tag) {
              this.downstream.onTagEnd_tkgjla$(tag);
              this.level_iudat5$--;
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              this.downstream.onTagAttributeChange_kfu432$(tag, attribute, value);
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              this.downstream.onTagEvent_tcnl1j$(tag, event, value);
            },
            onTagContent_6bul2c$: function (content) {
              this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              this.downstream.onTagContentUnsafe_4yqypv$(block);
            },
            finalize: function () {
              return this.block(this.downstream.finalize(), this.level_iudat5$ > 0);
            }
          }),
          onFinalize_s52ojt$f: function (closure$block) {
            return function (to, partial) {
              closure$block(to, partial);
              return to;
            };
          },
          onFinalize_s52ojt$: function ($receiver, block) {
            return new _.kotlinx.html.consumers.FinalizeConsumer($receiver, _.kotlinx.html.consumers.onFinalize_s52ojt$f(block));
          },
          onFinalizeMap_v5sgtx$: function ($receiver, block) {
            return new _.kotlinx.html.consumers.FinalizeConsumer($receiver, block);
          },
          TimedResult: Kotlin.createClass(null, function (result, time) {
            this.result = result;
            this.time = time;
          }, /** @lends _.kotlinx.html.consumers.TimedResult.prototype */ {
            component1: function () {
              return this.result;
            },
            component2: function () {
              return this.time;
            },
            copy_hffbl0$: function (result, time) {
              return new _.kotlinx.html.consumers.TimedResult(result === void 0 ? this.result : result, time === void 0 ? this.time : time);
            },
            toString: function () {
              return 'TimedResult(result=' + Kotlin.toString(this.result) + (', time=' + Kotlin.toString(this.time)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.result) | 0;
              result = result * 31 + Kotlin.hashCode(this.time) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.time, other.time)))));
            }
          }),
          get_out_gp06rh$: {value: function ($receiver) {
            return $receiver.result;
          }},
          TimeMeasureConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream) {
            this.downstream = downstream;
            this.start_tvef5u$ = new Date();
          }, /** @lends _.kotlinx.html.consumers.TimeMeasureConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.downstream.onTagStart_tkgjla$(tag);
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              this.downstream.onTagAttributeChange_kfu432$(tag, attribute, value);
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              this.downstream.onTagEvent_tcnl1j$(tag, event, value);
            },
            onTagEnd_tkgjla$: function (tag) {
              this.downstream.onTagEnd_tkgjla$(tag);
            },
            onTagContent_6bul2c$: function (content) {
              this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              this.downstream.onTagContentUnsafe_4yqypv$(block);
            },
            finalize: function () {
              return new _.kotlinx.html.consumers.TimedResult(this.downstream.finalize(), Kotlin.Long.fromInt((new Date()).getTime()).subtract(Kotlin.Long.fromInt(this.start_tvef5u$.getTime())));
            }
          }),
          measureTime_hbthkp$: function ($receiver) {
            return new _.kotlinx.html.consumers.TimeMeasureConsumer($receiver);
          },
          TraceConsumer: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (downstream) {
            this.downstream = downstream;
            this.id_mmqiut$ = 'ID-' + (new Date()).getTime() % 16384;
            this.path_dhg2cr$ = new Kotlin.ArrayList(1024);
          }, /** @lends _.kotlinx.html.consumers.TraceConsumer.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              this.downstream.onTagStart_tkgjla$(tag);
              this.path_dhg2cr$.add_za3rmp$(tag.tagName);
              Kotlin.println('[' + this.id_mmqiut$ + ']  open ' + tag.tagName + ' path: ' + Kotlin.kotlin.collections.joinToString_ld60a2$(this.path_dhg2cr$, ' > '));
            },
            onTagEnd_tkgjla$: function (tag) {
              this.downstream.onTagEnd_tkgjla$(tag);
              this.path_dhg2cr$.removeAt_za3lpa$(Kotlin.kotlin.collections.get_lastIndex_a7ptmv$(this.path_dhg2cr$));
              Kotlin.println('[' + this.id_mmqiut$ + '] close ' + tag.tagName + ' path: ' + Kotlin.kotlin.collections.joinToString_ld60a2$(this.path_dhg2cr$, ' > '));
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              this.downstream.onTagAttributeChange_kfu432$(tag, attribute, value);
              Kotlin.println('[' + this.id_mmqiut$ + ']     ' + tag.tagName + '.' + attribute + ' changed to ' + Kotlin.toString(value));
            },
            finalize: function () {
              var v = this.downstream.finalize();
              Kotlin.println('[' + this.id_mmqiut$ + '] finalized: ' + Kotlin.toString(v));
              return v;
            },
            onTagContent_6bul2c$: function (content) {
              return this.downstream.onTagContent_6bul2c$(content);
            },
            onTagContentEntity_ws8or7$: function (entity) {
              return this.downstream.onTagContentEntity_ws8or7$(entity);
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              return this.downstream.onTagContentUnsafe_4yqypv$(block);
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              return this.downstream.onTagEvent_tcnl1j$(tag, event, value);
            }
          }),
          trace_hbthkp$: function ($receiver) {
            return new _.kotlinx.html.consumers.TraceConsumer($receiver);
          }
        }),
        impl: Kotlin.definePackage(null, /** @lends _.kotlinx.html.impl */ {
          DelegatingMap: Kotlin.createClass(function () {
            return [Kotlin.kotlin.collections.MutableMap];
          }, function (initialValues, tag, consumer) {
            this.tag = tag;
            this.consumer = consumer;
            this.backing_c5bz0b$ = initialValues;
            this.backingMutable_die2jl$ = false;
          }, /** @lends _.kotlinx.html.impl.DelegatingMap.prototype */ {
            size: {
              get: function () {
                return this.backing_c5bz0b$.size;
              }
            },
            isEmpty: function () {
              return this.backing_c5bz0b$.isEmpty();
            },
            containsKey_za3rmp$: function (key) {
              return this.backing_c5bz0b$.containsKey_za3rmp$(key);
            },
            containsValue_za3rmp$: function (value) {
              return this.backing_c5bz0b$.containsValue_za3rmp$(value);
            },
            get_za3rmp$: function (key) {
              return this.backing_c5bz0b$.get_za3rmp$(key);
            },
            put_wn2jw4$: function (key, value) {
              var mutable = this.switchToMutable();
              var old = mutable.put_wn2jw4$(key, value);
              if (!Kotlin.equals(old, value)) {
                this.consumer().onTagAttributeChange_kfu432$(this.tag, key, value);
              }
              return old;
            },
            remove_za3rmp$: function (key) {
              var tmp$0;
              var mutable = this.switchToMutable();
              if ((tmp$0 = mutable.remove_za3rmp$(key)) != null) {
                if (true) {
                  this.consumer().onTagAttributeChange_kfu432$(this.tag, key, null);
                }
                return tmp$0;
              }
               else
                return null;
            },
            putAll_r12sna$: function (from) {
              var tmp$0;
              tmp$0 = from.entries.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                this.put_wn2jw4$(element.key, element.value);
              }
            },
            clear: function () {
              var $receiver = this.backing_c5bz0b$;
              var tmp$0;
              tmp$0 = Kotlin.kotlin.collections.iterator_efxzmg$($receiver);
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                this.consumer().onTagAttributeChange_kfu432$(this.tag, element.key, null);
              }
              this.backing_c5bz0b$ = Kotlin.kotlin.collections.emptyMap();
              this.backingMutable_die2jl$ = false;
            },
            immutableEntries: {
              get: function () {
                return this.backing_c5bz0b$.entries;
              }
            },
            switchToMutable: function () {
              var tmp$0, tmp$1;
              if (this.backingMutable_die2jl$) {
                tmp$0 = this.backing_c5bz0b$;
              }
               else {
                this.backingMutable_die2jl$ = true;
                this.backing_c5bz0b$ = Kotlin.java.util.LinkedHashMap_r12sna$(this.backing_c5bz0b$);
                tmp$0 = this.backing_c5bz0b$;
              }
              return Kotlin.isType(tmp$1 = tmp$0, Kotlin.kotlin.collections.MutableMap) ? tmp$1 : Kotlin.throwCCE();
            },
            keys: {
              get: function () {
                return this.switchToMutable().keys;
              }
            },
            values: {
              get: function () {
                return this.switchToMutable().values;
              }
            },
            entries: {
              get: function () {
                return this.switchToMutable().entries;
              }
            }
          }, /** @lends _.kotlinx.html.impl.DelegatingMap */ {
          })
        }),
        stream: Kotlin.definePackage(function () {
          this.AVERAGE_PAGE_SIZE_u8z5cd$ = 32768;
          this.escapeMap_cnus55$ = Kotlin.kotlin.collections.mapOf_eoa9s7$([Kotlin.kotlin.to_l1ob02$('<', '&lt;'), Kotlin.kotlin.to_l1ob02$('>', '&gt;'), Kotlin.kotlin.to_l1ob02$('&', '&amp;'), Kotlin.kotlin.to_l1ob02$("'", '&apos;'), Kotlin.kotlin.to_l1ob02$('"', '&quot;')]);
          this.letterRangeLowerCase_v79xac$ = new Kotlin.CharRange('a', 'z');
          this.letterRangeUpperCase_izvd0j$ = new Kotlin.CharRange('A', 'Z');
          this.digitRange_5mxb02$ = new Kotlin.CharRange('0', '9');
        }, /** @lends _.kotlinx.html.stream */ {
          HTMLStreamBuilder: Kotlin.createClass(function () {
            return [_.kotlinx.html.TagConsumer];
          }, function (out, prettyPrint) {
            this.out = out;
            this.prettyPrint = prettyPrint;
            this.level_p5kad8$ = 0;
            this.ln_m3x20y$ = true;
            this.UnsafeImpl = new _.kotlinx.html.stream.HTMLStreamBuilder.UnsafeImpl$f(this);
          }, /** @lends _.kotlinx.html.stream.HTMLStreamBuilder.prototype */ {
            onTagStart_tkgjla$: function (tag) {
              if (this.prettyPrint && !tag.inlineTag) {
                this.indent();
              }
              this.level_p5kad8$++;
              this.out.append('<');
              this.out.append(tag.tagName);
              if (tag.namespace != null) {
                this.out.append(' xmlns="');
                this.out.append(tag.namespace);
                this.out.append('"');
              }
              if (!tag.attributes.isEmpty()) {
                var tmp$0;
                var index = 0;
                tmp$0 = tag.attributesEntries.iterator();
                while (tmp$0.hasNext()) {
                  var item = tmp$0.next();
                  index++;
                  if (!_.kotlinx.html.stream.isValidXmlAttributeName(item.key)) {
                    throw new Kotlin.IllegalArgumentException('Tag ' + tag.tagName + ' has invalid attribute name ' + item.key);
                  }
                  this.out.append(' ');
                  this.out.append(item.key);
                  this.out.append('="');
                  _.kotlinx.html.stream.escapeAppend(this.out, item.value);
                  this.out.append('"');
                }
              }
              this.out.append('>');
              this.ln_m3x20y$ = false;
            },
            onTagAttributeChange_kfu432$: function (tag, attribute, value) {
              throw new Kotlin.UnsupportedOperationException("tag attribute can't be changed as it was already written to the stream. Use with DelayedConsumer to be able to modify attributes");
            },
            onTagEvent_tcnl1j$: function (tag, event, value) {
              throw new Kotlin.UnsupportedOperationException("you can't assign lambda event handler when building text");
            },
            onTagEnd_tkgjla$: function (tag) {
              this.level_p5kad8$--;
              if (this.ln_m3x20y$) {
                this.indent();
              }
              if (!tag.emptyTag) {
                this.out.append('<\/');
                this.out.append(tag.tagName);
                this.out.append('>');
              }
              if (this.prettyPrint && !tag.inlineTag) {
                this.appenln();
              }
            },
            onTagContent_6bul2c$: function (content) {
              _.kotlinx.html.stream.escapeAppend(this.out, content);
              this.ln_m3x20y$ = false;
            },
            onTagContentEntity_ws8or7$: function (entity) {
              this.out.append(entity.text);
              this.ln_m3x20y$ = false;
            },
            finalize: function () {
              return this.out;
            },
            onTagContentUnsafe_4yqypv$: function (block) {
              block.call(this.UnsafeImpl);
            },
            appenln: function () {
              if (this.prettyPrint && !this.ln_m3x20y$) {
                this.out.append('\n');
                this.ln_m3x20y$ = true;
              }
            },
            indent: function () {
              if (this.prettyPrint) {
                if (!this.ln_m3x20y$) {
                  this.out.append('\n');
                }
                var remaining = this.level_p5kad8$;
                while (remaining >= 4) {
                  this.out.append('        ');
                  remaining -= 4;
                }
                while (remaining >= 2) {
                  this.out.append('    ');
                  remaining -= 2;
                }
                if (remaining > 0) {
                  this.out.append('  ');
                }
                this.ln_m3x20y$ = false;
              }
            }
          }, /** @lends _.kotlinx.html.stream.HTMLStreamBuilder */ {
            UnsafeImpl$f: Kotlin.createClass(function () {
              return [_.kotlinx.html.Unsafe];
            }, function (this$HTMLStreamBuilder_0) {
              this.this$HTMLStreamBuilder_0 = this$HTMLStreamBuilder_0;
            }, /** @lends _.kotlinx.html.stream.HTMLStreamBuilder.UnsafeImpl$f.prototype */ {
              unaryPlus_pdl1w0$: function ($receiver) {
                this.this$HTMLStreamBuilder_0.out.append($receiver);
              }
            }, /** @lends _.kotlinx.html.stream.HTMLStreamBuilder.UnsafeImpl$f */ {
            })
          }),
          createHTML_6taknv$f: function (sb, last) {
            return sb.toString();
          },
          createHTML_6taknv$: function (prettyPrint) {
            if (prettyPrint === void 0)
              prettyPrint = true;
            _.kotlinx.html.stream.AVERAGE_PAGE_SIZE_u8z5cd$;
            return _.kotlinx.html.consumers.delayed_hbthkp$(_.kotlinx.html.consumers.onFinalizeMap_v5sgtx$(new _.kotlinx.html.stream.HTMLStreamBuilder(new Kotlin.StringBuilder(), prettyPrint), _.kotlinx.html.stream.createHTML_6taknv$f));
          },
          appendHTML_s21csf$: function ($receiver, prettyPrint) {
            if (prettyPrint === void 0)
              prettyPrint = true;
            return _.kotlinx.html.consumers.delayed_hbthkp$(new _.kotlinx.html.stream.HTMLStreamBuilder($receiver, prettyPrint));
          },
          _isLetter: function ($receiver) {
            return _.kotlinx.html.stream.letterRangeLowerCase_v79xac$.contains_htax2k$($receiver) || _.kotlinx.html.stream.letterRangeUpperCase_izvd0j$.contains_htax2k$($receiver);
          },
          _isDigit: function ($receiver) {
            return _.kotlinx.html.stream.digitRange_5mxb02$.contains_htax2k$($receiver);
          },
          isValidXmlAttributeName: function ($receiver) {
            var tmp$0 = !_.kotlinx.html.stream.startsWithXml($receiver);
            if (tmp$0) {
              tmp$0 = $receiver.length > 0;
            }
            var tmp$1 = tmp$0 && (_.kotlinx.html.stream._isLetter($receiver.charAt(0)) || $receiver.charAt(0) === '_');
            if (tmp$1) {
              all_gwcya$break: {
                var tmp$2;
                tmp$2 = Kotlin.kotlin.text.iterator_gw00vq$($receiver);
                while (tmp$2.hasNext()) {
                  var element = tmp$2.next();
                  if (!(_.kotlinx.html.stream._isLetter(element) || _.kotlinx.html.stream._isDigit(element) || Kotlin.kotlin.text.contains_cjsvxq$('._:-', element))) {
                    tmp$1 = false;
                    break all_gwcya$break;
                  }
                }
                tmp$1 = true;
              }
            }
            return tmp$1;
          },
          startsWithXml: function ($receiver) {
            var tmp$0 = $receiver.length >= 3;
            if (tmp$0) {
              var it = $receiver.charAt(0);
              tmp$0 = it === 'x' || it === 'X';
            }
            var tmp$1 = tmp$0;
            if (tmp$1) {
              var it_0 = $receiver.charAt(1);
              tmp$1 = it_0 === 'm' || it_0 === 'M';
            }
            var tmp$2 = tmp$1;
            if (tmp$2) {
              var it_1 = $receiver.charAt(2);
              tmp$2 = it_1 === 'l' || it_1 === 'L';
            }
            return tmp$2;
          },
          escapeAppend: function ($receiver, s) {
            var tmp$0;
            var lastIndex = 0;
            tmp$0 = s.length - 1;
            for (var idx = 0; idx <= tmp$0; idx++) {
              var ch = s.charAt(idx);
              var escape = _.kotlinx.html.stream.escapeMap_cnus55$.get_za3rmp$(ch);
              if (escape != null) {
                $receiver.append(s, lastIndex, idx);
                $receiver.append(escape);
                lastIndex = idx + 1;
              }
            }
            if (lastIndex < s.length) {
              $receiver.append(s, lastIndex, s.length);
            }
          }
        })
      })
    })
  });
  Kotlin.defineModule('kotlinx.html.shared', _);
  return _;
}(require('kotlin'));

module.exports = this['kotlinx.html.shared'];