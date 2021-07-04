# ERC20.sol

View Source: [@openzeppelin/contracts/token/ERC20/ERC20.sol](https://github.com/Dapp-Wizards/Avastars-Contracts/blob/master/@openzeppelin/contracts/token/ERC20/ERC20.sol)

**ERC20** **↗ Extends: [Context](contracts/Context.md), [IERC20](contracts/IERC20.md)**
**↘ Derived Contracts: [AvastarReplicantMinter](contracts/AvastarReplicantMinter.md)**

Implementation of the {IERC20} interface.
 * This implementation is agnostic to the way tokens are created. This means
that a supply mechanism has to be added in a derived contract using {_mint}.
For a generic mechanism see {ERC20Mintable}.
 * TIP: For a detailed writeup see our guide
https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
to implement supply mechanisms].
 * We have followed general OpenZeppelin guidelines: functions revert instead
of returning `false` on failure. This behavior is nonetheless conventional
and does not conflict with the expectations of ERC20 applications.
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
This allows applications to reconstruct the allowance for all accounts just
by listening to said events. Other implementations of the EIP may not emit
these events, as it isn't required by the specification.
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
functions have been added to mitigate the well-known issues around setting
allowances. See {IERC20-approve}.

## Contract Members
**Constants & Variables**

```solidity
// private members
mapping(address => uint256) private _balances;
mapping(address => mapping(address => uint256)) private _allowances;
uint256 private _totalSupply;

```

## **Functions**

- [totalSupply](#totalsupply)
- [balanceOf](#balanceof)
- [transfer](#transfer)
- [allowance](#allowance)
- [approve](#approve)
- [transferFrom](#transferfrom)
- [increaseAllowance](#increaseallowance)
- [decreaseAllowance](#decreaseallowance)
- [_transfer](#_transfer)
- [_mint](#_mint)
- [_burn](#_burn)
- [_approve](#_approve)
- [_burnFrom](#_burnfrom)

### totalSupply

⤾ overrides [IERC20.totalSupply](contracts/IERC20.md#totalsupply)

See {IERC20-totalSupply}.

```solidity
function totalSupply()
public view
returns (uint256)
```

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | uint256 |  | 

### balanceOf

⤾ overrides [IERC20.balanceOf](contracts/IERC20.md#balanceof)

See {IERC20-balanceOf}.

```solidity
function balanceOf(address account)
public view
returns (uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| account | address |  | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | uint256 |  | 

### transfer

⤾ overrides [IERC20.transfer](contracts/IERC20.md#transfer)

See {IERC20-transfer}.
     * Requirements:
     * - `recipient` cannot be the zero address.
- the caller must have a balance of at least `amount`.

```solidity
function transfer(address recipient, uint256 amount)
public nonpayable
returns (bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| recipient | address |  | 
| amount | uint256 |  | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | bool |  | 

### allowance

⤾ overrides [IERC20.allowance](contracts/IERC20.md#allowance)

See {IERC20-allowance}.

```solidity
function allowance(address owner, address spender)
public view
returns (uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| owner | address |  | 
| spender | address |  | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | uint256 |  | 

### approve

⤾ overrides [IERC20.approve](contracts/IERC20.md#approve)

See {IERC20-approve}.
     * Requirements:
     * - `spender` cannot be the zero address.

```solidity
function approve(address spender, uint256 amount)
public nonpayable
returns (bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| spender | address |  | 
| amount | uint256 |  | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | bool |  | 

### transferFrom

⤾ overrides [IERC20.transferFrom](contracts/IERC20.md#transferfrom)

See {IERC20-transferFrom}.
     * Emits an {Approval} event indicating the updated allowance. This is not
required by the EIP. See the note at the beginning of {ERC20};
     * Requirements:
- `sender` and `recipient` cannot be the zero address.
- `sender` must have a balance of at least `amount`.
- the caller must have allowance for `sender`'s tokens of at least
`amount`.

```solidity
function transferFrom(
	address sender,
	address recipient,
	uint256 amount
)
public nonpayable
returns (bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| sender | address |  | 
| recipient | address |  | 
| amount | uint256 |  | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | bool |  | 

### increaseAllowance

Atomically increases the allowance granted to `spender` by the caller.
     * This is an alternative to {approve} that can be used as a mitigation for
problems described in {IERC20-approve}.
     * Emits an {Approval} event indicating the updated allowance.
     * Requirements:
     * - `spender` cannot be the zero address.

```solidity
function increaseAllowance(address spender, uint256 addedValue)
public nonpayable
returns (bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| spender | address |  | 
| addedValue | uint256 |  | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | bool |  | 

### decreaseAllowance

Atomically decreases the allowance granted to `spender` by the caller.
     * This is an alternative to {approve} that can be used as a mitigation for
problems described in {IERC20-approve}.
     * Emits an {Approval} event indicating the updated allowance.
     * Requirements:
     * - `spender` cannot be the zero address.
- `spender` must have allowance for the caller of at least
`subtractedValue`.

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue)
public nonpayable
returns (bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| spender | address |  | 
| subtractedValue | uint256 |  | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
|  | bool |  | 

### _transfer

Moves tokens `amount` from `sender` to `recipient`.
     * This is internal function is equivalent to {transfer}, and can be used to
e.g. implement automatic token fees, slashing mechanisms, etc.
     * Emits a {Transfer} event.
     * Requirements:
     * - `sender` cannot be the zero address.
- `recipient` cannot be the zero address.
- `sender` must have a balance of at least `amount`.

```solidity
function _transfer(
	address sender,
	address recipient,
	uint256 amount
)
internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| sender | address |  | 
| recipient | address |  | 
| amount | uint256 |  | 

### _mint

Creates `amount` tokens and assigns them to `account`, increasing
the total supply.
     * Emits a {Transfer} event with `from` set to the zero address.
     * Requirements
     * - `to` cannot be the zero address.

```solidity
function _mint(address account, uint256 amount)
internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| account | address |  | 
| amount | uint256 |  | 

### _burn

Destroys `amount` tokens from `account`, reducing the
total supply.
     * Emits a {Transfer} event with `to` set to the zero address.
     * Requirements
     * - `account` cannot be the zero address.
- `account` must have at least `amount` tokens.

```solidity
function _burn(address account, uint256 amount)
internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| account | address |  | 
| amount | uint256 |  | 

### _approve

Sets `amount` as the allowance of `spender` over the `owner`s tokens.
     * This is internal function is equivalent to `approve`, and can be used to
e.g. set automatic allowances for certain subsystems, etc.
     * Emits an {Approval} event.
     * Requirements:
     * - `owner` cannot be the zero address.
- `spender` cannot be the zero address.

```solidity
function _approve(
	address owner,
	address spender,
	uint256 amount
)
internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| owner | address |  | 
| spender | address |  | 
| amount | uint256 |  | 

### _burnFrom

Destroys `amount` tokens from `account`.`amount` is then deducted
from the caller's allowance.
     * See {_burn} and {_approve}.

```solidity
function _burnFrom(address account, uint256 amount)
internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| account | address |  | 
| amount | uint256 |  | 

