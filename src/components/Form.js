import PropTypes from 'prop-types';
import Button from "./Button";
import styles from './Form.module.css';

const Form = ({ children, footerContent }) => {
    return(
        <form className={styles.form}>
            {
                children ?
                    children :
                    'Please add inputs to this form'
            }
            <div className={styles.formFooter}>
                {
                    footerContent || <Button>Submit</Button>
                }
            </div>
        </form>
    );
}

Form.propTypes = {
    footerContent: PropTypes.element
}

export default Form;
