import Chip from "@/components/atoms/Chip"
import {
  StyledContainer,
  StyledLabel,
  StyledChipsList,
} from "@/components/molecules/ChipListing/ChipListing.styled"
import type { ChipListingProps } from "@/components/molecules/ChipListing/ChipListing.types"

function ChipListing(props: ChipListingProps) {
  const { label, chips, renderAfter, ...restProps } = props
  return (
    <StyledContainer {...restProps}>
      <StyledLabel>{label}</StyledLabel>
      <StyledChipsList>
        {chips.map((chip, index) => (
          <li key={index}>
            <Chip>{chip}</Chip>
          </li>
        ))}
      </StyledChipsList>
      {renderAfter && renderAfter()}
    </StyledContainer>
  )
}

export default ChipListing
