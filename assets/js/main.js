$(document).ready(function(){
    
    // Initialize the skillset tab code...
    initializeSkillTabs();

    function initializeSkillTabs() {
        // First we bind a click event listener on the relevent elements...
        bindSkillsetClickEvent();
        
        // ..then we trigger the click event of the initial tab.
        triggerInitialTab();
    }

    function bindSkillsetClickEvent() {
        // We bind a click event listener on all the elements with the attribute [data-skillet]
        $('[data-skillset]').click(function(e){
            // We stop the link from resorting to its default action.
            e.preventDefault();
            
            // We then run the selectTab function to select the current tab.
            selectTab($(this));

            // We store the jQuery object of the selected skill set...
            var selectedSkillset = $('#' + $(this).attr('data-skillset'));

            // ...then send that variable to the switchSkillset function.
            switchSkillset(selectedSkillset);
        });
    }

    function triggerInitialTab() {
        // We force a click event on the frontend skillset tab since we want to start with that.
        $('[data-skillset="skillset-frontend"]').click();
    }

    function switchSkillset(selectedSkillSet) {
        // We hide all skillsets to reset everything
        hideAllSkillsets();

        // Then we run the showSelectedSkillset to show only the skillset in which we selected
        showSelectedSkillset(selectedSkillSet);
    }

    function hideAllSkillsets() {
        // Hide all skillset content so that we can reset everything
        $('.skillset-content').hide();
    }

    function showSelectedSkillset(selectedSkillSet) {
        // We use the passed in jQuery object and show it since it should currently be hidden.
        selectedSkillSet.show();
    }

    function unselectAllTabs() {
        // We reset the state of all the tabs
        $('#skills .tabs ul li').removeClass('is-active');
    }

    function selectTab(currentElement) {
        // Unselect all the tabs so that we can reset the state of the tabs
        unselectAllTabs();

        // Then with the current selected tab, we grab its parent 
        // and add the 'is-active' class to show it is selected
        currentElement.parent().addClass('is-active');
    }
});
