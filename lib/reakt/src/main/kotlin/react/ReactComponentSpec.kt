package react

import org.w3c.dom.*
import kotlin.js.native

class NoProps
interface ProplessComponentSpec : StatelessComponentSpec<NoProps>
interface StatelessComponentSpec<TProps>: ReactComponentSpec<TProps, Unit>


val <TState> ReactComponentSpec<*, TState>.state: TState get() {
    return this.asDynamic().state.value
}

fun <TState> ReactComponentSpec<*, TState>.setState(newState: TState) {
    this.asDynamic().setState(runtime.js {
        value = newState
    })
}

/**
 * Merges nextState with the current state.
 * This is the primary method you use to trigger UI updates from event handlers and server request callbacks.
 * In addition, you can supply an optional callback function that is executed once setState is completed.
 *
 * @param nextState the object that will be merged with the component's state
 * @param callback an optional callback function that is executed once setState is completed.
 */
fun <TState> ReactComponentSpec<*, TState>.setState(nextState: TState, callback: () -> Unit) {
    this.asDynamic().setState(runtime.js {
        value = nextState
    }, callback)
}

interface ReactComponentSpec<TProps, TState>: ReactComponentSpecBase<TProps, TState> {
    @JsName("render")
    fun ReactElementBuilder.render()
}

external interface ReactComponentSpecBase<TProps, TState> {
    val props: TProps get()  = noImpl

    /**
     * If this component has been mounted into the DOM, this returns the corresponding native browser DOM element.
     * This method is useful for reading values out of the DOM, such as form field values and performing DOM measurements.
     */
    fun getDOMNode(): Element = noImpl

    /**
     * When you're integrating with an external JavaScript application you may want to signal a change to a React component rendered with renderComponent().
     * Simply call setProps() to change its properties and trigger a re-render.
     *
     * @param nextProps the object that will be merged with the component's props
     * @param callback an optional callback function that is executed once setProps is completed.
     */
    fun setProps(nextProps: TProps, callback: (() -> Unit)?): Unit = noImpl

    /**
     * Like setProps() but deletes any pre-existing props instead of merging the two objects.
     *
     * @param nextProps the object that will replace the component's props
     * @param callback an optional callback function that is executed once replaceProps is completed.
     */
    fun replaceProps(nextProps: TProps, callback: () -> Unit): Unit = noImpl

    /**
     * Transfer properties from this component to a target component that have not already been set on the target component.
     * After the props are updated, targetComponent is returned as a convenience.
     *
     * @param target the component that will receive the props
     */
    fun <C : ReactComponentSpec<TProps, Any>> transferPropsTo(target: C): C = noImpl


    /**
     * Like setState() but deletes any pre-existing state keys that are not in nextState.
     *
     * @param nextState the object that will replace the component's state
     * @param callback an optional callback function that is executed once replaceState is completed.
     */
    fun replaceState(nextState: TState, callback: () -> Unit): Unit = noImpl

    /**
     * If your render() method reads from something other than this.props or this.state,
     * you'll need to tell React when it needs to re-run render() by calling forceUpdate().
     * You'll also need to call forceUpdate() if you mutate this.state directly.
     * Calling forceUpdate() will cause render() to be called on the component and its children,
     * but React will still only update the DOM if the markup changes.
     * Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().
     * This makes your application much simpler and more efficient.
     *
     * @param callback an optional callback that is executed once forceUpdate is completed.
     */
    fun forceUpdate(callback: () -> Unit): Unit = noImpl

    fun getInitialState(): TState = noImpl

    /**
     *  Component lifecycle methods. See http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/
     *
     *  First render:
     *      getDefaultProps
     *      getInitialState
     *      componentWillMount
     *      render
     *      conmonentDidMount
     *
     *  Props change:
     *      componentWillReceiveProps
     *      shouldComponentUpdate
     *      componentWillUpdate
     *      render
     *      componentDidUpdate
     *
     *  State change:
     *      shouldComponentUpdate
     *      componentWillUpdate
     *      render
     *      componentDidUpdate
     *
     *   Unlount:
     *      componentWillUnmount
    */

    /**
     *  Invoked once, both on the client and server, immediately before the initial rendering occurs.
     *  If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
    */
    fun componentWillMount() {}

    /**
     * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
     * At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation).
     * The componentDidMount() method of child components is invoked before that of parent components.
     * If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.
     * */
    fun componentDidMount() {}

    /**
     * Invoked when a component is receiving new props. This method is not called for the initial render.
     * Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState().
     * The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.
     */
    fun componentWillReceiveProps(nextProps: TProps) {}

    /**
     * Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.
     * Use this as an opportunity to return false when you're certain that the transition to the new props and state will not require a component update.
     *
     * If shouldComponentUpdate returns false, then render() will be completely skipped until the next state change. In addition, componentWillUpdate and componentDidUpdate will not be called.
     * By default, shouldComponentUpdate always returns true to prevent subtle bugs when state is mutated in place, but if you are careful to always treat state as immutable and to read only from props and state in render() then you can override shouldComponentUpdate with an implementation that compares the old props and state to their replacements.
     * If performance is a bottleneck, especially with dozens or hundreds of components, use shouldComponentUpdate to speed up your app.
     * */
    fun shouldComponentUpdate(nextProps: TProps, nextState: TState): Boolean {
        return true
    }

    /**
     * Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
     * Use this as an opportunity to perform preparation before an update occurs.
     */
    fun componentWillUpdate() {}

    /**
     * Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.
     * Use this as an opportunity to operate on the DOM when the component has been
     * */
    fun componentDidUpdate (prevProps: TProps, prevState: TState) {}

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     * Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
     */
    fun componentWillUnmount() {}
}