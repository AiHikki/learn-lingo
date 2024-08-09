import CustomSelect from './CustomSelect';
import { formatLanguagesForSelect, levels, prices } from 'lib/data';

const Filters = ({ languages, updateFilter }) => {
  const formattedLanguages = formatLanguagesForSelect(languages);

  return (
    <ul className="mb-8 flex gap-5">
      <li>
        <CustomSelect
          options={formattedLanguages}
          label="Languages"
          width="221px"
          placeholder="Language"
          onChange={({ value }) => updateFilter('language', value)}
        />
      </li>
      <li>
        <CustomSelect
          options={levels}
          label="Level of knowledge"
          width="198px"
          placeholder="Level"
          onChange={({ value }) => updateFilter('level', value)}
        />
      </li>
      <li>
        <CustomSelect
          options={prices}
          label="Price"
          width="124px"
          placeholder="Price"
          onChange={({ value }) => updateFilter('price', value)}
        />
      </li>
    </ul>
  );
};

export default Filters;
