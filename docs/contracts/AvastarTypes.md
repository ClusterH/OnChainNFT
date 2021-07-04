# Avastar Data Types

View Source: [contracts/AvastarTypes.sol](https://github.com/Dapp-Wizards/Avastars-Contracts/blob/master/contracts/AvastarTypes.sol)

**AvastarTypes** 
**↘ Derived Contracts: [AvastarMetadata](contracts/AvastarMetadata.md), [AvastarPrimeMinter](contracts/AvastarPrimeMinter.md), [AvastarReplicantMinter](contracts/AvastarReplicantMinter.md), [AvastarState](contracts/AvastarState.md), [IAvastarTeleporter](contracts/IAvastarTeleporter.md), [IAvastarTeleporterThin](contracts/IAvastarTeleporterThin.md)**

## **Enums**
### Generation

```solidity
enum Generation {
 ONE,
 TWO,
 THREE,
 FOUR,
 FIVE
}
```

### Series

```solidity
enum Series {
 PROMO,
 ONE,
 TWO,
 THREE,
 FOUR,
 FIVE
}
```

### Wave

```solidity
enum Wave {
 PRIME,
 REPLICANT
}
```

### Gene

```solidity
enum Gene {
 SKIN_TONE,
 HAIR_COLOR,
 EYE_COLOR,
 BG_COLOR,
 BACKDROP,
 EARS,
 FACE,
 NOSE,
 MOUTH,
 FACIAL_FEATURE,
 EYES,
 HAIR_STYLE
}
```

### Gender

```solidity
enum Gender {
 ANY,
 MALE,
 FEMALE
}
```

### Rarity

```solidity
enum Rarity {
 COMMON,
 UNCOMMON,
 RARE,
 EPIC,
 LEGENDARY
}
```

## Structs
### Trait

```solidity
struct Trait {
 uint256 id,
 enum AvastarTypes.Generation generation,
 enum AvastarTypes.Gender gender,
 enum AvastarTypes.Gene gene,
 enum AvastarTypes.Rarity rarity,
 uint8 variation,
 enum AvastarTypes.Series[] series,
 string name,
 string svg
}
```

### Prime

```solidity
struct Prime {
 uint256 id,
 uint256 serial,
 uint256 traits,
 bool[12] replicated,
 enum AvastarTypes.Generation generation,
 enum AvastarTypes.Series series,
 enum AvastarTypes.Gender gender,
 uint8 ranking
}
```

### Replicant

```solidity
struct Replicant {
 uint256 id,
 uint256 serial,
 uint256 traits,
 enum AvastarTypes.Generation generation,
 enum AvastarTypes.Gender gender,
 uint8 ranking
}
```

### Avastar

```solidity
struct Avastar {
 uint256 id,
 uint256 serial,
 uint256 traits,
 enum AvastarTypes.Generation generation,
 enum AvastarTypes.Wave wave
}
```

### Attribution

```solidity
struct Attribution {
 enum AvastarTypes.Generation generation,
 string artist,
 string infoURI
}
```

