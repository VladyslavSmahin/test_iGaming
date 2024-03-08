    import {TextField} from "@mui/material";

    const Email = (props) => {
        const {onChange, value, sx, variant} = props
        return (
            <>
                <TextField type="email"
                           variant={variant}
                           sx={{ paddingBottom: '30px', ...sx }}
                           placeholder="Email"
                           value={value}
                           onChange={onChange}
                           required/>
            </>
        );
    };

    export default Email;
