<scroll-view scroll-y="{{true}}" class="scroll-box" bindscrolltolower="scroll_lower" lower-threshold="30">
    <view class="list-item" qq:if="{{data_list.length > 0}}">
      <view class="item oh bg-white spacing-mb" qq:for="{{data_list}}" qq:for-item="item" >
        <navigator url="/pages/plugins/shop/detail/detail?id={{item.shop_info.id}}" hover-class="none">
          <image class="logo fl" src="{{item.shop_info.logo}}" mode="aspectFill" />
          <view class="base">
            <view class="title single-text">{{item.shop_info.name}}</view>
            <view class="describe multi-text cr-888">{{item.shop_info.describe}}</view>
          </view>
        </navigator>
        <button class="submit-cancel" type="default" size="mini" bindtap="cancel_event" data-value="{{item.id}}" data-index="{{index}}" hover-class="none">取消</button>
      </view>
    </view>
    <view qq:if="{{data_list.length == 0}}">
        <import src="/pages/common/nodata.qml" />
        <template is="nodata" data="{{status: data_list_loding_status}}"></template>
    </view>
    <import src="/pages/common/bottom_line.qml" />
    <template is="bottom_line" data="{{status: data_bottom_line_status}}"></template>
</scroll-view>