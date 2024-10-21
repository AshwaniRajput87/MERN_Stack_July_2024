# Quick recap of redux flow

- create slices
- Give the entry of that slice into a store
- wrap the app via Provider using store prop
- build a component and use hooks (useSelector() (state values) and useDispatch() (use for taking actions via user to update the states))

# Redux principle:

1.  Single source of truth.
2.  State are read-only.
3.  Use reducers to update the values of store and these are the pure functions.
