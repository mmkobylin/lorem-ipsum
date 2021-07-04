import React, { useState } from 'react';
// import data from '../data';

// here come the props
const Paragraph  = ( { count } ) => {

    const data = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ultrices sapien massa, non faucibus lectus commodo at. Nulla et aliquam nisi. Pellentesque aliquam sed lacus vel egestas. Curabitur ipsum elit, interdum vitae dolor viverra, vulputate dapibus massa. Donec congue massa nec ex tristique, quis elementum ipsum molestie. Integer at massa massa. Aenean convallis aliquet fermentum. Pellentesque mattis, neque vitae bibendum mollis, nisi augue rutrum ligula, in egestas erat purus et nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec commodo purus at tellus hendrerit, a posuere lectus accumsan. Mauris vitae mauris at ipsum aliquam elementum ut ac tortor. Aenean purus dolor, lobortis sed lectus nec, imperdiet placerat ipsum. Vivamus nec lorem et eros scelerisque congue nec non nisi. Donec sollicitudin suscipit nunc, a fringilla lorem.",
        "Cras a posuere lacus. Praesent in pharetra nunc, vel lobortis dolor. Nulla at felis diam. Praesent lacinia mauris vitae tincidunt blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac cursus metus, id euismod erat. Sed facilisis commodo posuere.",
        "Cras ultrices molestie lorem quis finibus. Cras purus dolor, porta non ultricies id, feugiat nec velit. Duis nec dolor sem. Donec volutpat a massa in congue. Fusce euismod libero nec libero imperdiet placerat. Mauris consectetur tortor vehicula leo ultricies, vel vestibulum metus eleifend. Fusce sed efficitur nisi. Mauris aliquam sem non egestas condimentum. Cras lectus arcu, consequat vel eros sit amet, pellentesque tempus est. Nullam imperdiet feugiat ligula pharetra volutpat. Nullam sollicitudin vitae risus at imperdiet.",
        "Donec vestibulum viverra purus in ornare. Ut suscipit et nisl eu posuere. Donec vitae justo a sapien vulputate facilisis sed vel nisi. Donec pharetra porta odio, at commodo diam tempor ac. Donec ac convallis ex. Nullam et mattis risus. Mauris dui magna, dignissim sed ipsum et, lacinia facilisis lorem. Duis viverra faucibus tempor. Maecenas massa magna, iaculis euismod sem ut, consectetur malesuada orci. Fusce diam justo, viverra non posuere ut, hendrerit vel magna. Pellentesque vel augue sit amet libero maximus mollis."
    ]

    return (
        <div>
            <p> Count: </p>
            { data.map( ( paragraph, index ) => {
                return (
                    <p key = { index }
                    > { paragraph } </p>
                )
            }  ) }  
        </div>
    )

}

export default Paragraph