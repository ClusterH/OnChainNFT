# Avastar Trait Factory

View Source: [contracts/TraitFactory.sol](https://github.com/Dapp-Wizards/Avastars-Contracts/blob/master/contracts/TraitFactory.sol)

**TraitFactory** **↗ Extends: [AvastarState](contracts/AvastarState.md)**
**↘ Derived Contracts: [PrimeFactory](contracts/PrimeFactory.md)**

## **Events**

- [NewTrait](#newtrait)

### NewTrait

```solidity
event NewTrait(
	uint256 id,
	enum AvastarTypes.Gene gene,
	uint8 variation,
	string name
)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| id | uint256 |  | 
| gene | enum AvastarTypes.Gene |  | 
| variation | uint8 |  | 
| name | string |  | 

## **Functions**

- [getTrait](#gettrait)
- [getTraitIdByGenerationGeneAndVariation](#gettraitidbygenerationgeneandvariation)
- [createTrait](#createtrait)
- [renderAvastar](#renderavastar)
- [strConcat](#strconcat)

### getTrait

Retrieve a Trait by ID

```solidity
function getTrait(uint256 _traitId)
external view
returns (
	uint256 id,
	enum AvastarTypes.Generation generation,
	enum AvastarTypes.Series[] series,
	enum AvastarTypes.Gender gender,
	enum AvastarTypes.Gene gene,
	uint8 variation,
	string name,
	string svg
)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _traitId | uint256 | the ID of the Trait to retrieve | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| id | uint256 | the ID of the trait | 
| generation | enum AvastarTypes.Generation | generation of the trait | 
| series | enum AvastarTypes.Series[] | list of series the trait may appear in | 
| gender | enum AvastarTypes.Gender | gender(s) the trait is valid for | 
| gene | enum AvastarTypes.Gene | ration generation of the trait | 
| variation | uint8 | variation of the gene the trait represents | 
| name | string | name of the trait | 
| svg | string | svg layer representation of the trait | 

### getTraitIdByGenerationGeneAndVariation

Get Trait ID by Generation, Gene, and Variation

```solidity
function getTraitIdByGenerationGeneAndVariation(
	enum AvastarTypes.Generation _generation,
	enum AvastarTypes.Gene _gene,
	uint256 _variationSafe
)
external view
returns (uint256 traitId)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _generation | enum AvastarTypes.Generation | the generation the trait belongs to | 
| _gene | enum AvastarTypes.Gene | ration the generation the trait belongs to | 
| _variationSafe | uint256 | the variation of the gene | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| traitId | uint256 | the ID of the specified trait | 

### createTrait

Create a Trait

```solidity
function createTrait(
	enum AvastarTypes.Generation _generation,
	enum AvastarTypes.Series[] _series,
	enum AvastarTypes.Gender _gender,
	enum AvastarTypes.Gene _gene,
	uint256 _variationSafe,
	string _name,
	string _svg
)
external nonpayable onlySysAdmin whenNotPaused 
returns (uint256 traitId)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _generation | enum AvastarTypes.Generation | the generation the trait belongs to | 
| _series | enum AvastarTypes.Series[] | list of series the trait may appear in | 
| _gender | enum AvastarTypes.Gender | gender the trait is valid for | 
| _gene | enum AvastarTypes.Gene | ration the generation the trait belongs to | 
| _variationSafe | uint256 | the variation of the gene the trait belongs to | 
| _name | string | the name of the trait | 
| _svg | string | svg layer representation of the trait | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| traitId | uint256 | the token ID of the newly created trait | 

### renderAvastar

Assemble the artwork for a given Trait hash with art from the given Generation

```solidity
function renderAvastar(enum AvastarTypes.Generation _generation, uint256 _traitHash)
public view
returns (string svg)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _generation | enum AvastarTypes.Generation | the generation the Avastar belongs to | 
| _traitHash | uint256 | the Avastar's trait hash | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| svg | string | the fully rendered SVG for the Avastar | 

### strConcat

Concatenate two strings

```solidity
function strConcat(string _a, string _b)
private pure
returns (string result)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _a | string | the first string | 
| _b | string | the second string | 

**Returns**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| result | string | the concatenation of `_a` and `_b` | 
